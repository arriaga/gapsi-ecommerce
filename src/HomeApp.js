import React, {useState} from 'react';
import Header from "./components/Header";
import {Button, Grid} from "@material-ui/core";
import {useFetchVisitor} from "./hooks/useFetchVisitor";
import {Link ,  NavLink } from "react-router-dom";
import {AppRouter} from "./routers/AppRouter";


const HomeApp =  () => {


    const {data} = useFetchVisitor('');


    return (
        <>
            <Header />
            <Grid container >
                <Grid container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justify="center"
                      xs={12} >
                    <br/>
                    <img  src={process.env.PUBLIC_URL + 'image.jpg'}/>
                    <h1> {data.version} </h1>
                    <h1> {data.welcome} </h1>
                    <Button variant="contained" color="primary" href="/buscarProductos">
                        Iniciar
                    </Button>


                </Grid>
            </Grid>

        </>
    );
}

export default HomeApp;
