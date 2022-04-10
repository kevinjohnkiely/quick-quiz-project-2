let myName = localStorage.getItem("name");
if(myName) {
    document.getElementById("hello").innerText = myName;
} else {
    document.getElementById("hello").innerText = 'Guest';
}
