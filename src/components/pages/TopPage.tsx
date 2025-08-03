export const TopPage = () => {
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
        </div>
    )
}
