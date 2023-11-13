export class CreateArticleDto {
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly tagList: string[];// Change from string[] to string
}
