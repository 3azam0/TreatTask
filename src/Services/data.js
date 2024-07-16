import Images from './Images';

const bases = [
  {
    id: 1,
    name: 'Vanilla',
    img: Images.vanilla,
  },
  {
    id: 2,
    name: 'Caramel',
    img: Images.caramel,
  },
  {
    id: 3,
    name: 'Chocolate',
    img: Images.chocolate,
  },
];

const coatings = [
  {
    id: 1,
    name: 'pistachio',
    img: Images.pistachio,
  },
  {
    id: 2,
    name: 'Hazelnut',
    img: Images.Hazelnut,
  },
  {
    id: 3,
    name: 'white chocolate',
    img: Images.chocolate,
  },
  {
    id: 2,
    name: 'milk chocolate',
    img: Images.caramel,
  },
  {
    id: 3,
    name: 'pecan',
    img: Images.chocolate,
  },
];
const toppings = [
  {
    id: 1,
    name: 'Wafer',
    img: Images.wafer,
  },
  {
    id: 2,
    name: 'Crunched Cookies',
    img: Images.caramel,
  },
  {
    id: 3,
    name: 'Crunched lotus',
    img: Images.chocolate,
  },
];

const list = [
  {
    id: 1,
    h1: 'exclusive',
    h2: 'offers',
    h3: 'get your deals now',
    img: Images.mega,
    img2: Images.percentage,
    buttonText: 'order now',
    backgroundColor: '#E6D1B8',
    buttonBackgroundColor: '#4B2713',
    buttonTextColor: '#FEFEFE',
  },
  {
    id: 2,

    h1: 'Rewards',
    h2: 'and earn',
    h3: 'Get your reward now',
    img: Images.mega2,
    img2: Images.gift,
    buttonText: 'Get Rewards',
    backgroundColor: '#B8DCDE',
    buttonBackgroundColor: '#96CBCD',
    buttonTextColor: '#0B3C3E',
  },
  {
    id: 3,

    h1: 'refer',
    h2: 'a friend',
    h3: 'And get 100 points',
    img: Images.mega2,
    img2: Images.gift,
    buttonText: 'Refer friend',
    backgroundColor: '#BDB6B4',
    buttonBackgroundColor: '#4B2713',
    buttonTextColor: '#FEFEFE',
  },
];
export {bases, list, toppings, coatings};
