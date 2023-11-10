import React from 'react';
import '../App.css';

// Components
import ArtGallery from '../components/homeArtistGal';

const Home = () => {
  return (
    <div>
      <div className="d-flex align-items-center HomeHeader SplashHeader vstack gap-3">
        <div className="splashFont">build</div>
        <div className=" text-center splashFontSub">a unique frame for any occasion</div>
      </div>

      <div className="wrapper">

        <div className="d-flex justify-content-center pt-5 sectionTitle-Light">what we do</div>
        <div className="d-flex justify-content-center pt-5 sectionFont-Light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse 
        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </div>

      </div>

      <div className='section-Dark'>
        <div className="row">
          <div className = "col-6 px-0 d-flex">
            <a className = "pt-5 testImage" href="/products" dangerouslySetInnerHTML={{ __html: 'foo' }} ></a>

          </div>
          <div className = "col p-5">
            <div className='sectionTitle-Dark row'>browse our frames</div>
            <div className='sectionFont-Dark row'>create a beautiful custom frame with our endless options</div>
          </div>

        </div>
        

      </div>
      <ArtGallery/>


    </div>
  );
};

export default Home;