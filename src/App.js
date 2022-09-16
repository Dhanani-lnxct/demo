import logo from './logo.svg';
import './App.css';
import Test from '../src/pages/user'
import Tests from './pages/users';
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/demo" element={<Tests />} />
      </Routes> */}



      {/* <Routes> */}
      <Test />
      <Tests />
      {/* </Routes> */}
    </>
  );
}

export default App;
