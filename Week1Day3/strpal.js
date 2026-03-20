//Palindrome check

let str = 'madam'
let x1 = str.split('')
let len = x1.length
let y1 =[]
console.log(x1);

for (i=len-1; i>=0;i--)
{
    y1.push(x1[i]);
   
}

console.log(y1);

if (x1 === y1)

    {
        console.log('Given String is a palindrome:',x1)
    }
else
    
    {
       console.log('Given String is not a palindrome:',x1)
    } 
    

