import {ReactNode} from "react";

interface Props {
    title: string
}
export interface IComponents {
    Card: ({title}:Props) => ReactNode;
}
