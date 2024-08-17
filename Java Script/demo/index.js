// class Bird {
//     useWings() {
//         console.log("Flying!")
//     }
// }
// class Eagle extends Bird {
//     useWings() {
//         super.useWings()
//         console.log("Barely flapping!")
//     }
// }
// class Penguin extends Bird {
//     useWings() {
//         super.useWings()
//         console.log("Diving!")
//     }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"
let answer = window.prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}
console.log(answer)