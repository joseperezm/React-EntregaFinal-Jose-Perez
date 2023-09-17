import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

function Main () {
    return (
        <>
        <main id="main" className="main text-center mb-5">
             <img src="/logo.png" alt="logo" className="logo m-4" />
            <Routes>
                <Route path='/' element={<ItemListContainer  greeting='"Todo en artes marciales"'/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='*' element={<h1>Error 404...</h1>}/>
            </Routes>
        </main>
        </>
    )
}

export default Main