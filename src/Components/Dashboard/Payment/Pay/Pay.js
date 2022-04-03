import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51JvmdxK1m0zkPuoVdtMKN8JANDJJAAXvXRUVVgYJKg1nuaDQw3owZVuFsLjH8zPdcX9KUlU4ndPOk05B325MPASH00adqnS96v')

const Pay = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(`https://radiant-shore-26920.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])


    return (
        <div className='my-5'>
            <h5>Please Pay for: {user.displayName} for {order.productName}</h5>
            {order?.productPrice && <Elements stripe={stripePromise}>
                <CheckOutForm
                    order={order}
                />
            </Elements>}
        </div >
    );
};

export default Pay;