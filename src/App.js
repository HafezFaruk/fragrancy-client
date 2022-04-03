import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './Components/Products/Products/Products';
import About from './Components/AboutUs/About';
import DashBoard from './Components/Dashboard/DashBoard/DashBoard';
import ContactUs from './Components/ContactUs/ContactUs';
import Blogs from './Components/Blogs/Blogs';
import MyOrder from './Components/Dashboard/MyOrder/MyOrder';
import Payment from './Components/Dashboard/Payment/Payment';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import ManageProduct from './Components/Dashboard/ManageProduct/ManageProduct';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageOrder from './Components/Dashboard/ManageOrder/ManageOrder';
import Home from './Components/Home/Home';
import Login from './Components/Account/LogIn/Login';
import NavBar from './Share/Nevation/NavBar';
import Registration from './Components/Account/Registration/Registration';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import SingleProduct from './Components/Products/SingleProduct/SingleProduct';
import Footer from './Share/Footer/Footer';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Pay from './Components/Dashboard/Payment/Pay/Pay';
import AdminRoute from './Components/PrivetRoute/AdminRoute/AdminRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<PrivetRoute>
              <SingleProduct />
            </PrivetRoute>} />
            <Route path='/about' element={<About />} />
            <Route path='/dashboard' element={<DashBoard />}>
              <Route path='myOrder' element={<MyOrder />} />
              <Route path='payment' element={<Payment />} />
              <Route path='/dashboard/payment/:id' element={<PrivetRoute>
                <Pay />
              </PrivetRoute>} />
              <Route path='addProducts' element={<AddProduct />} />
              <Route path='manageProducts' element={<ManageProduct />} />
              <Route path='manageOrder' element={<ManageOrder />} />
              <Route path='makeAdmin' element={<AdminRoute>
                <MakeAdmin />
              </AdminRoute>} />
            </Route>
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
