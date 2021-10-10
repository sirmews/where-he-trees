import styles from './Links.module.css';
import { ListItemInterface } from './LinkAudio';
import Icon from '../Icon/Icon';
import SpotifyIcon from '../../icons/spotify.svg'
import AppleMusicIcon from '../../icons/apple-music.svg';
import SoundcloudIcon from '../../icons/soundcloud.svg';
import ArrowIcon from '../../icons/arrow.svg';

const ProviderMapping = {
  'APPLE_MUSIC': AppleMusicIcon,
  'SOUNDCLOUD': SoundcloudIcon,
  'SPOTIFY': SpotifyIcon,
}

const LinkAudioListItem = ({provider, name, url}: ListItemInterface) => {  

  const visitProvider = (url: string) => window.open(url, '_blank', 'noopener');

  const ProviderIcon = ProviderMapping[provider];

  return(
    <button 
      onClick={(e) => visitProvider(url)}
      className={styles.provider}
    >
      <div className={styles.providericon}>
        <Icon src={ProviderIcon} />
      </div>

      <div style={{
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderBottom: '1px solid #DADEE0',
      }}>
        <p>{name}</p>
        <Icon src={ArrowIcon} size={1} style={{transform: 'rotate(-90deg)'}} />  
      </div>
    </button>
  )
}

export default LinkAudioListItem;