import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Filter from './pages/filter/Filter';
import Detail from './pages/details/Detail';
import TypeOfProperty from "./pages/propertytype/TypeOfProperty";
import Address from "./pages/address/Address";
import Owner from "./pages/owner/Owner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="filter" element={<Filter/>} />
        <Route path="detail" element={<Detail/>}/>
        <Route path="propertytype" element={<TypeOfProperty/>} />
        <Route path="address" element={<Address/>} />
        <Route path="owner" element={<Owner/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
