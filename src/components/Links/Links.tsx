import styles from './Links.module.css';
import Link from './Link';
interface LinkInterface {
  type: string;
  name: string;
  url: string;
}

interface Links extends Array<LinkInterface>{}
interface LinksProp {
  links: Links
}

const Links = ({ links }: LinksProp) => (
  <div className={styles.links}>
    { links.map((link: LinkInterface, key: number) => (
      <Link key={`link_${key}`} link={link} />
    )) }
  </div>
)

export default Links;