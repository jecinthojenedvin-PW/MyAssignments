//String-Home Asasignment

// Example1

let s = "Hello World"
last = (s.slice(6));

console.log('Last word in string1:',last)
console.log('Last word length:',last.length);
console.log('\n')

// Example2

let s1 = " fly me to the moon "
last1 = (s1.slice(15,19));

console.log('Last word in string2:',last1)
console.log('Last word length:',last1.length);
console.log('\n')

// Example3

let str1 = 'listen'
let str2 = 'silent'

function isAnagram()
{
    if ((str1.length) === (str2.length))
    {
       let x = str1.split('').sort().join('');
       let y = str2.split('').sort().join('');
        console.log(x);
        console.log(y);
        if (x === y )
        {
            console.log('Both strings are Anagram')
        }
        else
                    {
            console.log('Both strings are not an Anagram')
        }
    }
}
isAnagram();
console.log('\n')

// Example4



function isAnagram1()
{
    let str11 = 'Hello'
    let str12 = 'World'
    if ((str11.length) === (str12.length))
    {
       let x1 = str11.split('').sort().join('');
       let y1 = str12.split('').sort().join('');
        console.log(x1);
        console.log(y1);
        if (x1 === y1 )
        {
            console.log('Both strings are Anagram')
        }
        else
                    {
            console.log('Both strings are not an Anagram')
        }
    }
}
isAnagram1();



