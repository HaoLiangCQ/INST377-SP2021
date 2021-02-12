/* Put your javascript in here */
/* Hao Liang*/
function carouselChange() {
    const pictureNames =["onigiri_1.png","onigiri_2.png","onigiri_3.png","onigiri_4.png","roll_1.png","roll_2.png","roll_3.png"];

    const box = document.querySelector('#box1');

    let imageNo=0;
    box.addEventListener('click', (event) =>{
        console.log(imageNo);
        imageNo+=1;
        if (imageNo>=7) imageNo=0;
        document.getElementById("image").src=pictureNames[imageNo];
    });
}

window.onload = carouselChange;