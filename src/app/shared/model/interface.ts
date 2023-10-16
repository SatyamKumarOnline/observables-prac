export interface  Item {
    title: String;
    description: String;
    url: String;
}

export interface ItemList {
    total : number;
    data: Item[];
}
