import Image from "next/image";
import googleImg from "../assets/icons8-google-48.png";
import appleImg from "../assets/icons8-apple-48.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex h-screen bg-color '>
      <div className='container'>
        <div className='left-container'>
          <h1 className='left-logo'>Board.</h1>
        </div>

        <div className='right-container text-black'>
          <div className='main-heading'>
            <h1 className=' text-4xl font-bold'>Sign Up</h1>
            <p className='sub-heading'>Sign in to your account</p>
            <br />
            <div className='login-google-apple flex'>
              <div className='login-with-google'>
                <Image
                  className='google-img'
                  src={googleImg}
                  width={25}
                  height={1}
                  alt='Picture of google logo'
                />
                <button>
                  <p>Sign in with Google</p>
                </button>
              </div>
              <div className='login-with-apple'>
                <Image
                  className='apple-img'
                  src={appleImg}
                  width={25}
                  height={1}
                  alt='Picture of apple logo'
                />
                <button type='button'>
                  <p>Sign in with Apple</p>
                </button>{" "}
                <br />
              </div>
            </div>
            <br />
            <form className='login-form'>
              <label>Email address</label>
              <br />
              <input
                type='emailt'
                name='email'
                id='email'
                placeholder='Email'
              ></input>
              <br />
              <br />
              <label>Password</label>
              <br />
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
              ></input>
              <br />
              <Link className='text-sky-600 link-style' href='#'>
                Forgot password?
              </Link>
              <br />
              <br />
              <button type='button' className='signin-btn'>
                Sign in
              </button>
              <br />
              <br />
              <button type='button' className='signin-btn'>
                <Link href='/dashboard'>Dashboard</Link>
              </button>
              <br />
              <br />
              <p className='text-sm'>
                Don’t have an account?{" "}
                <Link className='text-sky-600 link-style' href='#'>
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
