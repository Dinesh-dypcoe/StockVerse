import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState} from "react";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allOrders").then((res) => {
      // console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {orders.map((stock, index) => {
            const  name= stock.name;
            const  qty= stock.qty;
            const price = stock.price;
            const mode = stock.mode;

            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{qty}</td>
                <td>{price.toFixed(2)}</td>
                <td>{mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
    
  );
};

export default Orders;