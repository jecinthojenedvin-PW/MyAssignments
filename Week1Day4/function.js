
// declaring global variable

let browser = "Chrome";

//  function that accepts a callback function as an argument 
function checkBrowserVersion(callback1)
{
    //setTimeout to simulate a delay

   setTimeout(() =>
     {
    callback1(browser);
     }, 2000);

}

//callback function that logs the browser version to the console when invoked

function checkVersion(version)
{
console.log('Browser version using callback: '+version)
}

//Call checkBrowserVersion function and pass the callback function to it.

checkBrowserVersion(checkVersion);







