function generateAuthID(studentCode, email) {
  //step 1 before @
  let firstname = "";
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") break;
    firstname += email[i];
  }
  // return firstname
  //step 2 concate student code and first name
  let inputString = "";
       for (let i = 0; i < studentCode.length; i++) {
       let ch = studentCode[i];
        if (ch >= "A" && ch <= "Z") {
           ch = String.fromCharCode(ch.CharCode(0) + 32);
    }
    inputString += ch;
  }
  // return inputString
  for (let i = 0; i < firstname.length; i++) {
    let ch = firstname[i];
    if (ch >= "A" && ch <= "Z") {
      ch = String.fromCharCode(ch.CharCode(0) + 32);
    }
    inputString += ch;
  }
  //return inputString
  
  //step 3 remove vowels
   let noVowels = '';
   let vowels = 'aeiou'
   for(let i=0;i<inputString.length;i++){
    let isVowel = false;
    for(let j=0;j<vowels.length;j++){
        if(inputString[i]===vowels[j]){
            isVowel = true;
            break;
        }
    }
    if(!isVowel){
        noVowels+=inputString[i]
    }
   }
   // return noVowels

   //step 4 remove prime number from string
   let nonPrimes = '';
   let primes = '2357'
   for(let i=0;i<noVowels.length;i++){
    let isPrimes = false;
    for(let j=0;j<primes.length;j++){
        if(noVowels[i]===primes[j]){
            isPrimes=true;
            break;
        }
    }
    if(!isPrimes){
        nonPrimes+=noVowels[i]
    }
   }
   //return nonPrimes
   //step 5 no prime append 1
   let foundPrime = false;
   for(let i=0;i<noVowels.length;i++){
    if(primes.includes[noVowels[i]]){
        foundPrime = true;
        break;
    }
   }
   if(!foundPrime){
    nonPrimes+='1';
   }
   //return noVowels
   //step 6 select even index char
   let evenIndexChars = '';
   for(let i=1;i<nonPrimes.length;i+=2){
      evenIndexChars+=nonPrimes[i]
     // console.log(evenIndexChars)
   } 

   //step 7 convert str into number
   let finalNumber = '';
   for(let i=0;i<evenIndexChars.length;i++){
    let char = evenIndexChars[i]
    let value = '';
    if(char>='a' && char<='z'){
       for(let j=0;j<26;j++){
        if(char ===String.fromCharCode(97+j)){
           value = (j+1).toString();
           break;
        }
       }

    }else if(char>='0' && char<='9'){
        value='28'
    }else{
        value = '27'
    }
    finalNumber+=value
   }
   return finalNumber
}
 
let studentCode = "fs39330_930";
let email = "kushwahvivek805@gmail.com";
console.log(generateAuthID(studentCode, email));
