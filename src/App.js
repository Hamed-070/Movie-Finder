import './App.css';
import { Route , Routes } from 'react-router-dom';
import Result from './components/Result';
import Home from './components/Home';

function App() {

  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  )
}

export default App;