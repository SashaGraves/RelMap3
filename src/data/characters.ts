import {IPerson} from 'types/Person';

export const characters: IPerson[] = [
  {
    id: '123',
    name: 'Frodo',
    avatar: '',
    tags: ['halfling'],
    previousTags: ['Shire'],
    relationships: [
      {to: {name: 'Sam'}, rel: 'Friendship'},
      {to: {name: 'Tom Bombadil', id: '124'}, rel: 'fellowship'},
    ],
    description: '',
  },
  {
    id: '124',
    name: 'Tom Bombadil',
    avatar: '',
    tags: ['mage'],
    relationships: [
      {to: {name: 'party'}, rel: 'fellowship'},
      {to: {name: 'Goldberry'}, rel: 'love'},
    ],
    description: 'Merry, always sings',
  },
  {
    id: '125',
    name: 'Strider',
    avatar: '',
    tags: ['human'],
    relationships: [
      {to: {name: 'party'}, rel: 'helps'},
      {from: {name: 'Gandalf'}, rel: 'trust'},
    ],
    description: 'Gray-haired, walked everywhere',
  },
];
