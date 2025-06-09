import { ReactNode } from 'react';

type PropsType = {
    onClick:() => void;
    children: ReactNode;
}

export const PrimaryBtn = ({onClick,children}: PropsType) => {
    return (
        <button className="p-5 bg-lime-800 text-white text-lg rounded-lg" onClick={onClick}>
            {children}
        </button>
    )
}
