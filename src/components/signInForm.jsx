import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser as faSolidCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { login } from '../services';
import { useDispatch } from 'react-redux';
import { setUser } from '../store';

function SignInForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Update state when user write in form inputs
    function handleInputChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
          });
    }

    function signIn(e){
      e.preventDefault();

    // connect and set redux state
      login(formData)
      .then((response) => {
        dispatch(setUser({
            firstname: response.firstName,
            lastname: response.lastName
        }));
        navigate('/profile');
      })
      .catch((error) => {
        console.log('Connexion error');
      })
    };

    return(
        <section className="box-border bg-white w-72 my-12 mx-auto p-8">
            <FontAwesomeIcon className='text-base' icon={faSolidCircleUser}/>
            <h1 className='text-2xl font-bold my-5'>Sign In</h1>
            <form onSubmit={signIn}>
                <div className='flex flex-col text-left mb-4'>
                    <label className='font-bold' htmlFor='username'>Username</label>
                    <input className='text-xl p-1 ring-1 ring-black' type='text' id='username' name='username' onChange={handleInputChange}/>
                </div>
                <div className='flex flex-col text-left mb-4'>
                    <label className='font-bold' htmlFor='password'>Password</label>
                    <input className='text-xl p-1 ring-1 ring-black' type='password' id='password' name='password' onChange={handleInputChange}/> 
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