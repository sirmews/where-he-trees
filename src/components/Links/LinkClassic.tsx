import styles from './Links.module.css';

interface LinkInterface {
  name: string;
  url: string;
}
interface LinkClassicProp {
  link: LinkInterface
}

const LinkClassic = ({ link }: LinkClassicProp) => {

  const visitLink = (url: string) => window.open(url, '_blank', 'noopener');

  return (
    <div
      className={styles.classic}
    >
      <button className={styles.button} onClick={(e) => visitLink(link.url)}>
        {link.name}
      </button>
    </div>
  )
}

export default LinkClassic;