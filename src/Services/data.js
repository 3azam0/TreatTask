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

export {bases, toppings, coatings};
