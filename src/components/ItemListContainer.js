import React from 'react';
import {useEffect, useState} from 'react';
import {prod} from '../productos';
import ItemList from './ItemList'

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
       data.cach(err => { 
           console.log(err); 
       });
    }, []);

    return(
        <div><ItemList items={items}></ItemList></div>
    )
}

export default ItemListContainer