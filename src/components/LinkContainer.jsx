import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LinkContainer = () => {
  return (
    <section className="linkContainer">
      <div className="iconDiv">
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          style={{ color: '#0f766e' }}
        />
      </div>
      <div className="iconDiv">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          style={{ color: '#0f766e' }}
        />
      </div>
    </section>
  )
}
export default LinkContainer
