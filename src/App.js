import './App.css';
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar';
import AboutMePage from './pages/About';
import GalleryPage from './pages/Gallery';
import PhotoProjectsList from './pages/ProjectsPage';
import BlogPage from './pages/Blog';

// import GalleryPage from './pages/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
        <NavBar />
        <Routes>
            <Route path='/home' exact element={<HomePage/>} />
            <Route path='/about' element={<AboutMePage/>} />
            <Route path='/gallery' element={<GalleryPage/>} />
            <Route path='/projects' element={<PhotoProjectsList/>} />
            <Route path='/blog' element={<BlogPage/>} />

            {/* <Route path='/gallery' element={<GalleryPage/>} /> */}
            {/* <Route path='/events' component={Events} />
            <Route path='/annual' component={AnnualReport} />
            <Route path='/team' component={Teams} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
        </Router>
    );
}

export default App;
