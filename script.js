let input = 248

const extractHundreds = ( number ) => {
  const hundreds = Math.floor( number / 100 )
  return hundreds
}

const extractTens = ( number ) => {
  const tens = Math.floor( number / 10 )
  return tens
}

const extractSingles = ( number ) => {
  const singles = Math.floor( number / 1 )
  return singles
}

const splitNumber = ( number ) => {
  let input = number;
  console.log( `You've passed ${number} to this function` );
  const result = [ ];

  if ( extractHundreds( input ) < 1 ) {
    console.log( "This number is not in range of hundreds" )
  } else {
    result.push( extractHundreds( input ) )
    input = input - ( extractHundreds( input ) * 100 )
  }

  console.log( input )

  if ( extractTens( input ) < 1 ) {
    console.log("This number is not in range of tens")
    result.push( extractTens( input ) )
  } else {
    result.push( extractTens( input ) )
    input = input - ( extractTens( input ) * 10 )
  }

  console.log( input )

  result.push( extractSingles( input ) )
 
  return result
}

const createReverseNumber = ( arrayOfNumbers ) => {
  const reverseArray = [ ]
  for ( let i = arrayOfNumbers.length; i--; i > -1) {
    reverseArray.push( arrayOfNumbers[i] )
  }

  return reverseArray
}

let arrayOfNumbers = splitNumber( input );
let reverseArray = createReverseNumber( arrayOfNumbers )

//
// This does not work as intended
//

const checkIfPalindrome = ( firstArray, secondArray ) => {
  console.log( firstArray )
  console.log( secondArray )

  if ( firstArray === secondArray ) {
    return `Arrays are palindromes!`
  } else {
    return `Arrays are not palindromes`
  }
}

//
//
//

const compareArrayLength = ( firstArray, secondArray ) => {
  if ( firstArray.length === secondArray.length ) {
    return true
  }
}

//
// How to do this?
//

// const compareArrayContent = ( firstArray, secondArray) => {
//   if ( compareArrayLength( firstArray, secondArray ) = true ) {
//     for (let i; i >= firstArray.length; i++) {

//     }
//   }
// }

//
//
//
