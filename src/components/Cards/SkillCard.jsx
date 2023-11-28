const SkillCard = ({ skill, style }) => {
  return (
    <div className={style.SkillCard} key={skill.name}>
      <div className={style.skillImage}>
        <img src={skill.image} alt={skill.name} />
      </div>
      <div className={style.skillList}>
        <h3 className={style.skillName}>{skill.name}</h3>
      </div>
    </div>
  )
}
export default SkillCard
