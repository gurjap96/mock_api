const fetch = require("node-fetch");
fetch("https://movies-api-5s16.onrender.com/movies")
.then((res)=> {
    return res.json();
})
.then((data)=> {
    let i = 1;
    let newData = data.map((el) => {
        let randomNumber = (Math.random() * 8.9) + 1.0;
        el.rating = randomNumber;
        el.id = i;
        i++;
        return el
    }
    )
    console.log(newData);
})
.catch((err)=>{
    console.log(err);
})