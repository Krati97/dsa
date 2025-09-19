function capitalizeAndReplaceArray(text, replacementsArray) {
    // Define the original words in order
    let originalWords = ["candidate", "company"];
  
    return text
      .split('.') // split into sentences
      .map(sentence => {
        sentence = sentence.trim();
        if (sentence.length === 0) return '';
  
        // Replace words in order from the array
        originalWords.forEach((word, index) => {
          let regex = new RegExp(`\\b${word}\\b`, 'gi');
          sentence = sentence.replace(regex, replacementsArray[index]);
        });
  
        // Capitalize first letter of the sentence
        return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
      })
      .join('. ');
  }
  
//   // Example usage:
//   let input = "Hello world. this is javascript. i like coding.";
//   let replacementsArray = ["PHP", "Debugging"];
  
//   let result = capitalizeAndReplaceArray(input, replacementsArray);
//   console.log(result);
  // Output: "Hello world. This is PHP. I like Debugging."
  let input2 = "Hello candidate. weLcomE to company.";
  let replacementsArray2 = ["Krati", "SAP"];
  
  let result2 = capitalizeAndReplaceArray(input2, replacementsArray2);
  console.log(result2);