import React from 'react';
import logo from './logo.svg';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateDocument from './pages/CreateDocument';
import Home from './pages/Home';
import SingleDocument from './pages/SingleDocument';
import UpdateDocument from './pages/UpdateDocument';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path={'/create-document'} element={<CreateDocument/>} />
          <Route path={'/update-document/:id'} element={<UpdateDocument/>} />
          <Route path={'/documents/:id'} element={<SingleDocument/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
