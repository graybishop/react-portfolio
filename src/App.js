import Portfolio from './components/Portfolio.js'
import { useState } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';


function App() {
  const pages = [ 'about', 'portfolio', 'contact', 'resume']

  const [currentPage, setCurrentPage] = useState(pages[0])

  const renderSection = () => {
    switch (currentPage) {
      case pages[0]:
        return <About />
      case pages[1]:
        return <Portfolio />
    
      default:
        break;
    }
  }

  let navigationProps = {pages, setCurrentPage}

  return (
    <div>
      <Header navigationProps={navigationProps}/>
      {renderSection()}
    </div>
  );
}

export default App;
