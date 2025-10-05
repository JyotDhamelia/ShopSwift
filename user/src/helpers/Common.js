// function getServer()
// {
//     return "http://theeasylearnacademy.com/shop/";
// }
// export function getBase()
// {
//     return getServer() + "ws/";
// }
// export function getBaseImage()
// {
//     return getServer() + "images/";
// }
function getServer() {
    return "https://theeasylearnacademy.com/shop/"; // Updated to HTTPS
}

export function getBase() {
    return getServer() + "ws/";
}

export function getBaseImage() {
    return getServer() + "images/";
}
