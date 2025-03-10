import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400/0 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-indigo-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Логин</span>
            </label>
            <input
              type="text"
              placeholder="Введите логин"
              className="w-full input input-primary h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Пароль</span>
            </label>
            <input
              type="password"
              placeholder="Введите пароль"
              className="w-full input input-primary h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm label hover:underline hover:text-indigo-500 mt-3 inline-block">
            У вас нет учетной записи?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-3 text-gray-400" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : 'Войти'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

