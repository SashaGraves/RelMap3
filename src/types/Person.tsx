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
  to?: IPersonInfo;
  from?: IPersonInfo;
  rel: string;
}

interface IPersonInfo {
  name: string;
  id?: string;
}
