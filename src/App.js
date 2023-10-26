import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MyAppbar from './compoments/Appbar';
import Home from './pages/Home';
import MyPosts from './pages/MyPosts';
import AddPost from './pages/AddPost';
import './App.css';
import Register from './compoments/Register';
import Login from './compoments/Login';

const App = () => {

  return (
    <div>
      <MyAppbar/>
      <Login/>
      <Register/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<MyPosts/>}/>
        <Route path='/create' element={<AddPost/>}/>
        <Route/>
      </Routes>
    </div>
  );
};

export default App;
