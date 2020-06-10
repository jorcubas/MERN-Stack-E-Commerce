require('dotenv').config()
const {REACT_APP_API_URL} = process.env;

export const createCategory = (userId, token, category) => {
    return fetch(`${REACT_APP_API_URL}/category/create/${userId}`, {
        method: "POST", 
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json();
    })
    .catch(err=>{
        console.log(category);
        console.log(err);
    });
};


export const createProduct = (userId, token, product) => {
    return fetch(`${REACT_APP_API_URL}/product/create/${userId}`, {
        method: "POST", 
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(response => {
        return response.json();
    })
    .catch(err=>{
        console.log(product);
        console.log(err);
    });
};


export const getCategories = () => {
    return fetch(`${REACT_APP_API_URL}/categories`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));

}