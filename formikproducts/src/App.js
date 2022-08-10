import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import AddProduct from './pages/AddProduct';
import Index from './pages/Index';
import Showlist from './pages/Showlist';




if(localStorage.getItem('products') === null){
  localStorage.setItem('products',JSON.stringify([]))
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = {<Index/>}/>
        <Route path='/add' element = {<AddProduct/>}/>
        <Route path='/list' element = {<Showlist/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
