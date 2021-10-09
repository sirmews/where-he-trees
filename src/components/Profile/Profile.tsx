import styles from './Profile.module.css';

interface ProfileProps {
  avatar: string;
  handle: string;
  colors?: ProfileColors;
}

interface ProfileColors {
  backgroundColor: string;
  color: string;
}

const Profile = ({ avatar, handle }: ProfileProps) => (
  <div className={styles.profile}>
    <img 
        src="avatar.png"
        alt="User avatar"
        className={styles.avatar}
    />
    <p className={styles.handle}>@handle</p>
  </div>
);


export default Profile;