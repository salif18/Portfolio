import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projets from './Pages/Projets';
import VideoPage from './Pages/VideoPage';
import Propos from './Pages/Propos';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/projets' element={<Projets/>} />
       <Route path='/projets/:id' element={<VideoPage/>} />
       <Route path='/biographie' element={<Propos/>} />
      </Routes>
    </div>
  );
}

export default App;
