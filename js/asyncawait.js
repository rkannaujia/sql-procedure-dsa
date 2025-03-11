/** Simplicity: async and await make asynchronous code look synchronous. You don't need .then() to chain promises anymore.
Error Handling: Error handling is simplified with try/catch blocks.
 */
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

  async function handleOrder() {
    try {
      const userData = await getUserData();
      const validatedData = await validateUserData(userData);
      const order = await fetchUserOrder(validatedData);
      const result = await processOrder(order);
      console.log(result); // Order processed
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  handleOrder();

  