// Task 1: processArray function
function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        return num * num;
      } else {
        return num * 3;
      }
    });
  }
  
  // Example for Task 1 of a new array where each even number is squared and each odd number is trippled 

  const numbers = [1, 2, 3, 4, 5];
  const processedNumbers = processArray(numbers);
  console.log('Processed numbers:', processedNumbers); 
  // Output: [3, 4, 9, 16, 15]
  
  