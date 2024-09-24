const fakeRequestPromise = (url) =>{
    return  new Promise((resolve, reject) =>{
        const delay = Math.floor(Math.random() *(4500)) + 500;
        setTimeout(() =>{
            if(delay > 4000){
                reject("Connection Issues");
            }else{
                resolve(`Here is your fake Data ${url}`)
            }
        },delay)
    })
}

// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then((data) =>{
//         console.log("It WORKED !!!!! (page1)")
//         console.log(data);
//         return fakeRequestPromise("yelp.com/api/coffee/page2")
//     })
//     .then((data) =>{
//         console.log("It WORKED !!!!! (page2)")
//         console.log(data);
//         return fakeRequestPromise("yelp.com/api/coffee/page3")
//     })
//     .then((data) =>{
//         console.log("It WORKED !!!!! (page3)")
//         console.log(data);
//     })
//     .catch((err) =>{
//         console.log("OH NO REQUEST FAIL!!!!")
//         console.log(err)
//     })

    //       async --- Await
    
//   async function makeTwoRequest() {
//     let data1 = await fakeRequestPromise('/page1')
//     console.log(data1)
    
//   }


// #####################################################)
// #####################################################


// ------------------FETCH----------------------


// const loadStarWarsPeople = async () =>{
//     try {
//         const res =  await fetch("https://swapi.dev/api/people/1");
//         const data = await res.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// loadStarWarsPeople()


// #####################################################)
// #####################################################


// ------------------AXIOS----------------------

// axios.get("https://swapi.dev/api/people/1")
// .then(res =>{
//     console.log("Response:", res)
// })

// const getStarWarsPerson = async (id)=>{
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         console.log(res.data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// for(let i =1; i<15; i++){
//     getStarWarsPerson(i)
// }



const getDadJokes = async () =>{
try {
    const config = {headers: {Accept: 'application/json'}}
    const res  = await axios.get(`https://icanhazdadjoke.com/`, config)
    console.log(res.data.jokes)
}catch(e){
console.log(e)
}
}
getDadJokes()