import React from 'react';
import '../App.css';
import Footer from '../components/Footer';

const artistGallery = () => {
    return (
        <div>
            <div className="d-flex align-items-center SubHeaderImage SubHeader vstack">
                <div className="splashFont">artist alley</div>
                <div className="splashFontSub">browse our collection of beautiful frames</div>
            </div>

            <div className="wrapper">

                <div className="d-flex justify-content-center pt-5 sectionTitle-Light">trending</div>
                <div className="d-flex justify-content-center pt-5 sectionFont-Light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultricilisis. </div>

            </div>

            <div className='section-Light'>
                <div className="row">
                <div className = "col-6 px-0 d-flex">
                    <a className = "pt-5 testImage" href="/products" dangerouslySetInnerHTML={{ __html: 'foo' }} ></a>

                </div>
                <div className = "col p-5">
                    <div className='sectionTitle-Light row'>collections</div>
                    <div className='sectionFont-Light row'>filler text</div>
                </div>

                </div>
                

            </div>
            <div className="wrapper">

                <div className="d-flex justify-content-center pt-5 sectionTitle-Light">new</div>
                <div className="d-flex justify-content-center pt-5 sectionFont-Light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultricilisis. </div>

            </div>

            <div className="wrapper">

                <div className="d-flex justify-content-center pt-5 sectionTitle-Light">new</div>
                <div className="d-flex justify-content-center pt-5 sectionFont-Light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultricilisis. </div>

            </div>

            

            <div className="wrapper">

                <div className="d-flex justify-content-center pt-5 sectionTitle-Light">want unique frames?</div>
                <div className="d-flex justify-content-center pt-3 sectionFont-Light">You can contact us about more specific frames if you can't find the 
                right size for you here. </div>
                <div className="d-flex justify-content-center sectionFont-Light pt-5">
                    <a href="/order-form">
                        <button className="d-flex btn btn-outline-dark btn-lg" >Custom Orders</button>
                    </a>
                </div>
            </div>

            <Footer />

        </div>
    );
  };
  
  export default artistGallery;