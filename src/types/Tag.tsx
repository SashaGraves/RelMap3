export interface ITag {
  name: string;
  personIdArray: PersonsWithTag[];
  previousIdArray: PersonsWithTag[];
}

export interface PersonsWithTag {
  id: string;
  name: string;
}

export interface ITagList {
  tags: Set<string>;
}
