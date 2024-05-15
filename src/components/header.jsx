import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import argentBanklogo from '../assets/argentBankLogo.png'
import { getUser } from '../selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser as faSolidCircleUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser as faRegularCircleUser} from '@fortawesome/free-regular-svg-icons';
import { setUser } from '../store';

function Header() {
    const user = useSelector(getUser);
    const dispatch = useDispatch;

    function signOut() {
        dispatch(setUser({
            firstname: '',
            lastname: ''
        }))
    }

    return (
        <nav className="flex justify-between items-center py-1 px-5">
            <Link className="font-bold" to="">
                <img
                className="w-48 max-w-full"
                src={argentBanklogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user.firstname === "" ? (
                    <Link className="no-underline mr-2 hover:underline font-bold" to="sign-in">
                        <FontAwesomeIcon icon={faSolidCircleUser}/>
                        Sign In
                    </Link>
                ) : (
                    <>
                    <Link className="no-underline mr-2 hover:underline font-bold" to="profile">
                        <FontAwesomeIcon icon={faRegularCircleUser}/>
                        {user.firstname}
                    </Link>
                    <Link className="no-underline mr-2 hover:underline font-bold" to="" onClick={signOut}>
                        <FontAwesomeIcon icon={faSignOut}/>
                        Sign Out
                    </Link>
                    </>
                )}

            </div>
        </nav>
        )
}

export default Header;