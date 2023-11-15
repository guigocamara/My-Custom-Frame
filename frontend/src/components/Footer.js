import React from 'react';
import '../App.css';


// Social Icons
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// Conctact Us Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div>
            <div className='pb-5 px-5'>
                <div className="row">
                    <div className="col-2 px-4 pt-5">
                        <div className = "d-flex justify-content-center py-3">
                            <div className = "footerLogo footerLogoWrapper"></div>
                        </div>
                        <div className="px-5 row socialIcons">
                            <TwitterIcon className='col' fontSize='large'/>
                            <FacebookIcon className='col' fontSize='large'/>
                            <InstagramIcon className='col' fontSize='large'/>
                        </div>
                    </div>
                  
                    <div className="col col-xl pt-5">
                        <div className='row'>
                            <div className="col border">
                                <div className="footerSubTitle pb-2">shop</div>
                                <div className="">frames</div>
                                <div className="">artist alley</div>
                            </div>
                            <div className="col border">
                                <div className="footerSubTitle pb-2">about</div>
                                <div className="">shop</div>
                                <div className="">shop</div>
                            </div>
                            <div className="col border">
                                <div className="footerSubTitle pb-2">help</div>
                                <div className="">custom requests</div>
                                <div className="">shop</div>
                            </div>
                            <div className="col-2" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className = "row py-4">
                            <div className = "d-flex footerTitle text-black pb-2">about us</div>
                            <div class="pt-1 bg-danger bg-gradient w-100" />
                            <div className = "pt-3 d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nunc sodales, risus mollis blandit consequat, libero sem 
                            molestie dolor, non convallis diam felis ut velit. Integer interdum lorem ex, quis congue dolor tincidunt id.</div>
                        </div>
                        <div className = "d-flex row py-3">
                            <div className="d-flex footerTitle text-black pb-2">contact us</div>
                            <div class="pt-1 bg-danger bg-gradient w-100" />
                            <div className="py-1 pt-3"><PhoneIcon className='socialIcons' />       123-456-7890</div>
                            <div className="py-1"><EmailIcon className='socialIcons' />       info@customframe.com</div>
                            <div className="py-1"><LocationOnIcon className='socialIcons' />      123 West Orlando Dr, Oviedo, FL, 12345</div>
                        </div>
                    </div>
                </div>
          </div>
          <div className="d-flex justify-content-center bg-dark py-1 text-white"> ©2023 MyCustomFrame. All Rights Reserved E-Commerce Web Design by SDT8</div>
      </div>
    );
};

export default Footer;