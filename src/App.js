import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/"       >Home</Link>
        <Link to='/company'>Company</Link>
        <Link to='/newproject'       >Projects</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
      <Container customClass="min-height" >
          <Routes>
            <Route exact path='/' element={<Home />} ></Route>
            <Route exact path='/company' element={<Company />} ></Route>
            <Route exact path='/contact' element={<Contact />} ></Route>
            <Route exact path='/newproject' element={<NewProject />} ></Route>
          </Routes>
      </Container>

      <p>Footer</p>

    </Router>
  );
}

export default App;
