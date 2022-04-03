import React from 'react';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://radiant-shore-26920.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product Successfully Inserted ')
                    reset()
                }
            })
    };
    return (
        <Container>
            <h2 className='my-4 product-title'>Add Products Here : </h2>
            <div className="add-product">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("productName")} placeholder='Product Name' />
                    <input {...register("productImage")} placeholder='Product Image' />
                    <textarea {...register("productDescription")} placeholder='Product description' />
                    <input  {...register("rating")} placeholder='Rating' />
                    <input type="number" {...register("price")} placeholder='Product Price' />
                    <select {...register("Color")}>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="pink">pink</option>
                        <option value="block">black</option>
                    </select>
                    <input type="submit" className='submit-btn' />
                </form>
            </div>
        </Container>
    );
};

export default AddProduct;