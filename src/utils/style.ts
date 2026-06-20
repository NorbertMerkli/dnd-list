import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { CSSProperties } from "react";

export type PropsWithClassName = { className?: string };
export type PropsWithStyle = { style?: CSSProperties };
export type PropsWithClassNameAndStyle = PropsWithClassName & PropsWithStyle;

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}
