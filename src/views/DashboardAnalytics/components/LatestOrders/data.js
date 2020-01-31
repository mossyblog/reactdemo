import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: 'DEV1042',
    items: 7,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Ekaterina Tankova',
      email: 'ekaterina@demo.io'
    },
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'DEV1041',
    items: 8,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Cao Yu',
      email: 'cao.yu@demo.io'
    },
    status: 'complete'
  },
  {
    id: uuid(),
    ref: 'DEV1040',
    items: 4,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Alexa Richardson',
      email: 'alexa.richardson@demo.io'
    },
    status: 'rejected'
  },
  {
    id: uuid(),
    ref: 'DEV1039',
    items: 1,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Anje Keizer',
      email: 'anje.keiser@demo.io'
    },
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'DEV1038',
    items: 5,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Clarke Gillebert',
      email: 'clarke.gillebert@demo.io'
    },
    status: 'complete'
  },
  {
    id: uuid(),
    ref: 'DEV1037',
    items: 2,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Merrile Burgett',
      email: 'merrile.burgett@demo.io'
    },
    status: 'complete'
  }
];
