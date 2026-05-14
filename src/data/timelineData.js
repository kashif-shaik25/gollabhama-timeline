import weaverHands from '../assets/images/hands-weaving-on-a-loom-in-textile-workshop.png'
import gollabhamaRed from '../assets/images/gollabhama-saree1.png'
import gollabhamaBlue from '../assets/images/blue-yellow-gollabhama-cotton-saree-270769.png'
import weaverWoman from '../assets/images/indian-woman-weaving-textiles-in-rajasthan.png'
import elderlyWeaver from '../assets/images/elderly-person-weaving-a-colorful-textile-with-skill-and-care-in-a-cozy-setting-free-photo.png'

export const timelineData = [
  {
    id: 'node-01',
    phase: 'topic',
    year: '01',
    title: 'The Gollabhama Tradition',
    subtitle: 'A heritage craft under threat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    imageSrc: gollabhamaRed,
    mediaCaption: 'A traditional Gollabhama cotton saree featuring the iconic dancing-woman motif.',
    tags: ['Heritage', 'Telangana', 'Handloom'],
  },
  {
    id: 'node-02',
    phase: 'issues',
    year: '02',
    title: 'The Invisible Artisan',
    subtitle: 'Why weavers remain unseen',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    imageSrc: weaverWoman,
    mediaCaption: 'A master weaver works her loom — her craft invisible to the modern marketplace.',
    tags: ['Empathy Map', 'Research', 'Problem Space'],
  },
  {
    id: 'node-03',
    phase: 'issues',
    year: '03',
    title: 'Broken Supply Chains',
    subtitle: 'How middlemen extract value',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.',
    imageSrc: weaverHands,
    mediaCaption: 'Every thread pulled is a negotiation the weaver never wins.',
    tags: ['Systems Map', 'Market Failure', 'Exploitation'],
  },
  {
    id: 'node-04',
    phase: 'issues',
    year: '04',
    title: 'Fading Knowledge',
    subtitle: "A generation that won't pass it on",
    description: "Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.",
    imageSrc: elderlyWeaver,
    mediaCaption: 'Elderly weavers hold centuries of pattern memory. When they go, the patterns go.',
    tags: ['Insight', 'Cultural Loss', 'Interview Findings'],
  },
  {
    id: 'node-05',
    phase: 'solution',
    year: '05',
    title: 'The Gollabhama Digital Atelier',
    subtitle: 'Connecting craft to conscious consumers',
    description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    imageSrc: gollabhamaBlue,
    mediaCaption: 'Blue & gold Gollabhama — the future of the craft, reimagined for global markets.',
    tags: ['Prototype', 'Digital Platform', 'Fair Trade'],
  },
]
