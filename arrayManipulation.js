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

  const numbers = [1, 2, 3, 4, 5];
  const processedNumbers = processArray(numbers);
  console.log('Processed numbers:', processedNumbers); 


