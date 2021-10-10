import React, { useState } from 'react';
import LinkAudioPlayer from './LinkAudioPlayer';
import styles from './Links.module.css';

interface LinkInterface {
  name: string;
  url: string;
  track?: TrackInterface
}

export interface TrackInterface {
  name: string,
  album: string,
  album_art: string,
  artist: string,
}
interface LinkAudioProp {
  link: LinkInterface
}

const LinkAudio = ({ link }: LinkAudioProp) => {
  const [open, setOpen] = useState(false);

  const expandDetails = () => setOpen(!open);

  return (
    <div>
      <button 
        onClick={expandDetails}
        className={styles.button}
      >
        {link.name}
      </button>
      <div style={{
        backgroundColor: '#F5F7F8',
        maxHeight: open ? '999px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 1s ease-in-out',
      }}>
        { link.track ? (
          <LinkAudioPlayer track={link.track}/>
        ) : ''}
      </div>
    </div>
  )
}

export default LinkAudio;