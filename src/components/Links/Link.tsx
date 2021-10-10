import { linkTypeRenderer } from '../../lib/linkTypeRenderer';

interface LinkInterface {
  type: string;
  name: string;
  url: string;
}

type LinkBlock = keyof typeof linkTypeRenderer;

interface LinkProp {
  link: LinkInterface
}

const Link = ({ link }: LinkProp) => {

  const type: string = link.type;
  const blockType: LinkBlock = type as LinkBlock;

  if (typeof linkTypeRenderer[blockType] !== undefined) {
    const Component = linkTypeRenderer[blockType];
    
    return <Component link={link}/>
  }
  return null;
}

export default Link;