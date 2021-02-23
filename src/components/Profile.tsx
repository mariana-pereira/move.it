import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/26336279?s=460&u=64439e413ef11e1c1d5ab507a37f6aa94e59546e&v=4" alt="Mariana Pereira"/>
      <div>
        <strong>Mariana Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}

export default Profile;