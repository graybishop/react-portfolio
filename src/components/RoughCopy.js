const RoughCopy = (props) => {
  return (<div>
    <div>
      <p>TEST</p>
      {[<p>does this render</p>, <p>how about this one</p>]}
    </div>
    <header>
        <h1 className="text-red-500">Jake Swackhammer</h1>
        <nav>
            <a href="#about-me">About Me</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com/graybishop/portfolio-graybishop" target="_blank" rel="noreferrer">Resume</a>
        </nav>
    </header>
    <section class="banner">
        <p>The next big thing.</p>
    </section>
    <main>
        <section class="about-me" id="about-me">
            <h2 class="section-header">About Me</h2>
            <div class="flex-child">
                <p>I’ve been tinkering with computers, web sites, scripts, and the windows platform for over a decade both professionally, and on my own time. I like learning and teaching new technology, which has led me to pick up a new hobby or two every year. In my previous job, I was in charge of office tech infrastructure, deployment and maintenance of an IoT fleet, and data analysis. Having a large domain of knowledge allowed me the agility to pick up slack across departments.   I’m building a web dev portfolio to crystalize my skill-set and create a formal career.  </p>
                <p>I'm currently into 3D printing🖨, 3D modeling 🚧, PC gaming 🖱, light woodworking 🪓, and fantasy novels📖. Some of those hobbies synergize better than others, but all originate from a skill I had an interest in learning about (CAD, Part Design, Abstraction, Manufacturing, and Story-Telling). After being with my last company for three years, and wearing ten hats, I’ve decided now is a great time to start putting emphasis on the things I like to do, and getting paid for it. </p>
            </div>
        </section>
        <section class="work" id="work">
            <h2 class="section-header">Work</h2>
            <div class="work-grid flex-child">
                <article>
                    <a href="https://github.com/graybishop/the-web-spinners" target="_blank" rel="noreferrer">
                    <div>
                    <h3>Unearthly Venues</h3>
                    <p>Express/MySQL/Handlebars/Tailwind CSS</p>
                    </div>
                    <img src="https://github.com/graybishop/the-web-spinners/raw/main/readme_assets/Home%20Page%20Screenshot.png" alt="Screenshot of Unearthly Venues website"/>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/graybishop/Geo-Stream" target="_blank" rel="noreferrer">
                    <div>
                    <h3>GeoStream</h3>
                    <p>HTML5/JS/OMDBApi/Tailwind CSS/SplideJS</p>
                    </div>
                    <img src="https://user-images.githubusercontent.com/87917345/136581935-de998667-4eb5-4993-917a-cad42e68cf38.png" alt="Screenshot of GeoStream website"/>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/graybishop/code-refactor-octo" target="_blank" rel="noreferrer">
                    <div>
                    <h3>Code Refactor</h3>
                    <p>HTML5/CSS3</p>
                    </div>
                    <img src="./images/code-refactor-screenshot.jpg" alt="Screenshot of Horiseon website"/>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/graybishop/weather-dashboard-openweatherp" target="_blank" rel="noreferrer">
                    <div>
                    <h3>Weather Dashboard</h3>
                    <p>HTML5/CSS3/JS/OpenWeatherOneCallApi</p>
                    </div>
                    <img src="https://raw.githubusercontent.com/graybishop/weather-dashboard-openweather/main/images/weather-dashboard-screenshot.jpg" alt="Screenshot of the weather dashboard website."/>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/graybishop/portfolio-graybishop" target="_blank" rel="noreferrer">
                    <div>
                    <h3>Portfolio</h3>
                    <p>HTML5/CSS3/Flexbox</p>
                    </div>
                    <img src="./images/portfolio-screenshot.jpg" alt="Screenshot of this portfolio website."/>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/GrayBishop" target="_blank" rel="noreferrer">
                    <div>
                    <h3>Responsive BootStrap</h3>
                    <p>BootStrap/HTML5/CSS3</p>
                    </div>
                    <img src="./images/Boot-Strap-Screenshot.png" alt="Bootstrap icon."/>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/GrayBishop" target="_blank" rel="noreferrer">
                    <div>
                    <h3>Project 4</h3>
                    <p>Lorem/ipsum/dolor/sit</p>
                    </div>
                    <img src="./images/Generic photo 2.jpeg" alt="Train with large smokestack."/>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/GrayBishop" target="_blank" rel="noreferrer">
                    <div>
                    <h3>Project 5</h3>
                    <p>Lorem/ipsum/dolor/sit</p>
                    </div>
                    <img src="./images/Generic photo 3.jpeg" alt="Illustrated bear standing on hind legs."/>
                    </a>
                </article>
            </div>
        </section>
        <section class="contact" id="contact">
            <h2 class="section-header">Contact</h2>
            <ul class="flex-child">
                <li><a href="tel:305-972-4081">(305) 972-4081</a></li>
                <li><a href="mailto:j.100101@gmail.com">j.100101@gmail.com</a></li>
                <li><a href="https://github.com/GrayBishop" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/jake-s-285670218/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
        </section>
    </main>
    
</div>)
}

export default RoughCopy