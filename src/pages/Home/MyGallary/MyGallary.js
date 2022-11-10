import React from 'react';
import { FaInstagram } from 'react-icons/fa';


const MyGallary = () => {
    return (
        <div className='mb-2'>
            <div className='text-center mb-10 '>
                <h3 className='text-4xl font-bold uppercase'>injoy my gallery</h3>

            </div>
            <div className="grid grid-cols-4 gap-4">
                <img src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img src="https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/2747248/pexels-photo-2747248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/1904354/pexels-photo-1904354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <img src="https://images.pexels.com/photos/4696243/pexels-photo-4696243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/950327/pexels-photo-950327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/2610309/pexels-photo-2610309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/605223/pexels-photo-605223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/2447124/pexels-photo-2447124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/3329230/pexels-photo-3329230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/1680214/pexels-photo-1680214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <img src="https://images.pexels.com/photos/7018206/pexels-photo-7018206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/459449/pexels-photo-459449.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img src="https://images.pexels.com/photos/2710186/pexels-photo-2710186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img src="https://images.pexels.com/photos/5968120/pexels-photo-5968120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <footer className="footer items-center p-4 bg-slate-100	mt-5 text-slate-600">
                <div className="items-center ml-80 grid-flow-col">
                    <p className='text-1xl uppercase'>You can follow me on instagram to know my update</p>
                </div>
                <div className="grid-flow-col mr-80  md:place-self-center md:justify-self-center">
                    <FaInstagram className=''></FaInstagram>
                </div>
            </footer>
        </div>
    );
};

export default MyGallary;