
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from ".";
import ResultListPageDry from "./components/filter_search_dog/ResultListPageDry";
import ResultListPageWet from "./components/filter_search_dog/ResultListPageWet";
import ResultListDry from "./components/filter_search_cat/ResultListDry";
import ResultListWet from "./components/filter_search_cat/ResultListWet";
import ResultListALLDog from "./components/filter_search_dog/search_all";
import ResultListALLCat from "./components/filter_search_cat/search_all";
import Card_product_dog from "./components/filter_search_dog/Card_product_dog";
import Search from "./components/Search";
import Card_product_cat from "./components/filter_search_cat/Card_product_cat";
import Basket from "./components/Basket";
import {Provider} from "react-redux";
import {store} from "./redux";


function App(props) {

  return (

      <Provider store={store}>
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/search/sychoy/dog" element={<ResultListPageDry/>}/>
                  <Route path="/search/wet/dog" element={<ResultListPageWet/>}/>
                  <Route path="/search/sychoy/cat" element={<ResultListDry/>}/>
                  <Route path="/search/vlazhny/cat" element={<ResultListWet/>}/>
                  <Route path="/search/all/dog" element={<ResultListALLDog/>}/>
                  <Route path="/search/all/cat" element={<ResultListALLCat/>}/>
                  <Route path="/product/dog/:item_id" element={<Card_product_dog/>}/>
                  <Route path="/product/cat/:item_id" element={<Card_product_cat/>}/>
                  <Route path="/product/search/:description" element={<Search/>}/>
                  <Route path="/product/basket_product" element={<Basket/>}/>


              </Routes>
          </Router>
      </Provider>
  );
}

export default App;
