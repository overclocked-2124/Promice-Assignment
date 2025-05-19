function buyChocolates(chocolatesToBuy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const availableChocolates = Math.floor(Math.random() * 21); 
            console.log(`Server: Available chocolates: ${availableChocolates}`);
            if (availableChocolates >= chocolatesToBuy) {
                resolve(`Successfully purchased ${chocolatesToBuy} chocolates.`);
            } else {
                reject(`Sorry, only ${availableChocolates} chocolates available. Not enough to buy ${chocolatesToBuy}.`);
            }
        }, 4000);
    });
}
buyChocolates(5)
    .then((message) => {
        console.log(".then()/catch(): Request Succeeded!");
        console.log(message);
        console.log("I like chocolates");
    })
    .catch((error) => {
        console.log(".then()/catch(): Request Failed!");
        console.log(error);
        console.log("I don't like chocolates");
    });



async function handlePurchase(chocolatesToBuy) {
    console.log(`\n--- Initiating purchase for ${chocolatesToBuy} chocolates using async/await ---`);
    try {
        const result = await buyChocolates(chocolatesToBuy);
        console.log("async/await: Request Succeeded!");
        console.log(result);
        console.log("I like chocolates");
    } catch (error) {
        console.log("async/await: Request Failed!");
        console.log(error);
        console.log("I don't like chocolates");
    }
}

setTimeout(() => {
    handlePurchase(10);
}, 5000); 



setTimeout(() => {
    handlePurchase(1);
}, 10000);
