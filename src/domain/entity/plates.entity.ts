class Plates {
  private _name: string;
  private _category: string
  private _categoryReference: string | null
  private _isRead: boolean

  constructor(name: string, category: string, categoryReference: string | null = null, isRead: boolean = false ){
    this._name = name;
    this._category = category;
    this._categoryReference = categoryReference
    this._isRead = isRead
  }


  get name(): string{
    return this._name
  }

  get category(): string{
    return this._category
  }

  get categoryReference(): string | null{
    return this._categoryReference
  }

  get isRead(): boolean {
    return this._isRead
  }

  setIsRead(read: boolean) {
    this._isRead = read
  }
}

export { Plates }