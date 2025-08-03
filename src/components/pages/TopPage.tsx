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
            <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
                <div className="text-center">
                    <h1 className="logo text-7xl">スケジュール管理APP</h1>
                    <p className="text-5xl pt-[10vh]">スケジュールを管理します。</p>
                    <div className="pt-[20vh]">
                        <button className="bg-lime-800 p-5  text-lg rounded-lg text-white">
                            ログイン
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
