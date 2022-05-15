export const productosData = [
    {
        id: "1",
        categoryId : "celulares",
        title: "nombre producto 1",
        description: "descripcion del producto",
        price: "500",
        stock: "5",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_730981-MLA48800008115_012022-O.webp"
    },
    {
        id: "2",
        categoryId: "celulares",
        title: "nombre producto 2",
        description: "descripcion del producto",
        price: "500",
        stock: "10",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_838903-MLA46771080799_072021-O.webp"
    },
    {
        id: "3",
        categoryId : "tablets",
        title: "nombre producto 3",
        description: "descripcion del producto",
        price: "500",
        stock: "15",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_729840-MLA42520615651_072020-O.webp"
    },
    {
        id: "4",
        categoryId: "tablets",
        title: "nombre producto 4",
        description: "descripcion del producto",
        price: "500",
        stock: "20",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_765874-MLA47146197629_082021-O.webp"
    }
]

const task = new Promise((resp) => {
    resp(productosData)
},2000)

export const getItem = () => {
    return task
}