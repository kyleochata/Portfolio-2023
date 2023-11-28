const MainProjectCard = ({ project, findImage, style }) => {
  return (
    <>
      <div className={style.ProjectImgContainer}>
        <img
          src={findImage()}
          alt={project.title}
          className={style.ProjectImg}
        />
      </div>
      <div className={style.MainCardRight}>
        <h1 className={style.ProjectMainTitle}>{project.title}</h1>
        <div className={style.ProjectMainDescription}>
          {project.description}
        </div>
        <div className={style.ProjectMainBtn}>
          <div className={style.ProjectCardMainBtn}>
            <a href={project.liveSite} target="_blank">
              Live Site
            </a>
          </div>
          <div className={style.ProjectCardMainBtn}>
            <a href={project.githubRepo} target="_blank">
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default MainProjectCard
