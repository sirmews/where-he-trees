interface LinkInterface2 {
  name: string;
  url?: string;
}
interface LinkClassicProp {
  link: LinkInterface2
}

const LinkClassic = ({ link }: LinkClassicProp) => (
  <div
    style={{
      backgroundColor: '#39E09B',
      padding: '1rem 1.5rem'
    }}
  >
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      {link.name}
    </a>
  </div>
)

export default LinkClassic;