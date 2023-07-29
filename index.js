// Code your solutions in this file

function writeCards(names) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]} for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const namesArray = ["Guadalupe,", "Ollie,", "Aki"];
  const messages = writeCards(namesArray);
  console.log(messages);
  //=======
  
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  countDown(10);
