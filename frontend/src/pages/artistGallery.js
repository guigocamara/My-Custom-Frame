import React from 'react';
import '../App.css';


const artistGallery = () => {
    return (
        <div>
        <div className='section-Light'>
            <div className="row">
                <div className = "col p-5 artist-bg">
                    <div className = "sectionTitle-Dark">Test</div>
                    <div className = "pt-1 sectionFont-Dark">browse a collection of local artists and their work</div>
                </div>
                <div className = "col">
                    <div className='row'>
                    <a className='col artist-1' href="/artistGallery"><i className='fa fa-artist' aria-hidden="true"/> </a>
                    <a className='col artist-2' href="/artistGallery"><i className='fa fa-artist' aria-hidden="true"/> </a>
                    </div>
                    <div className='row'>
                    <a className='col artist-3' href="/artistGallery"><i className='fa fa-artist' aria-hidden="true"/> </a>
                    <a className='col artist-4' href="/artistGallery"><i className='fa fa-artist' aria-hidden="true"/> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default artistGallery;