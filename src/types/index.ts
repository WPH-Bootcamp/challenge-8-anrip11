/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
// export interface ButtonProps {
//   variant?: ButtonVariant;
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }

// ==========================================
// Section Data Types
// ==========================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */
export interface NavItem {
  label: string;
  targetId: string;
}

export interface HeroData {
  titleNormalBefore?: string;
  titleHighlight: string;
  titleNormalAfter?: string;
  description: string;
  imageDark: string;
  imageLight: string;
}

export interface AboutItem {
  number: string;
  label: string;
}

export type CompanyLogoItem = string;

export interface ProcessStep {
  title: string;
  subtitle: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface ProjectsItem {
  image: string;
  category: string;
  title: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactItem {
  id: string;
  label: string;
}

// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
