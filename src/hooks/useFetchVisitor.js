import  {useState,useEffect} from 'react';
import {getVisitor} from "../helpers/getVisitor";


export  const useFetchVisitor = (data) => {

    const [state , setState] = useState({
        data:{}
    });

    useEffect(() => {

            getVisitor().then( visitor => {
                setState({
                    data: visitor
                })

            })


    }, [ data ])

    return state;
}
