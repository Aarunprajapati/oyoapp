import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(`/api/user/register`, {
        name,
        email,
        password,
      });

      if (res?.data) {
        Cookies.set('user', res.data.token,{expires: 7});
        alert(res.data.msg);
        router.back();
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('Error during sign-up');
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/user/login', {
        email,
        password,
      });

      if (res?.data) {
        Cookies.set('user', res.data.token,{expires: 7});
        alert(res.data.msg);
        router.back();
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login');
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  return (
    <div className="flex items-center justify-center h-screen relative bg-login-background bg-cover bg-no-repeat opacity-95 bg-slate-900">
      <div className="absolute top-10 left-0 px-20 flex items-center gap-6">
        <h2 className="text-5xl text-white font-bold">OYO</h2>
        <p className="font-bold text-white text-lg">
          Hotels and homes across 800 cities, 24+ countries
        </p>
      </div>
      <div className="flex items-center justify-start w-9/12">
        <div className="mx-10">
          <p className="text-5xl font-bold text-justify text-slate-100">
            There’s a smarter way to OYO around
          </p>
          <p className="text-white">
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </p>
        </div>
        <div className="ml-5 p-0 m-0">
          <p className="font-bold text-white w-full px-12 bg-red-600">
            Sign up & Get ₹500 OYO Money
          </p>
          <div className="bg-slate-50 py-5 px-5">
            <div className="text-4xl text-black">Login / Signup</div>
            <p className="font-bold text-black">
              Please enter your phone number to continue
            </p>
            <div className="m-5">
              <div className="flex flex-col gap-5 justify-start">
                {!login && (
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="w-96 h-10 px-5 py-3 border rounded-md border-1 border-black outline-none"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                )}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-96 h-10 px-5 py-3 border rounded-md border-1 border-black outline-none"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-96 h-10 px-5 py-3 rounded-md border-1 border border-black outline-none"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  className="px-5 py-2 w-96 h-14 text-white font-bold bg-red-600 hover:bg-red-800 rounded-sm cursor-pointer"
                  onClick={login ? handleLogin : handleSignUp}
                >
                  {login ? 'LogIn' : 'SignUp'}
                </button>
                <p className="my-3 text-lg flex gap-3 items-center">
                  <span className="text-slate-500 text-sm">
                    {login ? "Don't Have An Account?" : " Already have an account?"}
                  </span>
                  <span
                    className="px-3 py-1 bg-red-500 font-bold text-sm hover:bg-red-800 text-white rounded cursor-pointer"
                    onClick={handleToggle}
                  >
                    {login ? 'SignUp' : 'LogIn'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
