import type { TestimonialItem } from '../types/index';

import starIcon from '../assets/star-filled.png';
import quoteIcon from '../assets/quote-filled.png';
import avatar1 from '../assets/Ellipse1.png';
import avatar2 from '../assets/Ellipse2.png';
import avatar3 from '../assets/Ellipse3.png';

export { starIcon, quoteIcon };
export const initialTestimonials: TestimonialItem[] = [
  {
    id: 3,
    name: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    avatar: avatar3,
    quote:
      '“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”',
  },
  {
    id: 1,
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    avatar: avatar1,
    quote:
      '“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”',
  },
  {
    id: 2,
    name: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    avatar: avatar2,
    quote:
      '“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”',
  },
];
