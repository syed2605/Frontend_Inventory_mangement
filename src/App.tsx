import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/home';

function App() {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
