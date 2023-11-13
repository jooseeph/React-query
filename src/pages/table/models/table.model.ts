export default class TableModel {
  public id: number | null = null;
  public body: string | null = null;
  public title: string | null = null;
  public userId: number | null = null;

  constructor(item: any) {
    this._setId(item);
    this._setBody(item);
    this._setTitle(item);
    this._setUserId(item);
  }

  private _setId({ id }: any) {
    this.id = id;
  }

  _setBody({ body }: any) {
    this.body = body;
  }

  _setTitle({ title }: any) {
    this.title = title;
  }

  _setUserId({ userId }: any) {
    this.userId = userId;
  }
}
