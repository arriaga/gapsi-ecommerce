import  {useState,useEffect} from 'react';
import {getProducts} from "../helpers/getProducts";


export  const useFetchProducts = (product) => {


    const [state , setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
      
            getProducts(product, 1).then( product => {
                setState({
                    data: product,
                    loading: false
                })

            })


    }, [ product ])

    return state;
}
