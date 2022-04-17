import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
            <div>
                <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                My Information
                </h1>
                <h3 className='mb-2  tracking-wide text-gray-500 '>
                  Name:Sheikh Mahmudul Hasan
                </h3>
                <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                    I am a student of CSE. I want to be a honest web developer. Next one year want to complete my target.
                </p>
                <Link
                    to='/'
                    className='w-full mb-2 py-2 px-3 text-white mt-3 bg-cyan-600 sm:w-auto sm:mb-0'
                >
                    Back to homepage
                </Link>
                <Link
                    to='/'
                    className='w-full mb-2 py-2 px-3 text-white mt-3 mx-2 bg-cyan-600 sm:w-auto sm:mb-0'
                >
                    Contact us
                </Link>
            </div>
            <div>
                <div className='w-full bg-gray-200 rounded-lg'>
                    <img className="w-full"
                        style={{height:'350px'}}
                        src='https://i.ibb.co/r79KMp8/IMG-20210228-171313.png'
                        alt=''
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;