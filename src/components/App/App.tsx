import Profile from '../Profile/Profile';
import Links from '../Links/Links';
import Footer from '../Footer/Footer';
import styles from './App.module.css'; 
import api from '../../mocks/api';

function App() {
  const { USER } = api;
  const { LINKS } = api;

  // admittedly this is quite hacky but I ran out of time
  
  document.documentElement.style.setProperty('--color-button', USER?.colors?.backgroundColor);
  document.documentElement.style.setProperty('--color-text', USER?.colors?.color);

  return (
    <div className={styles.app}>
      <Profile avatar={USER.avatar} handle={USER.handle} />
      <Links links={LINKS}/>
      <Footer/>
    </div>
  );
}

export default App;
