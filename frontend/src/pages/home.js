import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div>
      <div className="d-flex align-items-center HomeHeader vstack gap-3">
        <div className="splashFont">build</div>
        <div className=" text-center splashFontSub">a unique frame for any occasion</div>
      </div>

      <div className="wrapper">

        <div className="d-flex justify-content-center pt-5 sectionTitle">what we do</div>
        <div className="d-flex justify-content-center pt-5 sectionFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse 
        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </div>

      </div>

    </div>
  );
};

export default Home;