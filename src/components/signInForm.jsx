import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser as faSolidCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

function SignInForm() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        vérif email/password in DB
        modif store avec firstname and name qui correspond
        envoie sur profil de l'user 
        */

        navigate('/profile');
      };

    return(
        <section className="box-border bg-white w-72 my-12 mx-auto p-8">
            <FontAwesomeIcon className='text-base' icon={faSolidCircleUser}/>
            <h1 className='text-2xl font-bold my-5'>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col text-left mb-4'>
                    <label className='font-bold' htmlFor='username'>Username</label>
                    <input className='text-xl p-1 ring-1 ring-black' type='text' id='username' name='username'/>
                </div>
                <div className='flex flex-col text-left mb-4'>
                    <label className='font-bold' htmlFor='password'>Password</label>
                    <input className='text-xl p-1 ring-1 ring-black' type='password' id='password' name='password'/> 
                </div>
                <div className='flex'>
                    <input type="checkbox" id="remember-me" />
                    <label className='ml-1' htmlFor="remember-me">Remember me</label>
                </div>
                <button className='block w-full p-2 text-lg font-bold mt-4 bg-[#00bc77] text-white' type='submit'>Sign In</button>
            </form>
        </section>
    )
}

export default SignInForm;