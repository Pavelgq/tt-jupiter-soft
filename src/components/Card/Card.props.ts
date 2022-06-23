import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  category: string;
  imageUrl: string;
  setTag: React.Dispatch<React.SetStateAction<string>>;
}