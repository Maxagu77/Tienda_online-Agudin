import React from 'react';
import carrito from '../image/icono_carrito.jpg';

const CartWidget = () => {

return (
  <div>
   <img src={carrito} className='icono_carrito.jpg' alt='logo'/>
  </div>
  );
}

export default CartWidget