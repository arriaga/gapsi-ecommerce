import React, {useState} from 'react';
import SearchProducts from "./SearchProducts";
import ProductGrid from "./ProductGrid";


const Products = () => {

    const [products, setProducts] = useState([]);
    return (
        <>
            <h2> Busqueda de productos</h2>
            <SearchProducts setProduct={setProducts}/>
            <hr/>
            <ol>
                {products.map(product =>
                    (

                        <ProductGrid  key={product.id}
                                      product={product}/>
                    )

                )}
            </ol>

        </>
    );
}


export default Products;

