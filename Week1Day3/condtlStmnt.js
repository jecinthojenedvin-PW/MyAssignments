let browserName = 'Safari'
let testType = 'performregression'

function launchBrowser()

{
    if (browserName === 'Chrome')
    {
        console.log('Browser Name:',browserName);
    }
    else
        if (browserName === 'FireFox')
    {
        console.log('Browser Name:',browserName);
    }

    else
        if (browserName === 'Safari')
    {
        console.log('Browser Name:',browserName);
    }
    else
    {
        console.log('Browser Name Not Listed:',browserName);
    }


}

function runTests()
{
    switch(testType)
    {
        case 'smoke':
            console.log('Smoke')
            break;
        case 'sanity':
            console.log('Sanity')
            break;
        case 'regression':
            console.log('Regression')
            break;
        default:
            console.log('smoke')
           

    }
}

//Calling functions

launchBrowser();
runTests();

