export class Inventory<U,T> {
  private _items: Map<U,T> = new Map<U,T>();

  public addItem(key:U, item: T) {
    this._items.set(key, item);
  }

  public removeItem(key:U) {
    this._items.delete(key);
  }

  public getIemByKey<I>(key:U): I | null {
    const item = this._items.get(key) || null;
    if( item == null ) return null;

    return item as unknown as I;
  }

  public get items(): T[] {
    return Array.from( this._items.values() ) as T[];
  }
}
