import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Section from '../wrappers/MainLayout';

const HomeLayout = () => {

 const location =  useNavigation()

 const isStateLoading = location.state === 'loading'
 console.log(isStateLoading)
 
  return (
    <>
        <Navbar />
        <Section>
          {isStateLoading ? (<h2>Loading...</h2>) : (<Outlet />)}
        </Section>
        <footer className='px-2  bg-slate-700 py-12'>
            <div className="container mx-auto text-center text-white">
            <h4> © bu Kafi ahmed 2023 </h4>
            </div>
        </footer>
    </>
  )
}

export default HomeLayout