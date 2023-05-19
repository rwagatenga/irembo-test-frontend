import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../components/Input';
import Button from '../components/Button';

import { AuthContext } from '../context/AuthContext';

import { User } from '../interfaces/User';
import { AccountEnums } from '../enums/accountEnums';
import { GenderEnums } from '../enums/genderEnums';
import { MaritalStatusEnums } from '../enums/maritalStatusEnums';

import countries from '../utils/countries.json';
import { calculateAge, formatDate } from '../utils/objectUtils';
import api from '../utils/api';

export default function Register() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [state, setState] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    age: 0,
    dateOfBirth: '',
    maritalStatus: '',
    nationality: '',
    account: '',
    verified: false,
    password: '',
    confirmPassword: '',
  });
  const nationalities = countries.map((nationality) => nationality.nationality);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    let dob;
    if (event.target.name === 'dateOfBirth') {
      dob = formatDate(event.target.value);
    }
    setState({
      ...state,
      [event.target.name]: event.target.value,
      dateOfBirth: dob ?? '',
    });
  };
  const age = calculateAge(new Date(state.dateOfBirth));

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    data: User,
  ) => {
    event.preventDefault();
    try {
      const user = { ...data, account: AccountEnums.UNVERIFIED };
      console.log(user);
      const response = await api.post('/user', user);
      const res = response.data.data;
      const { token } = res.authToken;
      authContext.register(token, res);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='h-screen flex items-center'>
      <form
        className='flex flex-col sm:flex-col mb-6 bg-red-400 p-6 rounded-lg w-7/12 mx-auto'
        style={{
          background: '#101827',
        }}
        onSubmit={(e) => handleSubmit(e, state)}
      >
        <h2 className='text-center text-white text-3xl font-bold mb-6'>
          Register
        </h2>
        <div className='flex mb-4'>
          <div className='w-1/2 mr-2'>
            <Input
              id={'1'}
              type={'text'}
              name={'firstName'}
              placeholder={'Family Name'}
              value={state.firstName}
              label={'First Name'}
              onChange={handleChange}
            />
          </div>
          <div className='w-1/2 ml-2'>
            <Input
              id={'2'}
              type={'text'}
              name={'lastName'}
              placeholder={'SurName'}
              value={state.lastName}
              label={'Last Name'}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='w-1/2 mr-2'>
            <Input
              id={'3'}
              type={'text'}
              name={'email'}
              placeholder={'example@mail.com'}
              value={state.email}
              label={'E-Mail'}
              onChange={handleChange}
            />
          </div>
          <div className='w-1/2 ml-2'>
            <Input
              id={'4'}
              type={'select'}
              name={'gender'}
              value={state.gender}
              placeholder='Select Gender'
              options={Object.values(GenderEnums).sort()}
              label={'Gender'}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='w-1/2 mr-2'>
            <Input
              id={'5'}
              type={'date'}
              name={'dateOfBirth'}
              placeholder='20/02/2023'
              value={state.dateOfBirth}
              label={'Date of Birth'}
              onChange={handleChange}
            />
          </div>
          <div className='w-1/2 ml-2'>
            <Input
              id={'6'}
              type={'text'}
              name={'age'}
              placeholder={'Age'}
              value={!isNaN(age) ? age : 0}
              label={'Age'}
              disabled={true}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='w-1/2 mr-2'>
            <Input
              id={'7'}
              type={'select'}
              name={'maritalStatus'}
              value={state.maritalStatus}
              options={Object.values(MaritalStatusEnums).sort()}
              label={'Marital Status'}
              onChange={handleChange}
            />
          </div>
          <div className='w-1/2 ml-2'>
            <Input
              id={'8'}
              type={'select'}
              name={'nationality'}
              value={state.nationality}
              options={nationalities.sort()}
              label={'Nationality'}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='w-1/2 ml-2'>
            <Input
              id={'9'}
              type={'password'}
              name={'password'}
              placeholder={'F80rsa.!@#'}
              value={state.password}
              label={'Password'}
              onChange={handleChange}
            />
          </div>
          <div className='w-1/2 ml-2'>
            <Input
              id={'10'}
              type={'password'}
              name={'confirmPassword'}
              placeholder={'Confirm Password'}
              value={state.confirmPassword}
              label={'Confirm Password'}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button type='submit'>Register</Button>
        {/* Rest of your code */}
      </form>
    </div>
  );
}
