import React from 'react'

const Item = ({item}) => {
    const {nombre, precio, stock, imagen} = item;
  return (
    <div className="item">
        <img src={imagen} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>{precio}</p>
        <p>{stock}</p>
    </div>
  );
};

export default Item
