const Navigation = ({navigationProps}) => {

  const clickHandler = (newPage) => {
    navigationProps.setCurrentPage(newPage)
  }
  

  return (
    <nav className='grid grid-cols-2 gap-3 w-full px-4 sm:flex sm:flex-row justify-center sm:w-auto'>
      <button onClick={()=>clickHandler(navigationProps.pages[0])}>About Me</button>
      <button onClick={()=>clickHandler(navigationProps.pages[1])}>Portfolio</button>
      <button onClick={()=>clickHandler(navigationProps.pages[2])}>Contact</button>
      <button onClick={()=>clickHandler(navigationProps.pages[3])}>Resume</button>
    </nav>
  );
}

export default Navigation