const Resume = () => {
  return (
    <section className="bg-black-coffee-dark text-timberwolf container mx-auto pb-6">
      <div className='headerDiv'>
        <div>
          <h2>Resume</h2>
          <i class="far fa-file"></i>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <h3 className='text-3xl border-b-2'>Front-End</h3>
        <div>
          <ul>
            <li>React.js</li>
            <li>Local Storage, Session Storage, IndexedDB</li>
            <li>Handlebars</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>PWAs</li>
          </ul>
        </div>
        <div>
          <h3 className='text-3xl border-b-2'>Server-Side</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>User Authentication</li>
            <li>MERN stack</li>
          </ul>
        </div>
        <div>
          <h3 className='text-3xl border-b-2'>Databases and API</h3>
          <ul>
            <li>MongoDb / Mongoose</li>
            <li>MySQL / Sequelize</li>
            <li>Fetch API / Axios</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;