import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {
  const user = useContext(AuthContext).user;
  console.log(user);
  return (
    <div className='container mx-auto'>
      <h4 className='text-4xl text-center mt-4'>Welcome</h4>
      <div className='p-4 border border-gray-400 mt-8 flex gap-4 rounded-2xl'>
        <img
          src='https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='w-60 object-center object-cover h-60 rounded-xl'
        />

        <div className='flex-1'>
          <section className='border-b border-gray-700 pb-2'>
            <label className='text-sm text-gray-400 m-0'>Names</label>
            <h2 className='text-xl'>MAHORO Kalisa</h2>
          </section>

          <section className='border-b border-gray-700 pb-2'>
            <label className='text-sm text-gray-400 m-0'>Email</label>
            <h2 className='text-xl'>mahoro@gmail.com</h2>
          </section>

          <section className='border-b border-gray-700 pb-2'>
            <label className='text-sm text-gray-400 m-0'>Gender</label>
            <h2 className='text-xl'>Female</h2>
          </section>

          <section className=' border-gray-700 pb-2'>
            <label className='text-sm text-gray-400 m-0'>Phone</label>
            <h2 className='text-xl'>07834234923842</h2>
          </section>
        </div>
      </div>
    </div>
  );
}
