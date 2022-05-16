import React from 'react';
import {useEffect, useState} from 'react';
import {prod} from '../productos';
import ItemList from './ItemList'
//import cocina1 from '../image/c1(1).jpg'
//import dormi1 from '../image/d1.jpg'
//import living1 from '../image/l1.jpg'


//import ItemCount from 'ItemCount'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
     useEffect(() => {
       const data = new Promise ((resolve, reject) => {
           resolve(prod);
       });
       data.then ((data) => {
           setItems(data);
       });    
       data.catch(err => { 
           console.log(err); 
       });
    }, []);

    return(
        <div><ItemList items={items}></ItemList></div>
    )
}

export default ItemListContainer