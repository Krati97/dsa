function capitalizeAndReplace(text, replacements) {
    return text
      .split('.') // split into sentences
      .map(sentence => {
        sentence = sentence.trim();
        if (sentence.length === 0) return '';
  
        // Replace words based on mapping
        for (let [target, replacement] of Object.entries(replacements)) {
          let regex = new RegExp(`\\b${target}\\b`, 'gi'); 
          sentence = sentence.replace(regex, replacement);
        }
  
        // Capitalize first letter of the sentence
        return sentence[0].toUpperCase() + sentence.slice(1);
      })
      .join('. ');
  }
  
  // Example usage:
  let input = "Hello world. this is javascript. i like coding.";
  let replacements = { "javascript": "PHP", "coding": "Debugging" };
  
  let result = capitalizeAndReplace(input, replacements);
  console.log(result);