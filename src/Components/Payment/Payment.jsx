import React, { useContext } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';
import JewelryContext from '../../Context/JewelryContext';
function Payment() {
  const {test,cart} = useContext(JewelryContext)

  // const deliveredCart = [...cart]

  // let filteredCart = deliveredCart.map((cart)=>{
  //   const {name,quantity} = cart
  //   return {name,quantity}
  // })

  
  const arr = [{name:'product 1',quantity:10,cost:"20.99"},{name:'product 2',quantity:20,cost:"40.99"}]
  const createOrder = (data) => {
    // Order is created on the server and the order id is returned

    return fetch("http://localhost:4000/api/orders", {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify(
        // product:{
        //   description:'hi',
        //   quantity:10,
        //   cost:'10.99'
        // }
        cart
      ),
    })
    .then((response) => response.json())
    .then((order) =>  order.id)
    .catch(err => console.log(err) )
  };
  const onApprove = (data) => {
    console.log(data)
     //Order is captured on the server and the response is returned to the browser
     return fetch(`http://localhost:4000/api/orders/${data.orderID}/capture`, {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    })
    .then((response) => response.json());
  };
  return (
    <PayPalButtons
      createOrder={(data,actions) => createOrder(data, actions)}
      onApprove={(data,actions) => onApprove(data, actions)}
    />
  );
}

export default Payment