import Profile from '../Profile/Profile';
import Links from '../Links/Links';
import Footer from '../Footer/Footer';
import styles from './App.module.css'; 
import api from '../../mocks/api';

function App() {
  const { USER } = api;
  return (
    <div className={styles.app}>
      <Profile avatar={USER.avatar} handle={USER.handle} />
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;
