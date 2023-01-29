import { Plates } from "plates";

class CollectionPlates {
  private _collection: Plates[]

  constructor() {
    this._collection = []
  }

  get collection(): Plates[] {
    return this._collection
  }

  setPlatesColelction(plate: Plates) {
    this._collection.push(plate)
  }
}

export { CollectionPlates }