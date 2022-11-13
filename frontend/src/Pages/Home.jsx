import React from 'react';
import starter_vdo from '../assets/videos/completion.mp4';
import Learn from './Learn';
import Footer from '../components/Footer'
import './Home.css';
const Home = () => {
    return (
        <>
        <div className='videoContainer'>
            <video className='videoTag' autoPlay loop muted>
                <source src={starter_vdo} type="video/mp4"/>
            </video>
        </div>
        <Learn/>
        <Footer/>
        </>
    );
}
export default Home;