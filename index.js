function writeCards(namesArray, eventName){
  let cardMessage = [];

  for(let i = 0; i<namesArray.length; i++){
    const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
    cardMessage.push(message);
  }
  return cardMessage;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "suprise"));

function countDown(num){
  let count = num;
  while(count >= 0){
      console.log(num);
      num--;
      count--;
  };

}

console.log(countDown(10));