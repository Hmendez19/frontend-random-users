import { ReactNode } from "react";

export interface HeaderProp{
    title:string,
    classNames:Record<string,string>
    children:ReactNode
}