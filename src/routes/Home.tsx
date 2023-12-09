import Todo from "@/components/ui/todo";
import "./Home.css";
import Add from "@/components/svg/add";
import Close from "@/components/svg/close";
import { Input } from "@/components/ui/input";
import { db } from "@/db";
import { useEffect, useRef, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import DotsThree from "@/components/svg/dots-three";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [newReminderName, setNewReminderName] = useState("");
  const reminders = useLiveQuery(() => db.reminders.toArray());
  async function addTodo(e: React.FormEvent) {
    e.preventDefault();
    if (newReminderName == "") return;
    db.reminders.add({
      name: newReminderName,
      time: "",
      color: "",
      complete: false,
    });
    setNewReminderName("");
  }
  function openDialog() {
    dialogRef.current!.showPopover();
  }
  return (
    <div className="Home">
      <h1>Reminders</h1>
      <section>
        <h2>Todo</h2>
        {reminders?.map((reminder, index) => {
          return (
            <Todo
              key={reminder.id}
              reminder={reminder}
              className={cn("Todo", index == 0 && "RoundedTop")}
            />
          );
        })}
        <form onSubmit={addTodo} className="NewReminderForm">
          <Input
            className={cn(
              reminders?.length == 0 ? "RoundedAll" : "RoundedBottom"
            )}
            id="newReminderInput"
            placeholder="Do anything"
            value={newReminderName}
            onChange={(e) => {
              setNewReminderName(e.currentTarget.value);
            }}
          />
          <Button onClick={openDialog} className="OptionsButton">
            <DotsThree />
          </Button>
        </form>
        <Button
          onClick={() => {
            console.log("sdasdadsads");
          }}
          className="FancyButton AddButton"
        >
          <Add />
        </Button>
      </section>
    </div>
  );
}
