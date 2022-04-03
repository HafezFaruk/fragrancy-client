import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Payment = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://radiant-shore-26920.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email,]);
    return (
        <div className='order-product'>
            <Container>
                <h2 className='product-title'>Ordered Products</h2>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Product Name</th>
                            <th>Order Date</th>
                            <th>Product Price</th>
                            <th>Product Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <td>{user.displayName}</td>
                                <td>{order.email}</td>
                                <td>{order.productName}</td>
                                <td>{order.date}</td>
                                <td>{order.productPrice}</td>
                                <td>{order.color}</td>
                                <td>{order.payment ?
                                    'paid' : <Link to={`/dashboard/payment/${order._id}`}>
                                        <button>Pay</button>
                                    </Link>}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
};

export default Payment;