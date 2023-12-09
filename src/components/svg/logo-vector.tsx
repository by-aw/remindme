import { SVGAttributes } from "react";

export default function LogoVector({
  ...props
}: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      width="256"
      height="256"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200 122.601C200 123.374 199.374 124 198.601 124H142C136.477 124 132 119.523 132 114V56L133.399 56C170.182 56 200 85.8185 200 122.601ZM124 199.327C124 199.699 123.699 200 123.327 200C86.1432 200 56 169.857 56 132.673V124C56 86.4446 86.4446 56 124 56V199.327Z"
      />
    </svg>
  );
}
