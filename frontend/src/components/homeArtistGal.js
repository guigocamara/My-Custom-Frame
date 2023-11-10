import React from 'react';
import '../App.css';

const homeArtistGal = () => {
  return (
    <div>
        <div className='section-Light'>
            <div className="row">
                <a className="col p-5 artist-bg" href="/artist-gallery">
                    <div>
                        <div className = "sectionTitle-Dark">artist alley</div>
                        <div className = "pt-1 sectionFont-Dark">browse a collection of local artists and their work</div>
                    </div>
                </a>
                <div className = "col">
                    <div className='row'>
                    <a className='col artist-1' href="/artist-gallery"><i className='fa fa-artist' aria-hidden="true"/> </a>
                    <a className='col artist-2' href="/artist-gallery"><i className='fa fa-artist' aria-hidden="true"/> </a>
                    </div>
                    <div className='row'>
                    <a className='col artist-3' href="/artist-gallery"><i className='fa fa-artist' aria-hidden="true"/> </a>
                    <a className='col artist-4' href="/artist-gallery"><i className='fa fa-artist' aria-hidden="true"/> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default homeArtistGal;