import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
}