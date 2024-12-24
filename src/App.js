import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Homepage';
import About from './Pages/About';
import Fall from './Pages/Fall';
import Winter from './Pages/Winter';
import Spring from './Pages/Spring';
import Summer from './Pages/Summer';
import Nature from './Pages/Nature';
import Animals from './Pages/Animals';
import Glassware from './Pages/Glassware';
import Kids from './Pages/Kids';
import MISC from './Pages/Misc';

const App = () => {
    return (
        <Router basename="/paintbox/home">
            <Layout>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/fall" element={<Fall />} />
                    <Route path="/winter" element={<Winter />} />
                    <Route path="/spring" element={<Spring />} />
                    <Route path="/summer" element={<Summer />} />
                    <Route path="/nature" element={<Nature />} />
                    <Route path="/animals" element={<Animals />} />
                    <Route path="/glassware" element={<Glassware />} />
                    <Route path="/kids" element={<Kids />} />
                    <Route path="/misc" element={<MISC />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
