import React, {useEffect, useState} from "react"
import Navigate from "../Navigate";

import Footer from "../Footer"
import axios from "axios";

import CatList from "./Cat_list";
import Pagination from "../Pagination";
import CustomContext from "../../context/Context";




const ResultListDry = (props) =>{

    const [cats, setCats] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(12)

    useEffect( () => {
         axios.get("http://127.0.0.1:8000/cat_food/").then(data =>{setCats(data.data)})


    }, [])

    const filteredCats = cats.filter(cat =>{
        return cat.title.toLowerCase().includes("сухой корм")
    })

    const lastProductIndex = currentPage * productPerPage
    const firstProductIndex = lastProductIndex - productPerPage
    const currentCat = filteredCats.slice(firstProductIndex, lastProductIndex)


    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev+1)
    const prevPage = () => setCurrentPage(prev => prev-1)



    return (

        <>
                <Navigate/>
            <h1 className="text-center mt-3">Сухой корм для Кошек</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {currentCat.length ? (currentCat.map((item, index)=>{
                        return (<CatList item={item} id={item.id} id_image={item.id_image} image={item.image} title={item.title} description={item.description} price={item.price} weight={item.weight} availability={item.availability}/>)
                    })) : (<h2 className="text-center">Поиск не дал результатов!</h2>)}
                </div>
            </section>
            <Pagination productPerPage={productPerPage} totalProduct={filteredCats.length} paginate={paginate}/>
            {/*<div className="text-center">*/}
            {/*    /!*<button className="btn btn-primary btn-sm" onClick={prevPage}>Предыдущая</button>*!/*/}
            {/*    /!*<button className="btn btn-primary ms-4 btn-sm" onClick={nextPage}>Следующая</button>*!/*/}
            {/*</div>*/}
            <Footer/>
        </>
    );
};

export default ResultListDry;