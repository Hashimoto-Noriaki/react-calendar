import { ChangeEvent,FormEvent,useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/login";
import { LoginInfoType } from "../../types/login";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from "../atoms/Input";
import { useLoginUser } from "../../hooks/useLoginUser";

export const LoginPage = () => {
    const navigate = useNavigate();
    const { setLoginUser }  = useLoginUser();
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
            const resUser = login(loginInfo);
            setLoginUser({id: resUser.id, name: resUser.name})
            navigate('/calendar');
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
                        name="password"
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
