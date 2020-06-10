require('dotenv').config()
const {REACT_APP_API_URL} = process.env;

export const signup = (user) => {
    return fetch(`${REACT_APP_API_URL}/signup`, {
        method: "POST", 
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err=>{
        console.log(user);
        console.log(err);
    });
};
 
export const signin = (user) => {
    return fetch(`${REACT_APP_API_URL}/signin`, {
        method: "POST", 
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err=>{
        console.log(user);
        console.log(err);
    });
};


export const authenticate = (data, next) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data));
        console.log(next);
        next();
    }
}


export const signout = (next) => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt');
        next();
        return fetch(`${REACT_APP_API_URL}/signout`, {
            mehtod: 'GET'
        })
        .then(response => {
            console.log('signout', response);
        })
        .catch(err => console.log(err));
    }
}

export const isAuthenticated = () => {
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'));
    } else{
        return false;
    }
}

