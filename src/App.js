import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

// Chapter 1
import Chapter1Index from './pages/Chapter1/ChapterIndex';
import Chapter1Section1 from './pages/Chapter1/Section1';
import Chapter1Section2 from './pages/Chapter1/Section2';
import Chapter1Section3 from './pages/Chapter1/Section3';
import Chapter1Section4 from './pages/Chapter1/Section4';

// Chapter 2
import Chapter2Index from './pages/Chapter2/ChapterIndex';
import Chapter2Section1 from './pages/Chapter2/Section1';
import Chapter2Section2 from './pages/Chapter2/Section2';
import Chapter2Section3 from './pages/Chapter2/Section3';
import Chapter2Section4 from './pages/Chapter2/Section4';

// Chapter 3
import Chapter3Index from './pages/Chapter3/ChapterIndex';
import Chapter3Section1 from './pages/Chapter3/Section1';
import Chapter3Section2 from './pages/Chapter3/Section2';
import Chapter3Section3 from './pages/Chapter3/Section3';
import Chapter3Section4 from './pages/Chapter3/Section4';

// Chapter 4
import Chapter4Index from './pages/Chapter4/ChapterIndex';
import Chapter4Section1 from './pages/Chapter4/Section1';
import Chapter4Section2 from './pages/Chapter4/Section2';
import Chapter4Section3 from './pages/Chapter4/Section3';
import Chapter4Section4 from './pages/Chapter4/Section4';

// Chapter 5
import Chapter5Index from './pages/Chapter5/ChapterIndex';
import Chapter5Section1 from './pages/Chapter5/Section1';
import Chapter5Section2 from './pages/Chapter5/Section2';
import Chapter5Section3 from './pages/Chapter5/Section3';
import Chapter5Section4 from './pages/Chapter5/Section4';

// Chapter 6
import Chapter6Index from './pages/Chapter6/ChapterIndex';
import Chapter6Section1 from './pages/Chapter6/Section1';
import Chapter6Section2 from './pages/Chapter6/Section2';
import Chapter6Section3 from './pages/Chapter6/Section3';
import Chapter6Section4 from './pages/Chapter6/Section4';

// Chapter 7
import Chapter7Index from './pages/Chapter7/ChapterIndex';
import Chapter7Section1 from './pages/Chapter7/Section1';
import Chapter7Section2 from './pages/Chapter7/Section2';
import Chapter7Section3 from './pages/Chapter7/Section3';
import Chapter7Section4 from './pages/Chapter7/Section4';

// Chapter 8
import Chapter8Index from './pages/Chapter8/ChapterIndex';
import Chapter8Section1 from './pages/Chapter8/Section1';
import Chapter8Section2 from './pages/Chapter8/Section2';
import Chapter8Section3 from './pages/Chapter8/Section3';
import Chapter8Section4 from './pages/Chapter8/Section4';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Chapter 1 */}
            <Route path="/chapter1" element={<Chapter1Index />} />
            <Route path="/chapter1/section1" element={<Chapter1Section1 />} />
            <Route path="/chapter1/section2" element={<Chapter1Section2 />} />
            <Route path="/chapter1/section3" element={<Chapter1Section3 />} />
            <Route path="/chapter1/section4" element={<Chapter1Section4 />} />
            
            {/* Chapter 2 */}
            <Route path="/chapter2" element={<Chapter2Index />} />
            <Route path="/chapter2/section1" element={<Chapter2Section1 />} />
            <Route path="/chapter2/section2" element={<Chapter2Section2 />} />
            <Route path="/chapter2/section3" element={<Chapter2Section3 />} />
            <Route path="/chapter2/section4" element={<Chapter2Section4 />} />
            
            {/* Chapter 3 */}
            <Route path="/chapter3" element={<Chapter3Index />} />
            <Route path="/chapter3/section1" element={<Chapter3Section1 />} />
            <Route path="/chapter3/section2" element={<Chapter3Section2 />} />
            <Route path="/chapter3/section3" element={<Chapter3Section3 />} />
            <Route path="/chapter3/section4" element={<Chapter3Section4 />} />
            
            {/* Chapter 4 */}
            <Route path="/chapter4" element={<Chapter4Index />} />
            <Route path="/chapter4/section1" element={<Chapter4Section1 />} />
            <Route path="/chapter4/section2" element={<Chapter4Section2 />} />
            <Route path="/chapter4/section3" element={<Chapter4Section3 />} />
            <Route path="/chapter4/section4" element={<Chapter4Section4 />} />
            
            {/* Chapter 5 */}
            <Route path="/chapter5" element={<Chapter5Index />} />
            <Route path="/chapter5/section1" element={<Chapter5Section1 />} />
            <Route path="/chapter5/section2" element={<Chapter5Section2 />} />
            <Route path="/chapter5/section3" element={<Chapter5Section3 />} />
            <Route path="/chapter5/section4" element={<Chapter5Section4 />} />
            
            {/* Chapter 6 */}
            <Route path="/chapter6" element={<Chapter6Index />} />
            <Route path="/chapter6/section1" element={<Chapter6Section1 />} />
            <Route path="/chapter6/section2" element={<Chapter6Section2 />} />
            <Route path="/chapter6/section3" element={<Chapter6Section3 />} />
            <Route path="/chapter6/section4" element={<Chapter6Section4 />} />
            
            {/* Chapter 7 */}
            <Route path="/chapter7" element={<Chapter7Index />} />
            <Route path="/chapter7/section1" element={<Chapter7Section1 />} />
            <Route path="/chapter7/section2" element={<Chapter7Section2 />} />
            <Route path="/chapter7/section3" element={<Chapter7Section3 />} />
            <Route path="/chapter7/section4" element={<Chapter7Section4 />} />
            
            {/* Chapter 8 */}
            <Route path="/chapter8" element={<Chapter8Index />} />
            <Route path="/chapter8/section1" element={<Chapter8Section1 />} />
            <Route path="/chapter8/section2" element={<Chapter8Section2 />} />
            <Route path="/chapter8/section3" element={<Chapter8Section3 />} />
            <Route path="/chapter8/section4" element={<Chapter8Section4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;