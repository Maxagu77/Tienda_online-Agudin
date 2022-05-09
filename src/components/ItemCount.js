import { useState } from "react"

 function ItemCount ({stock,initial}) {

    const [state, setState] = useState(0);
    const [sumar,setSumar] = useState(false);

    const handleClick = ()=>{
        if(state===stock) {
            setSumar(true);
        } else {
            setState(state+1);
        }
    }
    const restar = ()=> {
        if(state>=1) {
            setState(state - 1)
            setSumar(false)
        } else {
            setState(state=0)
        }
    }

    return(
      <div>
        <table>
            <tr>   
               <th><button disabled={sumar} onClick={handleClick}>+</button></th>
               <th>
                   <h1>{state}</h1>
               </th>
               <th><button onClick={restar}>-</button></th>
           </tr>
        </table>        
      </div>             
    )
}
export default ItemCount

//import { component } from "react";
//import React from "react";

//class ItemCount extends component {

  //  constructor () {
  //      super()
  //      this.state = {
  //          count: 1
  //      }
  //  }
  //  sumar = ()=>{
  //      this.setState({count: this.state.count + 1})

  //  }    

 //render () {
 //   return(
 //       <table>
 //           <tr>
 //             <th><button onClick={this.sumar}>+</button></th>
 //             <th>{this.state.count}</th>
 //           </tr>
 //       </table>
 //   ) 
 // }
//}
//export default ItemCount
