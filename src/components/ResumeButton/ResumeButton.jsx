import KeResume from '/resume.pdf'

const ResumeButton = ({ style }) => {
  return (
    <a href={KeResume} download="Kyle Etrata Resume">
      <button className={style.rmvBtn}>Download My Resume!</button>
    </a>
  )
}
export default ResumeButton
