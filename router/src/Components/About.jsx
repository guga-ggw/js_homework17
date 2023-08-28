import React from 'react'
import scroll from '../imgs/scroll.png'
import erekle from '../imgs/erekle.png';

function About() {
  return (
    <div className='about'>
      <img src={scroll} alt="" />
      <img id='erekle' src={erekle} alt='' />
      <h3>
      Heraclius II, known as Erekle II, was a remarkable Georgian king who reigned from 1762 to 1798. His legacy is a tapestry of strategic prowess and cultural revival. He modernized Georgia by introducing reforms and forging an alliance with Russia to safeguard his kingdom from powerful neighbors. A patron of the arts, he nurtured a cultural renaissance while bolstering the Georgian Orthodox Church. Heraclius' indomitable spirit in the face of external threats secured his place as a symbol of Georgia's fight for sovereignty and identity.
      </h3>
    </div>
  )
}

export default About