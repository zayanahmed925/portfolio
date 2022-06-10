import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Navbar from './Page/Home/Navbar';
import ProjectDetail from './Page/ProjectDetail/ProjectDetail';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project/:projectId' element={<ProjectDetail></ProjectDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
