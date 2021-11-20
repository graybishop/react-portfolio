const Footer = () => {
  return (
    <div className='flex-grow bg-green-800 flex flex-col items-center gap-2 text-white'>
      <h2 className='text-3xl'>Reach out:</h2>
      <ul className='text-xl'>
        <li><a href="mailto:j.100101@gmail.com"><i class="fas fa-envelope-square"></i> j.100101@gmail.com</a></li>
        <li><a href="https://github.com/GrayBishop" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i> GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/jake-s-285670218/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
      </ul>
      <p className='text-2xl'>Made with ❤</p>
    </div>
  );
};

export default Footer;