export interface IPerson {
  id: string;
  name: string;
  avatar: string;
  tags: string[];
  previousTags?: string[];
  relationships: IRelationShip[];
  description: string;
}

interface IRelationShip {
  to?: string;
  from?: string;
  rel: string;
}
