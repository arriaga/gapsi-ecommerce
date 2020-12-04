import  {useState,useEffect} from 'react';
import {getProducts} from "../helpers/getProducts";


export  const useFetchProducts = (product) => {


    console.log("useFetchProducts");
    console.log(product);

    const [state , setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
            console.log("Entro");
            getProducts(product, 1).then( product => {
                setState({
                    data: product,
                    loading: false
                })

            })


    }, [ product ])

    return state;
}
