import { ReactNode } from "react";

type Prop = {
    children: string;
}

export const Title = ( { children }:Prop )=> {

    return(
        <h1 className="from-sky-700 text-4xl font-bold mb-7">{children}</h1>
    )

}