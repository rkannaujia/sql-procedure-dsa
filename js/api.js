const url = "https://cat-fact.herokuapp.com/facts";

//  fetch(url).then(response => response.json()).then((data)=>
//     {console.log(data);
//     }).catch(err=>console.log(err)
// );


// make a promise function
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((response) =>
            response.json()).then((data) => {
                console.log("Success")
                resolve({ message: "Success", result: data })
            }).catch((error) => {
                console.log(error);
                reject("Error in fetching data")
            });
        });
    }
// fetchData(url).then(data => console.log(">>>>", data)).catch(error => console.log(error));

    const fetchDatafn = async (url) => {
        try {
            let  response = await fetch(url);
            const data = await response.json();
            return { message: "Success", result: data }
        } catch (error) {
          console.log(error);
            
        }
    }
 fetchDatafn(url).then((response) => {
    console.log(response.message);
    console.log(response.result);
  })
  .catch((error) => {
    console.log(error.message);
  });