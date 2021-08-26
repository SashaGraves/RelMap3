import {IPerson, IGroup} from 'types/Person';

export const characters: IPerson[] = [
  {
    id: '123',
    name: 'Frodo',
    avatar: '',
    tags: {
      current: ['halfling'],
      previous: ['Shire'],
    },
    relation: [
      {
        recipient: {
          name: 'Sam',
        },
        relationship: {
          to: 'Friendship',
        },
      },
      {
        recipient: {
          name: 'Tom Bombadil',
          id: '124',
        },
        relationship: {
          to: 'fellowship',
        },
      },
    ],
    description: '',
    groupIdmember: ['1234'],
  },
  {
    id: '124',
    name: 'Tom Bombadil',
    avatar: '',
    tags: {
      current: ['mage'],
    },
    relation: [
      {
        recipient: {
          name: 'Frodo',
          id: '123',
        },
        relationship: {
          from: 'fellowship',
        },
      },
      {
        recipient: {
          name: 'party',
        },
        relationship: {
          to: 'fellowship',
        },
      },
      {
        recipient: {
          name: 'Goldberry',
        },
        relationship: {
          to: 'love',
        },
      },
    ],
    description: 'Merry, always sings',
  },
  {
    id: '125',
    name: 'Strider',
    avatar: '',
    tags: {
      current: ['human'],
    },
    relation: [
      {
        recipient: {
          name: 'party',
        },
        relationship: {
          to: 'helps',
        },
      },
      {
        recipient: {
          name: 'Gandalf',
        },
        relationship: {
          from: 'trust',
        },
      },
    ],
    description: 'Gray-haired, walked everywhere',
  },
];

const group: IGroup = {
  groupId: '1234',
  membersId: ['123'],
  name: 'Four Hobbits',
  avatar: '',
  tags: {
    current: [],
    previous: [],
  },
  relation: [
    {
      recipient: {
        name: 'Strider',
        id: '125',
      },
      relationship: {
        from: 'helps',
      },
    },
    {
      recipient: {
        name: 'Tom Bombadil',
        id: '124',
      },
      relationship: {
        from: 'fellowship',
      },
    },
  ],
  description: 'In our way to Rivendell',
};
