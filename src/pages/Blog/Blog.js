import React from 'react';

const Blog = () => {
    return (
        <div className='container m-auto'>
            <div className='text-center mb-10 '>
                <h3 className='text-4xl font-bold'>Blog</h3>
                <p className='pt-5 text-1xl uppercase'> I am so pleased you have found my blog page</p>
            </div>
            <div className=" border border-base-300 rounded mb-6">
                <div className=" px-4 py-4 border-t border-base-300">1. Qusestion : Difference between SQL and NoSQL?</div>
                <div className=" px-4 py-8 border-t border-base-300">1. Answer : SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</div>
            </div>
            <div className=" border border-base-300 mb-6">
                <div className=" px-4 py-4 border-t border-base-300">2. Qusestion : What is JWT, and how does it work?</div>
                <div className=" px-4 py-10 border-t border-base-300">1. Answer : What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</div>
            </div>
            <div className=" border border-base-300 mb-6">
                <div className=" px-4 py-4 border-t border-base-300">3. Qusestion : What is the difference between javascript and NodeJS?</div>
                <div className=" px-4 py-10 border-t border-base-300">1. Answer : JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</div>
            </div>
            <div className=" border border-base-300 mb-6">
                <div className=" px-4 py-4 border-t border-base-300">4. Qusestion : How does NodeJS handle multiple requests at the same time?</div>
                <div className=" px-4 py-10 border-t border-base-300">1. Answer : How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</div>
            </div>
        </div>
    );
};

export default Blog;