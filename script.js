// function to find the largest number in a list
function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    return largest;
  }
  
  // event handler for button click
  function handleClick() {
    const numbers = [5, 2, 9, 1, 7];
    const largestNumber = findLargestNumber(numbers);
    console.log("The largest number is: " + largestNumber);
  }
  
  // make HTTP request using XMLHttpRequest
  const request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/users');
  request.onload = function() {
    const data = JSON.parse(request.responseText);
    console.log(data);
  }
  request.send();
  
  // add event listener to button
  const button = document.querySelector('submit-btn');
  button.addEventListener('click', handleClick);
  