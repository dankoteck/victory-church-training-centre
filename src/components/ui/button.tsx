import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: ClassValue | ClassValue[];
};

export default function UIButton({ children, className = "" }: Props) {
  return <button className={cn("btn-primary", className)}>{children}</button>;
}
