export const site = {
  name: 'Natalia Iudina',
  title: 'Natalia Iudina — Personal Website',
  tagline: 'Software developer building thoughtful digital experiences.',
  description:
    'Personal website of Natalia Iudina — skills and contact information.',
  url: 'https://nataliaiudina.dev',
  email: 'iudina.dev@gmail.com',
  social: {
    github: 'https://github.com/natalia-yudina',
    linkedin: 'https://www.linkedin.com/in/natalia-iudina/',
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
