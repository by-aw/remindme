import { Reminder, db } from "@/db";
import Check from "../svg/check";
import "./todo.css";
import { cn } from "@/lib/utils";
import { PanInfo, motion, useAnimate } from "framer-motion";

export interface TodoProps {
  reminder: Reminder;
  className: string;
}

export default function Todo({ reminder, className }: TodoProps) {
  const [scope, animate] = useAnimate();
  function toggleTodo() {
    db.reminders.put({ ...reminder, complete: !reminder.complete });
  }
  function deleteTodo() {
    db.reminders.delete(reminder.id!);
  }
  function handleDragEvent(
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      animate(scope.current, { x: "-100%" }, { duration: 0.2 });
      setTimeout(() => deleteTodo(), 200);
    } else {
      animate(scope.current, { x: 0, opacity: 1 }, { duration: 0.5 });
    }
  }
  return (
    <motion.div
      drag="x"
      onDragEnd={handleDragEvent}
      dragConstraints={{ left: -300, right: 0 }}
      dragElastic={0}
      className={className}
      ref={scope}
    >
      <Check
        onClick={toggleTodo}
        className={cn("Check", reminder.complete ? "Checked" : "Unchecked")}
      />
      <p>{reminder.name}</p>
    </motion.div>
  );
}
