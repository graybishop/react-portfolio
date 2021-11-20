const Navigation = ({navigationProps}) => {

  const clickHandler = (newPage) => {
    navigationProps.setCurrentPage(newPage)
  }
  

  return (
    <nav>
      <button onClick={()=>clickHandler(navigationProps.pages[0])}>About Me</button>
      <button onClick={()=>clickHandler(navigationProps.pages[1])}>Portfolio</button>
      <button onClick={()=>clickHandler(navigationProps.pages[2])}>Contact</button>
      <button onClick={()=>clickHandler(navigationProps.pages[3])}>Resume</button>
    </nav>
  );
}

export default Navigation