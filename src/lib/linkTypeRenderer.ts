import LinkClassic from '../components/Links/LinkClassic';
import LinkAudio from '../components/Links/LinkAudio';
import LinkEvents from '../components/Links/LinkEvents';

export const linkTypeRenderer = {
  'CLASSIC': LinkClassic,
  'AUDIO': LinkAudio,
  'EVENTS': LinkEvents,
};