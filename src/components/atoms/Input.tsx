import { componentProps } from 'react'

export const Input = (props: componentProps<"input">) => {
    return (
        <input
            {...props}
            className="w-full p-2 rounded-md border-4 border-lime-800"
        />
    )
}
