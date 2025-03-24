// let img = document.getElementsByTagName('img')[0];
// console.log(img);


// if (img){
//     img.addEventListener('click',(e)=>{
//         e.preventDefault();
//         console.log('img clicked');
//     }
//     );
// }
// else{
//     console.log('kjb');
// }


let img = document.getElementsByTagName('img')[0];
console.log(img);

if (img) {
    console.log('exists');
    
    img.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('img clicked');
    });
} else {
    console.log('No <img> elements found.');
}