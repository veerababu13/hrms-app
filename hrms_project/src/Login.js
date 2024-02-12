import Picture from './Picture.png';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

function Login(){
    document.body.style.backgroundColor = 'aquamarine';

    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const loginUser = (data) =>{
        console.log(data);
        navigate('/dashboard')
    }
    return(
        <div className="container-fluid loginpage">
            <div className='row g-0'>
                <div className='col-sm-6 d-flex align-items-center justify-content-lg-end justify-content-center mt-lg-5 '>
                    <div className='mt-lg-5'>
                        <img src={Picture} className='img-fluid mt-lg-5 loginimage' alt=' for login page' />
                    </div>
                </div>
                <div className="col-sm-6 d-flex align-items-center justify-content-lg-start justify-content-center mt-lg-5 ">
                    <div className='mt-lg-5'>
                    <div className='text-center bg-white p-5 mt-lg-5 authentication'>
                        <h1>ITPS</h1>
                        <p>t e c h i n f o</p>
                        <h4 className='mt-4'>Login</h4>
                        <form onSubmit={handleSubmit(loginUser)}>
                        <div>
                                <label for="email" className='text-start mx-3 h6'>email</label>
                                <input type="email" className='form-control border border-dark mx-3'  id="email" {...register('email',{required:true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"})} />
                                {errors.email?.type === 'required' && <p className = 'text-danger'>email is required</p>}
                                {errors.email?.type === 'pattern' && <p className = 'text-danger'>email format is not correct</p>}
                            </div>
                            <div>
                                <label for="password" className='text-start mx-3 h6'>Password</label>
                                <input type="password"  id="password" className='form-control border border-black mx-3 ' {...register('password',{required:true ,pattern:"/^[a-zA-Z0-9!@#$%^&*_=+-]{8,12}$/g"})}/>
                                {errors.password?.type === 'required' && <p className='text-danger'>password is required</p>}
                                {errors.password?.type === 'pattern' && <p className='text-danger'>password format is incorrect </p>}
                            </div>
                            <button type="submit" className='btn btn-success mx-5 mt-3'>Login</button>
                        </form>
                    </div>
                    </div>

                </div>
            </div>
       </div>
    )
}
export default Login;