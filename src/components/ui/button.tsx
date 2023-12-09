import React, { forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";

type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
type MotionButtonProps = Merge<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  MotionProps
>;

export interface ButtonProps extends MotionButtonProps {
  // Add any additional custom props here
  customProp?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  // Destructure the custom props from the ButtonProps
  const { customProp, children, ...rest } = props;

  return (
    <motion.button whileTap={{scale: 0.9,}} whileHover={{ scale: 1.1 }} ref={ref} {...rest}>
      {children}
    </motion.button>
  );
});

export default Button;
