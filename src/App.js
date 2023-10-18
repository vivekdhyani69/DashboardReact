import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardData from './page/DashboardData';

function App() {
  return (
    <>
     <ToastContainer/>
    <Router>
    <Routes>
   
  
<Route path="/" element={<DashboardData />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
