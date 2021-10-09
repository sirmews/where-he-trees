import Profile from '../Profile/Profile';
import Links from '../Links/Links';
import Footer from '../Footer/Footer';
import styles from './App.module.css'; 

function App() {
  return (
    <div className={styles.app}>
      <Profile/>
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;
