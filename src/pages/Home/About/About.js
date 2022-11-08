import React from 'react';
import About3 from '../../../assets/about/about5.jpg'

const About = () => {
    return (
        <div className="hero mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={About3} className="mr-8 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">ABOUT ME</h1>
                    <p className="py-6">YOU KNOW YOU WANT GREAT IMAGES...</p>
                    <p className="py-6 leading-7	">Hi, I am Nat from Mr Ashik Photography. I am so pleased you have found my online home!
                        I am a multi-award-winning Wedding and Family lifestyle photographer.
                        I believe your love story is worth capturing not only for you but your future generations to come and it's my job to create images that mean the world to you.
                        I capture your life story from first loves to last loves. Creating Art. I never miss the important moments that will be treasured for generations to come.
                        My sessions are relaxed and fun. Sunsets and sunrises are two of my all-time favorite things! From spectacular cotton-candy skies with white puffy clouds to brilliantly red and orange glowing sunsets to dark and moody skies, all uniquely different but as beautiful as the next.
                        As a natural light lifestyle photographer, I will guide you with posing and capturing the moments in between.
                        I look forward to meeting you and capturing your special moments!</p>
                    <button className="btn btn-black">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default About;