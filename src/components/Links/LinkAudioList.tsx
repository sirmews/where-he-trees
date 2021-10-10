import styles from './Links.module.css';
import LinkAudioListItem from "./LinkAudioListItem";
import { ListItemInterface, ListItemsInterface } from './LinkAudio';

interface AudioListInterfaceProp {
  list: ListItemsInterface
}

const LinkAudioList = ({ list }: AudioListInterfaceProp) => (
  <div className={styles.list}>
    { list.map((item: ListItemInterface, key: number) => (
      <LinkAudioListItem key={`list_${key}`} name={item.name} url={item.url} provider={item.provider}/>
    )) }
  </div>
)

export default LinkAudioList;