const myPromise = new Promise((resolve, reject) => {
    let age =19;
    if(a >= 18){
        resolve("You are eligible to vote.");
    } else {
        reject("You are not eligible to vote.");
    }
    const checkvotealigibility = () => {
        try {
            myPromise.then((message) => {
                console.log(message);}
                getProductsdata();