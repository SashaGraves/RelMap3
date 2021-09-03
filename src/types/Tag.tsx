export interface ITag {
  name: string;
  personIdArray: PersonTags[];
  previousIdArray: PersonTags[];
}

export interface PersonTags {
  id: string;
  name: string;
}

export interface ITagList {
  tags: Set<string>;
}
