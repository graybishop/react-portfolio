const Footer = () => {
  return (
    <div className='flex-grow bg-black-coffee-dark flex flex-col items-center gap-2 text-white text-fakecolor py-4'>
      <h2 className='text-2xl font-semibold'>Reach out.</h2>
      <ul className='text-lg'>
        <li><a href="mailto:j.100101@gmail.com"><i className="fas fa-envelope-square"></i> j.100101@gmail.com</a></li>
        <li><a href="https://github.com/GrayBishop" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i> GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/jake-s-285670218/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
      </ul>
      <p className='text-xl'>Made with ❤.</p>
    </div>
  );
};

export default Footer;