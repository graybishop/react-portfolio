const About = () => {

  return (
    <section className="bg-dim-gray text-white container mx-auto">
      <div className='headerDiv'>
        <h2>About Me</h2>
        <i className="fas fa-info-circle"></i>
      </div>
      <div className="flex flex-col gap-2 px-4 py-2 text-xl">
        <p>I’ve been tinkering with computers, web sites, scripts, and the windows platform for over a decade both professionally, and on my own time. I like learning and teaching new technology, which has led me to pick up a new hobby or two every year. In my previous job, I was in charge of office tech infrastructure, deployment and maintenance of an IoT fleet, and data analysis. Having a large domain of knowledge allowed me the agility to pick up slack across departments. I’m building a web dev portfolio to crystalize my skill-set and create a formal career.</p>
        <p>I'm currently into 3D printing🖨, 3D modeling 🚧, PC gaming 🖱, light woodworking 🪓, and fantasy novels📖. Some of those hobbies synergize better than others, but all originate from a skill I had an interest in learning about (CAD, Part Design, Abstraction, Manufacturing, and Story-Telling). After being with my last company for three years and wearing ten hats, I’ve decided now is a great time to start putting emphasis on the things I like to do, and getting paid for it.</p>
      </div>
    </section>
  );
};

export default About;