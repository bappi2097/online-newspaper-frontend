const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector("#date").innerText=event.toLocaleDateString('bn-BD', options);