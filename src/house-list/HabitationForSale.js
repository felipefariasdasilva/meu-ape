import React from 'react';
import HouseItem from '../house-item/HouseItem';
import './style.css'

export default function HabitationForSale() {

  return (
    <div className="div-list">

      <h3 style={{ display:"flex",alignItems:"center  " }}>
        <h2>
          <bold>60.548          </bold>
        </h2> 
        Apartamentos à venda em Santos - SP
      </h3>
      
      <HouseItem />
      <HouseItem />
      <HouseItem />
    </div>
  )
}
