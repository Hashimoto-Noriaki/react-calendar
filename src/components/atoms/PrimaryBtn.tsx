import { ReactNode } from 'react'

type PropsType = {
    children:ReactNode;
}

export const PrimaryBtn = ({children}: ReactNode) => {
    return (
        <button className="bg-lime-800 p-5  text-lg rounded-lg text-white">
            {children}
        </button>
    )
}