import { ChangeEvent,useState } from 'react'
import { PrimaryBtn } from '../atoms/PrimaryBtn'
import { Input } from '../atoms/Input'
import { loginInfoType } from '../../types/loginInfoType'

export const LoginPage = () => {
    const [loginInfo,setLoginInfo] = useState<loginInfoType>{
        email:'',
        password:'',
    }

    const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const { name,value } = event.target
        setLoginInfo({...loginInfo,[name]: value})
    }

    return (
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
            <form className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-3xl font-bold text-lime-800">
                    ログイン
                </h1>
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
                        onnchange={changeLoginInfo}
                    />
                </div>
                <PrimaryBtn onClick={()=> null}>ログイン</PrimaryBtn>
            </form>
        </div>
    )
}
