import React from 'react';
import './index.css';
import Navbar from './componant/Navbar';
import Footer from './componant/Footer';
import Home from './componant/Home';
import About from './componant/About';
import Contact from './componant/Contact';
import NewsCard from './componant/NewsCard';
import News from './componant/News';
import H from './componant/SuccessAlert';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<div className="h-screen scrollbar-thin rounded scrollbar-thumb-rounded-full scrollbar-track-rounded-full active:scrollbar-thumb-transparent hover:scrollbar-thumb-gray-900 scrollbar-track-transparent dark:active:scrollbar-thumb-transparent dark:hover:scrollbar-thumb-gray-300 dark:scrollbar-track-transparent">
					<Navbar title="NewsWave" />
					<Routes>
						<Route path="/" element={<Home />}>
							<Route path="/" element={<NewsCard />} />
							<Route path="news" element={<News />} />
						</Route>
						<Route path="/x" element={<H />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
					<Footer title="NewsWave" />
				</div>
			</Router>
		</>
	);
}

export default App;
