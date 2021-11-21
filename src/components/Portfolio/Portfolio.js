import Project from "./Project.js";


const Portfolio = () => {
  let projects = [];
  projects.push({
    title: 'Unearthly Venue',
    repoHref: 'https://github.com/graybishop/the-web-spinners',
    techHighlights: 'Express/MySQL/Handlebars/Tailwind CSS',
    imageHref: 'https://github.com/graybishop/the-web-spinners/raw/main/readme_assets/Home%20Page%20Screenshot.png',
    imageAlt: 'Screenshot of Unearthly Venues website'
  });
  projects.push({
    title: 'GeoStream',
    repoHref: 'https://github.com/graybishop/Geo-Stream',
    techHighlights: 'HTML5/JS/OMDBApi/Tailwind CSS/SplideJS',
    imageHref: 'https://user-images.githubusercontent.com/87917345/136581935-de998667-4eb5-4993-917a-cad42e68cf38.png',
    imageAlt: 'Screenshot of GeoStream website'
  });
  projects.push({
    title: 'Code Refactor',
    repoHref: 'https://github.com/graybishop/code-refactor-octo',
    techHighlights: 'HTML5/CSS3',
    imageHref: 'https://camo.githubusercontent.com/cb0168dce736886941b3b495c652934f9d381c0fce0e4fc017556afe69ce4de2/68747470733a2f2f692e696d6775722e636f6d2f6a3034416246302e706e67',
    imageAlt: 'Screenshot of Horiseon website'
  });
  projects.push({
    title: 'Weather Dashboard',
    repoHref: 'https://github.com/graybishop/weather-dashboard-openweather',
    techHighlights: 'HTML5/CSS3/JS/OpenWeatherOneCallApi',
    imageHref: 'https://raw.githubusercontent.com/graybishop/weather-dashboard-openweather/main/images/weather-dashboard-screenshot.jpg',
    imageAlt: 'Screenshot of the weather dashboard website.'
  });

  let projectComponents = projects.map(project => { return <Project project={project} key={project.repoHref} />; }
  );

  return (
    <div className="bg-black-coffee-dark text-timberwolf container mx-auto pb-6">
      <div className='headerDiv'>
        <div>
          <h2>Portfolio</h2>
          <i className="fas fa-folder-open"></i>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-4 py-2 leading-relaxed">
        {projectComponents}
      </div>
    </div>
  );
};

export default Portfolio;