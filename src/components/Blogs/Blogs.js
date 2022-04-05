import React from 'react';
import q1 from '../../images/q1.jpg';
import q2 from '../../images/q2.jpg';
import q3 from '../../images/q3.jpg';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='mx-28 mt-16 mb-12'>
            <section className="question-container shadow-lg shadow-slate-300">
                <div className="image">
                    <img src={q1} alt="" />
                </div>
                <div className="text-left px-12 flex items-center">
                    <div>
                        <h3 className="text-3xl font-semibold text-amber-500">What is ContextAPI?</h3>
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita omnis accusantium reprehenderit maiores dolorem veritatis culpa, inventore vero odio ex qui ullam voluptatibus excepturi id dolor consequatur. Nisi harum laboriosam sit magnam vitae nulla veritatis maiores voluptates et cum. Commodi aliquam debitis porro minus odit dolores facilis blanditiis quasi quidem placeat nam, modi vel veritatis accusamus harum veniam consequuntur enim. Hic corporis, libero iste et culpa veniam ipsum maxime minima, nostrum consequatur sapiente tempora commodi dignissimos ullam quibusdam temporibus ex accusantium voluptates. Aliquam repudiandae officiis sequi ipsum non, architecto debitis tempore delectus sit vero perspiciatis quisquam quod fuga consectetur?</p>
                    </div>
                </div>
            </section>
            <section className="question-container shadow-lg shadow-slate-300 mt-12">
                <div className="image">
                    <img src={q2} alt="" />
                </div>
                <div className="text-left px-12 flex items-center">
                    <div>
                        <h3 className="text-3xl font-semibold text-amber-500">What is Semantic tags?</h3>
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita omnis accusantium reprehenderit maiores dolorem veritatis culpa, inventore vero odio ex qui ullam voluptatibus excepturi id dolor consequatur. Nisi harum laboriosam sit magnam vitae nulla veritatis maiores voluptates et cum. Commodi aliquam debitis porro minus odit dolores facilis blanditiis quasi quidem placeat nam, modi vel veritatis accusamus harum veniam consequuntur enim. Hic corporis, libero iste et culpa veniam ipsum maxime minima, nostrum consequatur sapiente tempora commodi dignissimos ullam quibusdam temporibus ex accusantium voluptates. Aliquam repudiandae officiis sequi ipsum non, architecto debitis tempore delectus sit vero perspiciatis quisquam quod fuga consectetur?</p>
                    </div>
                </div>
            </section>
            <section className="question-container shadow-lg shadow-slate-300 mt-12">
                <div className="image">
                    <img src={q3} alt="" />
                </div>
                <div className="text-left px-12 flex items-center">
                    <div>
                        <h3 className="text-3xl font-semibold text-amber-500">What are the difference between Inline, Block & Inline-Block?</h3>
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita omnis accusantium reprehenderit maiores dolorem veritatis culpa, inventore vero odio ex qui ullam voluptatibus excepturi id dolor consequatur. Nisi harum laboriosam sit magnam vitae nulla veritatis maiores voluptates et cum. Commodi aliquam debitis porro minus odit dolores facilis blanditiis quasi quidem placeat nam, modi vel veritatis accusamus harum veniam consequuntur enim. Hic corporis, libero iste et culpa veniam ipsum maxime minima, nostrum consequatur sapiente tempora commodi dignissimos ullam quibusdam temporibus ex accusantium voluptates. Aliquam repudiandae officiis sequi ipsum non, architecto debitis tempore delectus sit vero perspiciatis quisquam quod fuga consectetur?</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;