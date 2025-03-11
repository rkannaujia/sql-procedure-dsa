// promises were introduced to solve the problem of callback hell by flattering the sturctre of the code.

const getUserData = () =>{
    return  promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Step 1: Get user data");
            resolve("User data");
        },1000)
    })
}

const validateUserData = () =>{
    return  promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Step 2: Validate user data");
            resolve("Validated data");
        },2000)
    })
}

const fetchUserOrder = () =>{
    return  promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Step 3: Fetch user's order");
            resolve("Order details");
        },3000)
    })
}


const processOrder = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Step 4: Process order");
        resolve("Order processed");
      }, 4000);
    });
  };

  getUserData().then(validateUserData().then(fetchUserOrder().then(processOrder()))).catch(err=>console.log(err))

/** 
const delayTask = (TaskName, ms) => {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => { 
            console.log(`${TaskName} completed`)
            resolve();
         }, ms)
    })
}

console.log("start task execution");
delayTask("Task 1",2000).then(delayTask("Task 2",3000).then(delayTask("Task 3",2000))).catch(err=>console.log(err)
)
*/