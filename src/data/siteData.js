import {
  FaComments,
  FaGamepad,
  FaMobileAlt,
  FaPuzzlePiece,
  FaRocket,
  FaUsers,
} from 'react-icons/fa'

export const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Hire Me', href: '#why-hire-me' },
  { label: 'Contact', href: '#contact' },
]

export const siteData = {
  brand: {
    name: 'Shiv Kumar Saini',
    role: 'Freelance Multiplayer & Mobile Game Developer',
    initials: 'SK',
  },
  hero: {
    eyebrow: 'Upwork-ready freelance partner for mobile and multiplayer game projects',
    headline:
      'I build multiplayer & mobile games that keep players engaged and generate revenue.',
    description:
      'I help studios, founders, and agencies ship polished game experiences across Android, iOS, and web with reliable remote communication, clean implementation, and gameplay systems built for retention.',
    primaryCta: { label: 'Hire Me', href: '#contact' },
    secondaryCta: { label: 'View Projects', href: '#projects' },
    tertiaryCta: {
      label: 'Download Resume',
      href: 'https://drive.google.com/file/d/1yADRFqPnDhBTaszUNKQ73WqKestmeaVv/view',
    },
    image: '/p2.jpeg',
    availability: 'Available for select freelance projects',
    badges: ['Realtime multiplayer', 'Android + iOS + Web', 'Weekly delivery updates'],
    stats: [
      { value: '3+', label: 'Years shipping game features' },
      { value: '2', label: 'Featured case studies below' },
      { value: 'Remote', label: 'Built for freelance collaboration' },
    ],
  },
  services: [
    {
      icon: FaUsers,
      title: 'Multiplayer Game Development',
      description:
        'Realtime systems, synced gameplay, and social features for projects where responsiveness and stability matter.',
      deliverables: [
        'Room logic and gameplay synchronization',
        'Social loops like chat and competition',
        'Feature delivery for live products',
      ],
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Game Production',
      description:
        'Cross-platform implementation for Android and iOS with an emphasis on smooth gameplay and practical UI flows.',
      deliverables: [
        'Unity, Cocos Creator, and Cocos2d-x workflows',
        'Performance-aware gameplay and UI polish',
        'Player-focused UX for casual and social titles',
      ],
    },
    {
      icon: FaPuzzlePiece,
      title: 'Feature Sprints for Live Products',
      description:
        'Jump into an existing codebase, unblock delivery, and ship scoped features without losing momentum.',
      deliverables: [
        'Codebase cleanup and bug fixing',
        'Focused sprint execution for active teams',
        'Readable handoff for founders or in-house teams',
      ],
    },
  ],
  projects: [
    {
      title: 'LudoTalks',
      category: 'Realtime multiplayer board game',
      problem:
        'The product needed a social multiplayer Ludo experience with live gameplay, group interaction, and supporting flows around wallet and KYC features.',
      solution:
        'Built gameplay features and supporting product experiences around multiplayer rooms, group circles, social interactions, and connected user flows.',
      techStack: [
        'Cocos Creator',
        'TypeScript',
        'JavaScript',
        'SmartFox',
        'Java',
        'Android',
        'iOS',
      ],
      role: 'Multiplayer gameplay developer',
      outcome:
        'Delivered a more connected board game experience that blends competition, community, and product functionality.',
      image: '/ludo 24 (1)EEEE 1.png',
      liveUrl: 'https://ludotalks.in/',
      previewLabel: 'Gameplay video preview placeholder',
    },
    {
      title: 'Poker Date',
      category: 'Game + social product',
      problem:
        'The app needed stronger performance and a cleaner user experience to support both gameplay and social interactions without friction.',
      solution:
        'Improved the app flow through UI and UX refinement while optimizing the overall experience for smoother navigation and play.',
      techStack: ['Cocos2d-x', 'C++', 'Firebase', 'Java', 'Android', 'iOS'],
      role: 'Performance optimization and UI/UX revamp',
      outcome:
        'Improved usability for a hybrid product where game feel and interface clarity both influence retention.',
      image: '/pokerImage.webp',
      liveUrl: 'https://www.pokerdate.net/',
      previewLabel: 'Product teaser placeholder',
    },
  ],
  whyHireMe: [
    {
      icon: FaRocket,
      title: 'Built for shipped products',
      description:
        'I focus on work that needs to survive real users, product constraints, and the pace of a live team.',
    },
    {
      icon: FaGamepad,
      title: 'Comfortable with multiplayer complexity',
      description:
        'Realtime game logic and synchronized systems are already part of my day-to-day work, so I can contribute quickly.',
    },
    {
      icon: FaComments,
      title: 'Clear freelance communication',
      description:
        'You get practical updates, sensible estimates, and clean handoff-friendly code without extra management overhead.',
    },
  ],
  proofStrip: [
    'Realtime multiplayer experience',
    'Cross-platform mobile delivery',
    'Clean handoff for remote teams',
  ],
  contact: {
    email: 'shivksaini0120@gmail.com',
    phone: '+91 9461216635',
    location: 'Jaipur, Rajasthan, India',
    linkedin: 'https://www.linkedin.com/in/shiv-k-saini',
    github: 'https://github.com/shivksaini',
    twitter: 'https://x.com/ShivKum09924768',
    instagram: 'https://www.instagram.com/i_am_shiv099/',
    resumeUrl: 'https://drive.google.com/file/d/1yADRFqPnDhBTaszUNKQ73WqKestmeaVv/view',
  },
  footerMessage:
    'Freelance game development for Upwork clients, founders, agencies, and studios that need a dependable technical partner.',
}
