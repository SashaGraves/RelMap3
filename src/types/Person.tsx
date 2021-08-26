export interface IPerson {
  id: string;
  name: string;
  avatar: string;
  tags: TagList;
  relation: IRelation[];
  description: string;
  groupIdmember?: string[];
}

export interface IRelation {
  recipient: IRecipientInfo;
  relationship: {
    to?: string;
    from?: string;
  };
}

interface IRecipientInfo {
  name: string;
  id?: string;
  groupId?: string;
}

interface TagList {
  current?: string[];
  previous?: string[];
}

export interface IGroup {
  groupId: string;
  membersId: string[];
  name: string;
  avatar: string;
  tags: TagList;
  relation: IRelation[];
  description: string;
}
