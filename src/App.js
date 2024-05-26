import './App.css';
import {Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Mainnavbar from './components/Mainnavbar';
import ProductForm from './pages/ProductForm';
import ProductHome from './pages/ProductHome';
import ProductList from './pages/ProductList';
import ProductTable from './pages/ProductTable';
import EditForm from './pages/EditForm';
import ViewProd from './pages/ViewProd';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mainnavbar></Mainnavbar>
      <Routes>
    <Route path="/" element={<ProductHome></ProductHome>}></Route>

    <Route path="/form" element={<ProductForm></ProductForm>}></Route>
    <Route path="/list" element={<ProductList></ProductList>}></Route>
    <Route path="/table" element={<ProductTable></ProductTable>}></Route>
    <Route path='/edit/:id' element={<EditForm></EditForm>}></Route>
    <Route path='/view/:id' element={<ViewProd></ViewProd>}></Route>

    </Routes>
    <Footer/>


    </div>
  );
}

export default App;
