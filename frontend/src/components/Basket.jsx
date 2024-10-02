import React, {useEffect, useRef, useState} from "react"
import {useContext} from "react";

import {useSelector} from "react-redux";
import {store} from "../redux";
import Navigate from "./Navigate";
import Footer from "./Footer";
import {setItemInCart} from "../redux/cart/reducer";


const Basket = (props) =>{


     // const items = useSelector(state => state.cart.itemsInCart)
     const items = JSON.parse(localStorage.getItem('basket'))
     const [basketCatDry, setBasketCatDry] = useState(items)


     const handleClick = (item_id, name) => {
         const data = items.filter(cat =>{
         return cat.id !== item_id || cat.name !== name})
         localStorage.setItem('basket',JSON.stringify(data))
         setBasketCatDry(data)

     }




    return (

        <div>
            <Navigate/>
                    {basketCatDry?.length ? (basketCatDry.map((item, index)=>{ if (item.name === "кошка") {
                        return <table className="table">
                            <thead>
                            <tr>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"><img src={"/image/image_cat/" + item.id_image + ".png"} width='70' height="70"/></th>
                                <td>{item.title}</td>
                                <td>{item.availability}</td>
                                <td>{item.price} р.</td>
                                <button type="button" className="btn btn-outline-danger">Оформить заказ</button>
                                <button type="button" className="btn btn-outline-danger" onClick={() => handleClick(item.id, item.name)}>Удалить</button>
                            </tr>
                            </tbody>
                        </table>}
                        else {return <table className="table">
                            <thead>
                            <tr>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"><img src={"/image/image_dog_dry/" + item.id_image + ".png"} width='70' height="70"/></th>
                                <td>{item.title}</td>
                                <td>{item.availability}</td>
                                <td>{item.price} р.</td>
                                <button type="button" className="btn btn-outline-danger">Оформить заказ</button>
                                <button type="button" className="btn btn-outline-danger" onClick={() => handleClick(item.id, item.name)}>Удалить</button>
                            </tr>
                            </tbody>
                        </table>}
                    })) : (<div><h1 className="text-center">Корзина пуста!</h1></div>)}

        <Footer/>
        </div>


           );
        };


export default Basket;