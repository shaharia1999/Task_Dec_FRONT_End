import React from 'react';
import './Feature.css'
import img1 from './../../images/software1.png'
import img2 from './../../images/bulk.png'
const Feature = () => {
    return (
        <div className="feature">
        <div className='service-titel'>
        <h3>Feature</h3>
        <h1>Ouer Feature and services</h1>
     </div>
            <div className='service-grid '>
                <div className='card'>
                  <img src={img1} alt=""/>
                   <h2>Communication</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                  <button>More</button>
                </div>
                <div className='card'>
                  <img src={img2} alt=""/>
                   <h2>inspires Design</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                  <button>More</button>
                </div>
                <div className='card'>
                  <img src={img1} alt=""/>
                   <h2>Happy Clint</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                  <button>More</button>
                </div>
                </div>
        </div>
    );
};

export default Feature;