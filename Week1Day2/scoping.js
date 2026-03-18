let genderType = 'female' //'male'

function printGender()
{
    let color = 'brown';
    if (genderType === 'female')
    {
        var age = 30;
        let color = 'pink';
       // console.log('************************');
        console.log('Inside if block:',color);
        console.log('\n')
        
    }
    console.log('Inside function block:',color)
    console.log('Age:',age)
    console.log('\n')
}

printGender();
console.log('Outside Function block:',genderType);
//console.log('******************************')
