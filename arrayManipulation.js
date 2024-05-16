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


  
   // Task 2: formatArrayStrings function
   function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
      if (processedNumbers[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  
  // Example for Task 2
  const names = ['Mary', 'Esinam' , 'Kate'];
  const modifiedNames = formatArrayStrings(names, processedNumbers);
  console.log('Modified names:', modifiedNames); // Output: ['MARY', 'ESINAM', 'kate']