import Navigation from "./Navigation.js";

const Header = (props) => {
  

  return(
    <header className="bg-gradient-to-tl from-gold-metallic to-red-ryb flex flex-col items-center p-4 gap-4 text-white ">
        <h1 className="text-5xl font-bold filter drop-shadow-lg">Jake Swackhammer</h1>
        <Navigation navigationProps={props.navigationProps} />
    </header>
  )
}

export default Header