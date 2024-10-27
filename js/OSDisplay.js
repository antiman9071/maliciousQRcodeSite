let platform = window.navigator.platform;
let os = null;
if(/Win/.test(platform)){
    os = "Windows";
} else if(/Mac/.test(platform)){
    os = "Mac OS";
} else if(/iPhone|iPad|iPod/.test(userAgent)){
    os = "IOS";
} else if(/Android/.test(userAgent)){
    os = "Android";
} else if(/Linux/.test(platform)){
    os = "Linux";
}
document.getElementById('OS-display').innerHTML = "<h3>Your OS is: " + os + "</h3>"
