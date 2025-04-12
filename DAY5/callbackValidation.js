
let bname="chrome";
let version=2.1;

function checkBrowserVersion(callback){

    setTimeout(() => {
        callback(bname,version);
    }, 2000);


}

function logBrowserVersion(browserName,browserVersion){
    console.log(`Browsername:${browserName}\nBrowserversion:${browserVersion}`)

}

checkBrowserVersion(logBrowserVersion);

