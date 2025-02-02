import React from "react";


function Pizza({name, ingredients, price, photoName}) {
  return (
    <div className='pizza'>
      <img src={photoName} alt='' />
      <div>
        <h3> {name} </h3>
        <p> {ingredients}</p>
        
        <button className ='price'>
        <span  >{price}</span>
        </ button>
        
      </div>
    </div>
  );
}

export default Pizza;