var initialState = [
    {
        id         : 1,
        name       : 'Iphone 7 plus',
        image      : 'https://cdn.tgdd.vn/Products/Images/42/93709/iphone-7-plus-red-128gb-400x460.png',
        description: 'sản phẩm của apple',
        price      : 500,
        inventory  : 10,
        rating     : 4
    },
    {
        id         : 2,
        name       : 'Samsung Galaxy S7',
        image      : 'https://cdn.tgdd.vn/Products/Images/42/74113/samsung-galaxy-s7-2-400x460.png',
        description: 'sản phẩm của Samsung',
        price      : 400,
        inventory  : 15,
        rating     : 3
    },
    {
        id         : 3,
        name       : 'Oppo F1s',
        image      : 'https://cdn.tgdd.vn/Products/Images/42/81592/oppo-f1s-hero-400x460-400x460.png',
        description: 'sản phẩm của Oppo',
        price      : 450,
        inventory  : 5,
        rating     : 5
    }
];
const products =(state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;