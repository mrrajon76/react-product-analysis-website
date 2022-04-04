import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../images/MacBookPro.png';
import m1pro from '../../images/m1pro.jpg';
import m1max from '../../images/m1max.jpg';
import Reviews from '../Reviews/Reviews';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='mx-28 mt-10'>
            <section className="grid grid-cols-2">
                <div className="text-container flex items-center">
                    <div className='text-left'>
                        <h1 className='text-7xl font-extrabold'>MacBook Pro</h1>
                        <h3 className='mt-3 text-5xl font-semibold text-amber-500'>Supercharged for pros..</h3>
                        <p className='mt-7 text-lg'>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed
                            for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook,
                            and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.</p>
                        <button className='bg-amber-500 text-white font-medium uppercase py-4 px-12 mt-6 rounded-md hover:bg-slate-700'><Link to="/specifications">Specifications</Link></button>
                    </div>
                </div>
                <div className="image-container flex justify-end">
                    <img src={heroImage} alt="" className='w-9/12' />
                </div>
            </section>
            <section className="mt-16">
                <h5 className='text-2xl font-medium text-amber-500'>Inside MacBook Pro</h5>
                <h3 className='text-5xl font-bold mt-2'>Pro to the <span className='text-amber-500'>Max</span></h3>
                <div className="grid grid-cols-2 gap-14 mt-10">
                    <div className="py-8 shadow-2xl shadow-slate-300 rounded-lg">
                        <img src={m1pro} alt="" className='w-64 block mx-auto' />
                        <h4 className='text-3xl font-bold text-amber-500 mt-4'>Scary fast.</h4>
                        <p className='mt-3 text-lg'>Up to 10-core CPU<br />
                            Up to 16-core GPU<br />
                            Up to 32GB of unified memory<br />
                            Up to 200GB/s memory bandwidth</p>
                    </div>
                    <div className="py-8 shadow-2xl shadow-slate-300 rounded-lg">
                        <img src={m1max} alt="" className='w-64 block mx-auto' />
                        <h4 className='text-3xl font-bold text-amber-500 mt-4'>Scary faster.</h4>
                        <p className='mt-3 text-lg'>10-core CPU<br />
                            Up to 32-core GPU<br />
                            Up to 64GB of unified memory<br />
                            Up to 400GB/s memory bandwidth</p>
                    </div>
                </div>
                <p className='mt-12 text-lg font-medium'>M1 Pro and M1 Max scale the amazing M1 architecture to new heights — and for the first time, they bring a system on a
                    chip (SoC) architecture to a pro notebook. Both have more CPU cores, more GPU cores, and more unified memory than M1.
                    Along with a powerful Neural Engine for supercharged machine learning and upgraded media engines with ProRes support,
                    M1 Pro and M1 Max allow pros to do things they never could before.</p>
            </section>
            <section className='mt-16'>
                <h5 className='text-2xl font-medium text-amber-500'>What Customer Says!</h5>
                <h3 className='text-5xl font-bold'>Reviews</h3>
                <Reviews></Reviews>
            </section>
            <section className='mt-16'>
                <h5 className='text-2xl font-medium text-amber-500'>Some Views of MacBook Pro</h5>
                <h3 className='text-5xl font-bold'>Gallery</h3>
                <Gallery></Gallery>
            </section>
        </div>
    );
};

export default Home;