import {IPerson} from 'types/Person';

export const characters: IPerson[] = [
  {
    id: '123',
    name: 'Frodo',
    avatar: '',
    tags: ['halfling'],
    previousTags: ['Shire'],
    relationships: [
      {to: 'Sam', rel: 'Friendship'},
      {to: 'Tom Bombadil', rel: 'fellowship'},
    ],
    description: '',
  },
  {
    id: '124',
    name: 'Tom Bombadil',
    avatar: '',
    tags: ['mage'],
    relationships: [
      {to: 'company', rel: 'fellowship'},
      {to: 'Goldberry', rel: 'love'},
    ],
    description: 'Merry, always sings',
  },
  {
    id: '125',
    name: 'Strider',
    avatar: '',
    tags: ['human'],
    relationships: [
      {to: 'company', rel: 'helps'},
      {from: 'Gandalf', rel: 'trust'},
    ],
    description: 'Gray-haired, walked everywhere',
  },
];
