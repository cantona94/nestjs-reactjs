import { FC, useState } from "react"

const Auth: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div
      className="mt-40 flex flex-col justify-center items-center 
      bg-slate-900 text-white"
    >
      <h1 className="text-center text-xl mb-10">
        {isLogin ? 'Login' : 'Registration'}
      </h1>

      <form className="flex w-1/3 flex-col mx-auto gap-5">
        <input
          type="text"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-green mx-auto">
          Submit
        </button>
      </form>

      <div className="flex justify-center mt-5">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-slate-300 hover:text-white"
        >
          {isLogin
            ? (`You don't have an account?`)
            : ('Already have an account?')
          }
        </button>
      </div>
    </div>
  )
}

export default Auth;
