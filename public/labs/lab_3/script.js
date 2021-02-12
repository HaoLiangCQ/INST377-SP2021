/* Put your javascript in here */
/* Hao Liang*/
function carouselChange() {
    const pictureNames =["images/onigiri_1.png","images/onigiri_2.png","images/onigiri_3.png","images/onigiri_4.png","images/roll_1.png","images/roll_2.png","images/roll_3.png"];

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