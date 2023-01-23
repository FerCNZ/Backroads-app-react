import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/arg1.jpeg';
import tour6 from './images/arg2.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'Tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
  { id: 4, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-wallet fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2023',
    name: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    place: 'china',
    days: '6 days',
    price: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: 'october 1th, 2023',
    name: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    place: 'indonesiaa',
    days: '11 days',
    price: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: 'september 15th, 2023',
    name: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    place: 'hong kong',
    days: '8 days',
    price: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: 'december 5th, 2023',
    name: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    place: 'kenya',
    days: '20 days',
    price: 3300,
  },
  {
    id: 5,
    img: tour5,
    date: 'december 5th, 2023',
    name: 'Argentina highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    place: 'Argentina',
    days: '20 days',
    price: 3900,
  },
  {
    id: 6,
    img: tour6,
    date: 'december 6th, 2023',
    name: 'Argentina 2 highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    place: 'Argentina',
    days: '30 days',
    price: 5900,
  },
];
