
function filterpunctuation( input: string ) {
  /*
  Purpose - output a string that replaces all punctuations(such as “!”, “?”, “-“,“;”) with a space
  regex - match none alpha numeric characters 
  result - replace with spaces then remove any multiple spaces and start and end spaces.
  */
  
  const re = /[^a-zA-Z0-9]/g;
  const result = input.replace(re, " ").replace(/ {2,}/g, " ").trim()
  //console.log("Filter function input", input);
  return result;
}

export default filterpunctuation;