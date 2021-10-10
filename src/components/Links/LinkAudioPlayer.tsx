import styles from './Links.module.css';
import { TrackInterface } from './LinkAudio';

interface AudioPlayerInterfaceProps {
  track: TrackInterface
}


const LinkAudioPlayer = ({ track }: AudioPlayerInterfaceProps) => (
  <div className={styles.player}>
    <img src={track.album_art} alt="Album artwork" className={styles.album}/>

    <div className={styles.nowplaying}>

      <div>
        <p>{track.name} - {track.artist}</p>
      </div>
    </div>

  </div>
)

export default LinkAudioPlayer;