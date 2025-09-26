export namespace UI{


    export namespace SubUI{
        export class SubInventory{}
    }

    export class Inventory{

        private _items:string[] = [];

        public addItem( item:string ){
            this._items.push( item );
        }

        public removeItem( item:string ){
            // find and remove item
            const index = this._items.indexOf( item );
            if( index > -1 ){
                this._items.splice( index, 1 );
            }
        }

        public get items():string[]{
            return this._items;
        }
    }
}