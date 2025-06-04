import { Link,Outlet,useNavigate } from 'react-router-dom'
import { useLoginUser } from "../hooks/useLoginUser";

export const LoginLayout = () => {
    const navigate = useNavigate();
    const { loginUser,setLoginUser } = useLoginUser();

    const handleLogout = ()=> {
        setLoginUser({ id: 0, name: "" })
        navigate('/login')
    }
    return (
    <div className="relative">
        <header className="bg-white leading-[50px] fixed top-0 right-0 left-0">
            <div className="container mx-auto flex justify-between">
                <p className="logo">
                    <Link to="/">スケジュール管理App</Link>
                </p>
                <nav>
                    <ul className="flex gap-5 text-lime-800">
                        <li className="flex items-center">{loginUser.name}</li>
                        <li className="flex items-center">
                            <button onClick={handleLogout}>ログアウト</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
            <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
                <Outlet />
            </main>
        </div>
    )
}
