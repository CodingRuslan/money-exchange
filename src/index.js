module.exports = function makeExchange(currency) {
    let d = {0:50, 1:25, 2:10, 3:5, 4:1};
    
    let res = {};//makeExchange(9999), {"H":199,"Q":1,"D":2,"P":4}
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else {
        for (let i = 0; i < 5; i++) {
            let count = 0;
            if (currency/d[i] >= 1 && i === 0) {
                count =  Math.floor(currency/d[i]);
                currency -= count * d[i];
                res["H"] = count;
            } else if(currency/d[i] >= 1 && i === 1){
                count = Math.floor(currency/d[i]);
                currency -= count * d[i];
                res["Q"] = count;
            } else if (currency/d[i] >= 1 && i === 2) {
                count = Math.floor(currency/d[i]);
                currency -= count * d[i];
                res["D"] = count;
            } else if (currency/d[i] >= 1 && i === 3) {
                count = Math.floor(currency/d[i]);
                currency -= count * d[i];
                res["N"] = count;
            } else if (currency/d[i] >= 1 && i === 4) {
                count = Math.floor(currency/d[i]);
                currency -= count * d[i];
                res["P"] = count;
            }
        }return res;
    }
    
}
