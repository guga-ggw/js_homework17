import React from 'react';
import erekle from '../imgs/erekle.png';

function Main() {

   return (
    <div className='main_container'>
      <img src={erekle} alt='' />
      <div className='info_erekle'>
        <h1>Heraclius II</h1>
        <h3>Heraclius II (1720-1798) was a Georgian monarch of the Bagrationi Dynasty</h3>
      </div>
    </div>
  );
}



export default Main;