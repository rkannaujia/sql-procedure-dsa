//callback hell accurs when multiple asyncronous operation depends on each other. leading to deeply nested callback . this makes the code difficult to read, understand and maintain.
/** 
setTimeout(() => {
  console.log("Step 1: Get user data");

  setTimeout(() => {
    console.log("Step 2: Validate user data");

    setTimeout(() => {

      console.log("Step 3: Fetch user's order");

      setTimeout(() => {
        console.log("Step 4: Process order");

      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);
*/
const getUserData = (callback) => {
  setTimeout(() => {
      console.log("Step 1: Get user data");
      callback(null, "User data");
  }, 1000);
};

const validateUserData = (userData, callback) => {
  setTimeout(() => {
      console.log("Step 2: Validate user data");
      callback(null, "Validated data");
  }, 2000);
};

const fetchUserOrder = (validatedData, callback) => {
  setTimeout(() => {
      console.log("Step 3: Fetch user's order");
      callback(null, "Order details");
  }, 3000);
};

const processOrder = (orderDetails, callback) => {
  setTimeout(() => {
      console.log("Step 4: Process order");
      callback(null, "Order processed");
  }, 4000);
};


getUserData((err, userData) => {
  if (err) {
      console.error("Error in Step 1:", err);
      return;
  }
  validateUserData(userData, (err, validatedData) => {
      if (err) {
          console.error("Error in Step 2:", err);
          return;
      }
      fetchUserOrder(validatedData, (err, orderDetails) => {
          if (err) {
              console.error("Error in Step 3:", err);
              return;
          }
          processOrder(orderDetails, (err, result) => {
              if (err) {
                  console.error("Error in Step 4:", err);
                  return;
              }
              console.log(result); // Final result
          });
      });
  });
});

