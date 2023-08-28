import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import back from '../imgs/fact.png';
import { Link } from 'react-router-dom';

function Paramex() {

 const heraclius_ii_data = {
    "id": 1,
    "name": "Heraclius II",
    "reign_years": "1762–1798",
    "facts": [
        {"id": 1, "fact": "Heraclius II was a polyglot and could converse in several languages, including Georgian, Persian, Turkish, and Russian."},
        {"id": 2, "fact": "He introduced the first paper currency in Georgia to stabilize the economy and reduce the reliance on foreign coins."},
        {"id": 3, "fact": "Heraclius II was a skilled poet and wrote numerous poems and verses, contributing to Georgian literature."},
        {"id": 4, "fact": "In his efforts to modernize the Georgian military, he invited European military advisors to train his troops."},
        {"id": 5, "fact": "He established diplomatic ties with the Kingdom of Sweden and sought their assistance in training his navy."},
        {"id": 6, "fact": "Heraclius II was known for his interest in science and astronomy, and he supported the establishment of an observatory."},
        {"id": 7, "fact": "He initiated the cultivation of new crops and plants in Georgia, contributing to agricultural diversification."},
        {"id": 8, "fact": "Heraclius II's reign saw the construction of modern infrastructure, including roads and bridges, to connect different regions of Georgia."},
        {"id": 9, "fact": "He was an advocate for religious tolerance and promoted coexistence between various religious communities in his kingdom."},
        {"id": 10, "fact": "Heraclius II's efforts to strengthen Georgia's independence and his alliances with European powers inspired other Eastern European nations in their struggles against empires."},
    ]
}


  const param = useParams()
  const [currentdata, setcurrentdata] = useState()
  const [valid, setisvalid] = useState(false)

  console.log(currentdata)


  const isvalid = () => {
    const factId = parseInt(param.fact); 
    const fact = heraclius_ii_data.facts.find((fact) => fact.id === factId);

    if (fact) {
      setcurrentdata(fact);
      setisvalid(true);
    }
    else{
      setisvalid(false)
    }
  };

  useEffect(()=>{
    isvalid()
    
  }, [])

  console.log(valid)
  return (
    <>
     <div className="nav">
        <div className='logo'><h1>History</h1>
            <div className="circle">
                <h1>.Ge</h1>
            </div>
          </div>
            <div className="links">
              <Link className='link' to={'/'}>Main</Link>
              <Link className="link" to={'/about'}>About</Link>
        </div>
    </div>
    <div className='facts'>
    {valid ?

    <div className="inf">
      <img src={back} alt="" />
       <h1>{currentdata.fact}</h1> 

    </div>
    
     
     : <h1 id='error'>Wrong url</h1>}
  </div></>
    
  )
}

export default Paramex