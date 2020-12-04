export const getProducts = async ( product , pagination) => {

    console.log("Obteniendo Productos");
    console.log(product);
    console.log(pagination);
    const url = `https://node-red-nxdup.mybluemix.net/productos/${ product }/${ pagination }`

    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.products.map(img => {
        return {
            id: img.ID,
            type: img.TYPE,
            sku: img.SKU,
            url: img.IMAGE,
            description: img.DESCRIPTION,
            name: img.NAME ,
            price: img.PRICE
        }
    })

    return gifs;
}
