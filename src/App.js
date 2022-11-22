
import './App.css';
import React from 'react';
import { Footer } from './components/layout/Footer';
import { MyRoutes } from './components/router/MyRoutes';
import { Header } from './components/layout/Header';

function App() {
  return (
    <div className='h-fit min-h-fit w-fit min-w-fit bg-slate-900'>
      <MyRoutes />

      <Footer />
    </div>
  );
}

export default App;
