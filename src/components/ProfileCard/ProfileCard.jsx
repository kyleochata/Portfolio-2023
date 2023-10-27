import style from './ProfileCard.module.css'
import profilePic from '../../images/profile-pic.png'

const ProfileCard = () => {
  return (
    <section className={style.ProfileCard}>
      <div
        className={style.ProfileImgContainer}
        style={{ height: '20%', borderRadius: '50%', overflow: 'hidden' }}
      >
        <img
          src={profilePic}
          alt="profile-picture"
          className={style.ProfilePic}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </div>
      <div className="profile-info" style={{ height: '80%' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla officiis
        porro vel inventore laboriosam nihil consequuntur ipsam sunt ipsa
        aspernatur ducimus quia necessitatibus tempora, voluptatibus deserunt
        qui.
      </div>
    </section>
  )
}
export default ProfileCard
