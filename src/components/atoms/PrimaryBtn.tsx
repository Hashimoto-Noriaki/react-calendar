import { ReactNode } from 'react'

type PropsType = {
    onClick:() => void;
    children:ReactNode;
}

export const PrimaryBtn = ({children,onClick}: PropsType) => {
    return (
        <button className="bg-lime-800 p-5  text-lg rounded-lg text-white" onClick={onClick}>
            {children}
        </button>
    )
}