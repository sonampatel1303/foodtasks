
import './App.css';
import LoginPage from './Components/LoginPage';
import MenuPage from './Components/MenuPage';
import OrderPage from './Components/OrderPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router';
import Navbar from './utils/Navbar';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
   <Route path="/" element={<LoginPage/>}/>
   <Route path="/menu" element={<MenuPage/>}/>
  <Route path="/order" element= {<OrderPage/>}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
