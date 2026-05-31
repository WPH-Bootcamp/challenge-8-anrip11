import type { IndustryItem } from '../types/index';

import industryImg1 from '../assets/Industry-Image1.png';
import industryImg2 from '../assets/Industry-Image2.png';
import industryImg3 from '../assets/Industry-Image3.png';

export const industriesData: IndustryItem[] = [
  {
    id: 'fintech',
    name: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: industryImg1,
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: industryImg2,
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: industryImg3,
  },
];
