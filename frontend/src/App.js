import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/about';
import Register from './pages/register';
import About from './pages/about';
import SignIn from './pages/signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/about' component={About} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={SignIn} />
      </Routes>
    </Router>
  );
}

export default App;
