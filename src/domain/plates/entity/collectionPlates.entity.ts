import { Plates } from "../object-value/plates";

class CollectionPlates {
  private _collection: Plates[]

  constructor() {
    this._collection = []
  }

  get collection(): Plates[] {
    return this._collection
  }

  setPlatesCollection(plate: Plates) {
    this._collection.push(plate)
  }
}

export { CollectionPlates }