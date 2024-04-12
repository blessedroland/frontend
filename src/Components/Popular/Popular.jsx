import React from 'react'
import './Popular.css'
import data2 from '../Assets/data2'
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>🔥TRENDING 🔥</h1>
        <hr />
        <div className="popular-item">
            {data2.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
