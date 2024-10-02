import React from "react"
import Navigate from "./Navigate";
import Carousel from "./Carousel"
import Footer from "./Footer"
import Pre_footer from "./Pre_footer";
import Recomended from "./Recomended";
import Category from "./Category";
import Basket from "./Basket";
import ResultListDry from "./filter_search_cat/ResultListDry";

const HomePage = () =>{

    return (
        <div>
                <Navigate/>
                <li className="d-inline-block"></li>
                <Carousel/>
                <li className="d-inline-block"></li>
                <li className="d-inline-block"></li>
                <Pre_footer/>
                <li className="d-inline-block"></li>
                <li className="d-inline-block"></li>
                <Category/>
                <li className="d-inline-block"></li>
                <li className="d-inline-block"></li>
                <Recomended/>
                <li className="d-inline-block"></li>
                <li className="d-inline-block"></li>
                <Footer/>
        </div>
    )
}

export default HomePage;