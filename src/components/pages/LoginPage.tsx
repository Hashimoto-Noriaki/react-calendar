import { ChangeEvent,FormEvent,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryBtn } from '../atoms/PrimaryBtn'
import { Input } from '../atoms/Input'
import { LoginInfoType } from '../../types/login'
import { login } from '../../api/login'
import { useLoginUser } from '../../hooks/useLoginUser'

export const LoginPage = () => {
    const navigate = useNavigate()
    const { setLoginUser } = useLoginUser();
    const [loginInfo,setLoginInfo] = useState<LoginInfoType>({
        email:'',
        password:'',
    })

    const [errorMessage,setErrorMessage] = useState("")

    const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const { name,value } = event.target
        setLoginInfo({...loginInfo,[name]: value})
    }

    const handleLogin = (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        setErrorMessage("")
        try {
            const resUser = login(loginInfo)
            setLoginUser({id: resUser.id, name: resUser.name})
            navigate('/calendar')
        } catch {
            setErrorMessage("ログインに失敗しました。")
        }
    }

    return (
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
            <form className="flex flex-col items-center justify-center gap-10" onSubmit={handleLogin}>
                <h1 className="text-3xl font-bold text-lime-800">
                    ログイン
                </h1>
                {errorMessage !== "" && (
                    <div className="bg-red-500 text-white p-5 rounded-lg w-[80%]">
                        {errorMessage}
                    </div>
                )}
                <div className="w-[80%]">
                    <Input
                        name="email"
                        type="text"
                        placeholder="メールアドレス"
                        value={loginInfo.email}
                        onChange={changeLoginInfo}
                    />
                </div>
                <div className="w-[80%]">
                    <Input
                        name="password"
                        type="password"
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
