import Portfolio from './components/Portfolio/Portfolio.js'
import { useState } from 'react';
import Header from './components/page-components/Header.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/page-components/Footer.js';


function App() {
  const pages = [ 'about', 'portfolio', 'contact', 'resume']

  const [currentPage, setCurrentPage] = useState(pages[0])

  const renderSection = () => {
    switch (currentPage) {
      case pages[0]:
        return <About />
      case pages[1]:
        return <Portfolio />
      case pages[2]:
        return <Contact />
    
      default:
        break;
    }
  }

  let navigationProps = {pages, setCurrentPage}

  return (
    <div>
      <Header navigationProps={navigationProps}/>
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
