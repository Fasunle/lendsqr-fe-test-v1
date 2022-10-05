import logo from '../assets/lendsqr-logo.svg';
import hero from '../assets/pablo-sign-in.svg';

const LoginPage = () => {
  return (
    <div className='container login'>
      <section className='login__hero'>
        <div className='login__hero--logo'>
          <img aria-label='Sign in hero image' alt='Sign in hero' src={logo} />
        </div>

        <div className='login__hero--img'>
          <img aria-label='Lendsqr Logo' alt='Sign in hero' src={hero} />
        </div>
      </section>

      {/* form component */}
      <section className='login__form'>
        <div className='title'>
          <h1>Welcome!</h1>
          <p>Enter details to login</p>
        </div>
        <div className='form'>
          <div className='inputContainer'>
            <input className='input' type='text' placeholder='Email' />
          </div>

          <div className='inputContainer'>
            <input className='input' type='text' placeholder='Password' />
          </div>
          <div>
            <button className='btn btn--forgot-password'>Forgot Password?</button>
          </div>
          <div>
            <button className='btn btn--login'>Log In</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
