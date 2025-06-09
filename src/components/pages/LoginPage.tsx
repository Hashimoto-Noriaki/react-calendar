import { ChangeEvent,FormEvent,useState } from "react";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from "../atoms/Input";

export const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
        email: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState("");

    const changeLoginInfo = (e: ChangeEvent<HTMLInputElement>)=> {
        const { name,value } = e.target
        setLoginInfo({...loginInfo,[name]: value})
    }

    const handleLogin = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setErrorMessage("");
        try {
            login(setLoginInfo);
        } catch {
            setErrorMessage("ログインに失敗しました。");
        }
    }

    return (
        <div className="w-[500px] bg-white py-10 rounded-lg shadow-lg">
            <form className="flex flex-col justify-center items-center gap-10" onSubmit={handleLogin}>
                {errorMessage !== '' && (
                    <div className="bg-red-500 text-white rounded-lg p-5 w-[80%]">
                        {errorMessage}
                    </div>
                )}
                <h1 className="text-3xl text-center text-lime-800 font-bold">ログイン</h1>
                <div className="w-[80%]">
                    <Input
                        name="email"
                        placeholder="メールアドレス"
                        value={loginInfo.email}
                        onChange={changeLoginInfo}
                    />
                </div>
                <div className="w-[80%]">
                    <Input 
                        password="password"
                        placeholder="パスワード"
                        value={loginInfo.password}
                        onChange={changeLoginInfo}
                    />
                </div>
                <PrimaryBtn onClick={()=> null}>ログイン</PrimaryBtn>
            </form>
        </div>
    )
}
