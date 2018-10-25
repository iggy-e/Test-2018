let paragaphs = document.getElementsByTagName( 'p');

console.log( paragaphs );

let pText = paragaphs[0].innerHTML;
console.log( pText );

let words = pText.split( " " ); //split sentence on the space

console.log( words );

for (let i = 0; i < words.length; i++ ) {

//while i is less than the length of our words array
//execute this code
    
    if ( words[i] == "student" ){
        
        console.log( "found it" );
        
        words[i] = "sad";
        
    }
    
console.log( words[i] );

//when you are done execuing all the code
//do that last bit in the for-loop ie. add 1 to i

let createdP = document.createElement( 'p' );
createdP.textContent = words[i];
document.body.appendChild(createdP);
    
}