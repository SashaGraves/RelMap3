export interface ITag {
  name: string;
  personIdArray: PersonTags[];
  previousIdArray: PersonTags[];
}

export interface PersonTags {
  id: string;
  name: string;
}
