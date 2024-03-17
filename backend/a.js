// // Assuming you're running this in a browser environment

// const loginData = {
//     email: 'test@example.com',
//     password: 'password123'
//   };

//   fetch('http:/localhost:3333/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(loginData)
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data); // This will log the response from the server
//   })
//   .catch(error => {
//     console.error('There was a problem with your fetch operation:', error);
//   });

// Assuming you're running this in a browser environment

const registerData = {
  email: "test@example.com",
  password: "password123",
};

fetch("http:/localhost:3333/api/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(registerData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // This will log the response from the server
  })
  .catch((error) => {
    console.error("There was a problem with your fetch operation:", error);
  });
