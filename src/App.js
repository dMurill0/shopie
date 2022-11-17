
import './App.css';
import { Footer } from './components/layout/Footer';
import { MyRoutes } from './components/router/MyRoutes';

function App() {
  return (
    <div className="h-full bg-primary/40">

      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
