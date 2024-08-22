import './App.css';
import Navbar from './screens/Navbar';
import { Outlet } from'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default App;
