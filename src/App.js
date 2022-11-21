
import './App.css';
import { Footer } from './components/layout/Footer';
import { MyRoutes } from './components/router/MyRoutes';

function App() {
  return (
    <div className="h-full  bg-heroBg opacity-70 bg-no-repeat bg-cover ">

      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
