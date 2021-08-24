import {ITag} from 'types/Tag';

export const tags: ITag[] = [
  {
    name: 'halfling',
    personIdArray: [{id: '123', name: 'Frodo'}],
    previousIdArray: [],
  },
  {
    name: 'Shire',
    personIdArray: [],
    previousIdArray: [{id: '123', name: 'Frodo'}],
  },
  {
    name: 'mage',
    personIdArray: [{id: '124', name: 'Tom Bombadil'}],
    previousIdArray: [],
  },
  {
    name: 'human',
    personIdArray: [{id: '125', name: 'Strider'}],
    previousIdArray: [],
  },
];
