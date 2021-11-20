import Project from "./Project.js";


const Portfolio = () => {
  let projects = []
  projects.push({
    title:'Unearthly Venue',
    repoHref:'https://github.com/graybishop/the-web-spinners',
    techHighlights:'Express/MySQL/Handlebars/Tailwind CSS',
    imageHref:'https://github.com/graybishop/the-web-spinners/raw/main/readme_assets/Home%20Page%20Screenshot.png',
    imageAlt:'Screenshot of Unearthly Venues website'
  })
  projects.push({
    title:'GeoStream',
    repoHref:'https://github.com/graybishop/Geo-Stream',
    techHighlights:'HTML5/JS/OMDBApi/Tailwind CSS/SplideJS',
    imageHref:'https://user-images.githubusercontent.com/87917345/136581935-de998667-4eb5-4993-917a-cad42e68cf38.png',
    imageAlt:'Screenshot of GeoStream website'
  })
  projects.push({
    title:'Code Refactor',
    repoHref:'https://github.com/graybishop/code-refactor-octo',
    techHighlights:'HTML5/CSS3',
    imageHref:'./images/code-refactor-screenshot.jpg',
    imageAlt:'Screenshot of Horiseon website'
  })
  projects.push({
    title:'Weather Dashboard',
    repoHref:'https://github.com/graybishop/weather-dashboard-openweatherp',
    techHighlights:'HTML5/CSS3/JS/OpenWeatherOneCallApi',
    imageHref:'https://raw.githubusercontent.com/graybishop/weather-dashboard-openweather/main/images/weather-dashboard-screenshot.jpg',
    imageAlt:'Screenshot of the weather dashboard website.'
  })

  let projectComponents = projects.map(project=> {return <Project project={project} key={project.repoHref}/>}
  )

  return (
    <div>
      <h2>Portfolio</h2>
      {projectComponents}
    </div>
  )
}

export default Portfolio