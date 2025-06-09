import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from "../atoms/Input";

export const LoginPage = () => {
    return (
        <div className="w-[500px] bg-white py-10 rounded-lg shadow-lg">
            <form className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-3xl text-center text-lime-800 font-bold">ログイン</h1>
                <div className="w-[80%]">
                    <Input
                        name="email"
                        placeholder="メールアドレス"
                    />
                </div>
                <div className="w-[80%]">
                    <Input 
                        password="password"
                        placeholder="パスワード"
                    />
                </div>
                <PrimaryBtn>ログイン</PrimaryBtn>
            </form>
        </div>
    )
}
