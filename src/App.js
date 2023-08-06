import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { CartProvider } from './components/ContextReducer';
import MyOder from './screens/MyOrder';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.css';

function App() {
  return (
    <CartProvider>
    <Router>

   <div>
   <Routes>
    <Route exact path="/" element = {<Home/>} />  
    <Route exact path="/Login" element = {<Login/>} />  
    <Route exact path="/creatuser" element = {<SignUp/>} />  
    <Route exact path="/myOrder" element = {<MyOder/>} />  

   </Routes>
    
    </div>

    </Router>
    </CartProvider>
   
  );
}

export default App;
