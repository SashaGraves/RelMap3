import {ITag} from './Tag';

export interface IPerson {
  id: string;
  name: string;
  avatar: string;
  tags: string[];
  previousTags?: string[];
  relationships: IRelation[];
  description: string;
}

export interface IRelation {
  to?: IPersonInfo;
  from?: IPersonInfo;
  rel: string;
}

interface IPersonInfo {
  name: string;
  id?: string;
}
