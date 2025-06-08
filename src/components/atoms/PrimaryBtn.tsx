import { ReactNode } from 'react';

type PropsType = {
    children: ReactNode;
}

export const PrimaryBtn = ({children}: PropsType) => {
    return (
        <button className="p-5 bg-lime-800 text-white rounded-lg">
            {children}
        </button>
    )
}
