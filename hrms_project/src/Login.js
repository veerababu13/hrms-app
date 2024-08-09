import Picture from './Picture.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [type,setType] = useState('password')
    const navigate = useNavigate();
    const loginUser = (data) =>{
        console.log(data);
        navigate('/dashboard')
    }
    const pass = () => {

        if(type === 'password') {
            setType('text');
        }
        else{
            setType('password');
        }

    }
    return (
        <div className='row g-0 log'>
            <div className='col-sm-6 d-flex align-items-center justify-content-md-end'>
                <img src={Picture} className='img-fluid' alt="login_image " />
            </div>
            <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                <form className='m-0 py-4' onSubmit={loginUser}>
                    <div className='bg-white p-5 rounded'>
                        <h4 className=' p-0  text-center'>ITPS</h4>
                        <p className='p-0 text-center'>techinfo</p>
                        <h3 className='text-center my-2'>Login</h3>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className='form-control border border-dark my-1' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type={type} id="password" name="password" className='form-control border border-dark my-1 d-inline' required />
                            <span onClick={pass} className='btn btn-success'>{type === 'password' ? 'show'  :' hide'}</span>
                        </div>
                    
                        <div className='text-center my-2'>
                            <button type='submit' className='btn btn-primary'>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;
