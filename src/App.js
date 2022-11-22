//import "./scss/app.scss"
import MainLayout from "./layouts/MainLayout";
import {Routes, Route} from "react-router-dom";
import Articles from "./pages/Articles";
import Photos from "./pages/Photos";
import Users from "./pages/Users";
import 'antd/dist/reset.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Articles/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="photos" element={<Photos/>}/>
      </Route>
    </Routes>
  );
}

export default App;

/* import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
//import './App.css';
import './scss/app.css'
import Articles from "./pages/Articles"
import Users from "./pages/Users"
import Photos from './pages/Photos';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      { <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='/posts' element={<Articles />} />
          <Route path='/users' element={<Users />} />
          <Route path='/photos' element={<Photos />} />
        </Route>
      </Routes> }
      
      <Articles />
      <Users />
      <Photos />
    </>
  
  );
}
export default App; */



