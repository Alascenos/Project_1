import { Route, Routes } from 'react-router-dom';
import { Active } from './Active/Active';
import './App.css';
import { Content } from './Content/Content';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { Inactive } from './Inactive/Inactive';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element ={<Content/>}></Route>
      </Routes>
    </div>
  );
}

export default App;


