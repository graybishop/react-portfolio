const Project = ({project}) => {
  return (
    <article>
      <a href={project.repoHref} target="_blank" rel="noreferrer">
        <div>
          <h3>{project.title}</h3>
          <p>{project.techHighlights}</p>
        </div>
        <img src={project.imageHref} alt={project.imageAlt} />
      </a>
    </article>
  );
}

export default Project