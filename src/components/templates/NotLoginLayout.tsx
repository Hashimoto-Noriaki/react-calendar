import { ReactNode } from 'react'

type PropsType = {
    children:ReactNode;
}

export const NotLoginLayout = ({children}: PropsType) => {
    return (
        <div className="ralative">
            <header className="fixed leading-[50px] bg-white top-0 right-0 left-0">
                <div className="container mx-auto flex justify-between">
                    <p className="logo">スケジュール管理APP</p>
                    <nav>
                        <ul className="flex gap-5">
                            <li className="text-lime-800">利用説明</li>
                            <li className="text-lime-800">ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
                {children}
            </main>
        </div>
    )
}
