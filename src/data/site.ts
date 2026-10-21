export const site = {
  name: 'Norwest Contracting & Rail',
  shortName: 'NWCR',
  tagline: 'Bridging gaps, making tracks',
  phone: '0438 039 433',
  phoneHref: 'tel:+61438039433',
  email: 'admin@nwcr.com.au',
  abn: 'ABN 63 161 195 777 · ACN 161 195 777',
  locations: 'Port Hedland · Karratha · Perth',
  // Replace this PDF with the new capability statement (keep the same file name)
  capabilityStatement: '/docs/nwcr-capability-statement.pdf',
  // Paste the full profile URLs here to show the icons in the footer
  social: {
    linkedin: '',
    facebook: '',
  },
  // Optional form handler URL (e.g. Formspree/Web3Forms). Leave empty to send enquiries via the visitor's email app.
  formEndpoint: '',
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Rail', href: '/rail/' },
  {
    label: 'Labour & Equipment Hire',
    href: '/rail-labour-equipment-hire/',
    children: [
      { label: 'Rail Labour & Equipment Hire', href: '/rail-labour-equipment-hire/' },
      { label: 'General Equipment Hire', href: '/general-equipment-hire/' },
    ],
  },
  { label: 'Civil Contracting', href: '/civil-contracting/' },
  { label: 'Indigenous Tribute', href: '/indigenous-tribute/' },
  { label: 'Contact Us', href: '/contact-us/' },
];

export const team = [
  { name: 'Fiona', role: 'Director', email: 'fiona@nwcr.com.au', photo: 'fiona' },
  { name: 'Stevie', role: 'Operations Superintendent', email: 'stevie@nwcr.com.au', photo: 'stevie' },
  { name: 'Zoe Garland', role: 'Administration & Accounts Manager', email: 'zoe@nwcr.com.au', phone: '0434 444 169', photo: 'zoe' },
] as const;

export const clients = [
  { name: 'Rio Tinto', logo: '/clients/rio-tinto.png' },
  { name: 'BHP', logo: '/clients/bhp.png' },
  { name: 'Fortescue', logo: '/clients/fortescue.png' },
  { name: 'Roy Hill', logo: '/clients/roy-hill.png', large: true },
  { name: 'Woodside', logo: '/clients/woodside.svg', large: true },
  { name: 'Chevron', logo: '/clients/chevron.svg', large: true },
  { name: 'Main Roads Western Australia', logo: '/clients/main-roads.png' },
  { name: 'Monadelphous', logo: '/clients/monadelphous.png' },
  { name: 'Downer', logo: '/clients/downer.png' },
];
