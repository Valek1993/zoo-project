import React, {useEffect, useState} from "react"
import Navigate from "../Navigate";
// import Carousel from "./Carousel"
import Footer from "../Footer"
import axios from "axios";
import Dog_list from "./Dog_list";
import Pagination from "../Pagination";
import {NavLink, useParams} from "react-router-dom";
import CatList from "../filter_search_cat/Cat_list";


const ResultListPageDry = () =>{

    const [dogs, setDogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(12)
    // const {sychoy} = useParams()

    useEffect( () => {
         axios.get("http://127.0.0.1:8000/dog_food/").then(data =>{setDogs(data.data)})



    }, [])


    const filteredDogs = dogs.filter(dog =>{
        return dog.title.toLowerCase().includes("сухой корм")
    })
    const lastProductIndex = currentPage * productPerPage
    const firstProductIndex = lastProductIndex - productPerPage
    const currentDog = filteredDogs.slice(firstProductIndex, lastProductIndex)


    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev+1)
    const prevPage = () => setCurrentPage(prev => prev-1)


    return (

        <>
            <Navigate/>
            <h1 className="text-center mt-3">Сухой корм для собак</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {currentDog.length ? (currentDog.map((item, index)=>{
                        return (<Dog_list item={item} id={item.id} id_image={item.id_image} image={item.image} title={item.title} description={item.description} price={item.price} weight={item.weight} availability={item.availability}/>)
                    })) : (<h2 className="text-center">Поиск не дал результатов!</h2>)}
                </div>
            </section>
            <Pagination productPerPage={productPerPage} totalProduct={filteredDogs.length} paginate={paginate}/>
            {/*<div className="text-center">*/}
            {/*    <button className="btn btn-primary btn-sm" onClick={prevPage}>Предыдущая</button>*/}
            {/*    <button className="btn btn-primary ms-4 btn-sm" onClick={nextPage}>Следующая</button>*/}
            {/*</div>*/}
            <Footer/>
        </>
    );
};

export default ResultListPageDry;