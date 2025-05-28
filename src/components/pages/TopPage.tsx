import React from 'react'

export const TopPage = () => {
    return (
        <div>
            <header>
                <div className="flex justify-between">
                    <p>スケジュール管理App</p>
                    <nav>
                        <ul className="flex gap-5">
                            <li>利用説明</li>
                            <li>ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
