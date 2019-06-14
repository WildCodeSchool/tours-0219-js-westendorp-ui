export class Article {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public date: Date,
    public author: string,
    public section: string,
    public media: string,
  ) {}
}
