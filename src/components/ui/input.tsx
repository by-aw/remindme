import * as React from "react";

import "./input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return <input className={className} type={type} ref={ref} {...props} />;
  }
);
Input.displayName = "Input";

export { Input };
