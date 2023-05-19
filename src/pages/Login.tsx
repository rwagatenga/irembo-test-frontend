import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import api from '../utils/api';

interface UserLogin {
  email: string;
  password: string;
}
export default function Login() {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const [state, setState] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setState({ ...state, [ev.target.name]: ev.target.value });
  };
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    data: UserLogin,
  ) => {
    event.preventDefault();
    try {
      const response = await api.post('/login', data);
      const res = response.data.data;
      console.log('RES', res);
      const { token } = res.accessToken;
      authContext.login(token, res);
      if (res) navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='h-screen flex items-center'>
      <form
        className='mb-6 bg-red-400 p-6 rounded-lg w-96 mx-auto'
        style={{
          background: '#101827',
        }}
        onSubmit={(e) => handleSubmit(e, state)}
      >
        <h2 className='text-center text-white text-3xl font-bold mb-6'>
          Login
        </h2>
        <div className='mb-4'>
          <Input
            id={'1'}
            type={'email'}
            name={'email'}
            placeholder='example@mail.com'
            value={state.email}
            label={'email'}
            onChange={handleChange}
          />
        </div>
        <Input
          id={'2'}
          type={'password'}
          name='password'
          placeholder='Fes235.!@#'
          value={state.password}
          label={'Password'}
          onChange={handleChange}
        />

        <Button type='submit'>Login</Button>
      </form>
    </div>
  );
}
