import React, {useState} from 'react';
import PropTypes from 'prop-types';


const SearchProducts = ( { setProduct }) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setProduct(cats => [inputValue,...cats]);
            setInputValue('');
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />

        </form>

    );
}


SearchProducts.propTypes = {

    setProduct: PropTypes.func.isRequired

}

export default SearchProducts;

