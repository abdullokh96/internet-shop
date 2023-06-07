import React from 'react'
import Navbarr from '../component/Navbar';
import Cardd from '../component/Card';
import Category from '../component/Category';

function Home() {
    return (
        <div>
            <Navbarr/>  
            <div className='w-1100px d-flex justify-content-evenly'>
                <Category/>
                <Cardd/>
            </div>
        </div>
    )
}

export default Home