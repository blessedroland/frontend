import React, { useState } from 'react'
import './Hero.css'
import arrow from '../Assets/arrow.png'
import data from '../Assets/Search.json'
import displaySchContOpacity from '../../Context/display'


export const Hero = () => {
    const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='hero'>
        <div className="hero-right">
            <input id='inputId' type="text" placeholder='enter your search' className='search' onClick={displaySchContOpacity} onChange={(event) =>{
                setSearchTerm(event.target.value)
            }}/>
            <div className='search-sug' id='sch-cont'>
                {
                    data
                        .filter((val) => {
                            if (searchTerm == ""){
                            return val;
                        }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        return val;
                        })
                        .map((val)=> {
                            return( 
                                <div className='template'key={val.id}>
                                    <h3>{val.name}</h3>
                                    <p className = "price" p>{val.product}</p>
                                </div>
                            )
                        })
                }
            </div>
        </div>
        <div className="hero-left">
            <h2>EA LIBRARIES</h2>
            <div>
                <div>
                    <p>GREAT MINDS</p>
                
                </div>
                <p>GREAT READS</p>
                <p>ONE FOR ALL</p>
            </div>
            <div className="hero--check-bnt">
                <div>Books Available</div>
                <img src={arrow}/>
            </div>
        </div>
        
    </div>
  )
}
