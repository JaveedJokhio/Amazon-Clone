import React, { useEffect, useState } from 'react';
import './Orders.css';
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import Order from './Order';
import { collection, getDocs } from 'firebase/firestore';

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);


  

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const ordersCollectionRef = collection(db, 'users', user?.uid, 'orders');
          const querySnapshot = await getDocs(ordersCollectionRef);

          const userOrders = querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }));

          setOrders(userOrders);
          
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      } else {
        setOrders([]);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      
      <div className='orders_order'>
        {orders.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
