import React from 'react';
import {useFetchProducts} from "../hooks/useFetchProducts";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 300,
    },
});

const ProductGrid = (product) => {

    const classes = useStyles();

    const {data, loading} = useFetchProducts(product.product);


    return (
        <>
            <h3> {product.product.toUpperCase()}</h3>
            <div className="card-grid">
                {
                    data.map(img => (

                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={img.url}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {img.name} - {img.sku}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    ${img.price}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {img.description}
                                </Typography>
                            </CardContent>
                        </Card>

                    ))
                }
            </div>
        </>
    );
}

export default ProductGrid;
