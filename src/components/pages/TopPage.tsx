import { useNavigate } from 'react-router-dom';
import { PrimaryBtn } from '../atoms/PrimaryBtn';

export const TopPage = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center">
            <h1 className="text-7xl logo">スケジュール管理</h1>
            <p className="text-5xl pt-[10vh]">このアプリはスケジュール管理します。</p>
            <div className="pt-[20vh]">
                <PrimaryBtn onClick={()=> navigate('/login')}>ログイン</PrimaryBtn>
            </div>
        </div>
    )
}
