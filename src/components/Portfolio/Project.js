const Project = ({ project }) => {
  

  return (
    <article className='relative bg-black-coffee rounded cursor-pointer shadow' tabIndex='0' aria-label='Link to repo' onClick={()=>{window.location.assign(project.repoHref)}}>
      <img src={project.imageHref} alt={project.imageAlt} className='object-cover h-96 w-full rounded-t object-top'/>
      <div className='p-4'>
        <h3 className='text-xl font-semibold text-secondary-color'>{project.title}</h3>
        <p>{project.techHighlights}</p>
        <a href={project.repoHref} target="_blank" rel="noreferrer" className='underline'>Link to the repo</a>
      </div>
    </article>
  );
};

export default Project;