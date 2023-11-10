import { useState } from "react"
import { useDispatch } from 'react-redux';
import { setSetAuthStatus, setUsername } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanldeLogin = (e) =>{
    e.preventDefault();
    dispatch(setUsername(name))
    dispatch(setSetAuthStatus(true))
    navigate("/")
  }

  return (
    <section >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-gray-300 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                      Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={hanldeLogin}>
                      <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                          <input onChange={(e) => setName(e.target.value)} value={name} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-rose-600 focus:border-rose-600 block w-full p-2.5" placeholder="Username" required="" />
                      </div>
                      <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                          <input type="password"  onChange={(e) => setPassword(e.target.value)} value={password}  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-rose-600 focus:border-rose-600 block w-full p-2.5" required="" />
                      </div>

                      <button type="submit" className="w-full text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Sign in</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Login