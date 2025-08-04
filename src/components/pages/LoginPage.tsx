import { PrimaryBtn } from '../atoms/PrimaryBtn'

export const LoginPage = () => {
    return (
        <div className="w-[500px] bg-white py-16 rounded-lg shadow-lg">
            <form className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-3xl text-lime-800 font-bold text-center">ログイン</h1>
                <div className="w-[80%]">
                    <input
                        type="email"
                        className="w-full border-4 border-solid border-lime-800 p-2"
                        placeholder="メールアドレス"
                    />
                </div>
                <div className="w-[80%]">
                    <input
                        type="password"
                        className="w-full border-4 border-solid border-lime-800 p-2"
                        placeholder="パスワード"
                    />
                </div>
                <PrimaryBtn>ログイン</PrimaryBtn>
            </form>
        </div>
    )
}
