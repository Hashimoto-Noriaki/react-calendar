import { useLoginUser } from '../../hooks/useLoginUser';
import { LoginUserContext } from '../../providers/LoginUserProvider';

export const CalendarPage = () => {
    const { loginUser } = useLoginUser(LoginUserContext);
    return (
        <div>
            <p>{loginUser.id}</p>
            <p>{loginUser.name}</p>
        </div>
    )
}
