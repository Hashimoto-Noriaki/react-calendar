import { PrimaryBtn } from '../atoms/PrimaryBtn'
import { Input } from '../atoms/Input'

export const LoginPage = () => {
    return (
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
            <form className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-3xl font-bold text-lime-800">
                    ログイン
                </h1>
                <div className="w-[80%]">
                    <Input
                        type="text"
                        placeholder="メールアドレス"
                    />
                </div>
                <div className="w-[80%]">
                    <Input
                        type="password"
                        placeholder="パスワード"
                    />
                </div>
                <PrimaryBtn onClick={()=> null}>ログイン</PrimaryBtn>
            </form>
        </div>
    )
}
