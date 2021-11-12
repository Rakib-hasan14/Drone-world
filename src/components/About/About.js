import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-primary fw-bold text-center mb-4'>About us</h1>
            <div className='about-sec'>
                <div className="about-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9tPTjJ_ATicP2MDFDZhwVCTFShCd027-oQ&usqp=CAU" alt="" />
                </div>
                <div className='text-center px-5'>
                    <h2 className='mt-5'>We provide all best drones</h2>
                    <p className='text-secondary my-3'>We always try to make our customers happy! And every customers say our drons are best from other selling drones.Every customer enjoyed it so much and they use it from many years. Actually our goal is get satisfaction.We our best . </p>
                    <p className='text-secondary my-3'>If you wants to buy drones from our websites then just first see our reviews after you place order so first see then order. </p>
                </div>
            </div>
        </div>
    );
};

export default About;