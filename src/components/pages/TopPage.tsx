import { PrimaryBtn } from '../atoms/PrimaryBtn';

export const TopPage = () => {
    return (
        <div className="text-center">
            <h1 className="text-7xl logo">スケジュール管理</h1>
            <p className="text-5xl pt-[10vh]">このアプリはスケジュール管理します。</p>
            <div className="pt-[20vh]">
                <PrimaryBtn>ログイン</PrimaryBtn>
            </div>
        </div>
    )
}
