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
  
  const names = ['Jew', 'Larbi','Danquah' , 'Kate'];
  const modifiedNames = formatArrayStrings(names, processedNumbers);
  console.log('Modified names:', modifiedNames);