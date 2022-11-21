
import './App.css';
import { Footer } from './components/layout/Footer';
import { MyRoutes } from './components/router/MyRoutes';

function App() {
  return (
    <div className="h-full  bg-heroBg grayscale-5 opacity-90 bg-no-repeat bg-cover ">

      <MyRoutes />

    </div>
  );
}

export default App;
