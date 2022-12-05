
import './App.css';
import React from 'react';
import { Footer } from './components/layout/Footer';
import { MyRoutes } from './components/router/MyRoutes';

function App() {
  return (
    <div className='h-fit min-h-fit w-fit min-w-fit bg-gray-800 dark:bg-gray-400'>
      <MyRoutes />

      <Footer />
    </div>
  );
}

export default App;
