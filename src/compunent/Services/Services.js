import React from 'react';
import './Services.css'
import { GiHamburgerMenu} from 'react-icons/gi';
import air from './../../images/Vector.png'
import img1 from './../../images/software1.png'
import img2 from './../../images/image 4.png'
import img3 from './../../images/image3.png'
import img4 from './../../images/bulk.png'
import img5 from './../../images/image 5.png'
import img6 from './../../images/image 6.png'

const Services = () => {
    return (
        <div className='services'>
           <div className='air-animations'>
                    <div className="timer">
                        <div className='line'>
                            <GiHamburgerMenu color="#8FE5FF" size="3rem" />
                        </div>
                        <div>
                        <img src={air} alt="animation"  />
                        </div>
                    </div>
                </div>
             <div className='service-titel'>
                <h3>Services</h3>
                <h1>We are Provides Services to Our Clints</h1>
             </div>
             <div className='service-grid'>
                <div className='card'>
                  <img src={img1} alt=""/>
                   <h2>Software Solution</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                  <button>More</button>
                </div>
                <div className='card'>
                  <img src={img3} alt=""/>
                   <h2>E-commarce Solution</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                  <button>More</button>
                </div>
                <div className='card'>
                  <img src={img2} alt=""/>
                   <h2>ERP Solution</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                  <button>More</button>
                </div>
                <div className='card'>
                  <img src={img4} alt=""/>
                   <h2>Bulk SMS Service</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                  <button>More</button>
                </div>
                <div className='card'>
                  <img src={img5} alt=""/>
                   <h2>Graphic Design</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                  <button>More</button>
                </div>
                <div className='card'>
                  <img src={img6} alt=""/>
                   <h2>Digital Marketing</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                  <button>More</button>
                </div>

             </div>
            
        </div>
    );
};

export default Services;