import React from "react";
import "./index.css";
import Navbar from "./componant/Navbar";
import Footer from "./componant/Footer";
import Home from "./componant/Home";
import About from "./componant/About";
import Contact from "./componant/Contact";
import NewsCard from "./componant/NewsCard";
import News from "./componant/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                {/* <div className="bg-gray-900 text-white"> */}
                <Navbar title="NewsApp" />
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="/" element={<NewsCard />} />
                        <Route path="news" element={<News />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer title="NewsApp" />
                {/* </div> */}
            </Router>
        </>
    );
}

export default App;
