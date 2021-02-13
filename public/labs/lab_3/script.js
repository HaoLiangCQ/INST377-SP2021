/* Put your javascript in here */
/* Hao Liang*/
function add(index){
    if (index+1>=7) return 0;
    else return index+1;
}

function sub(index){
    if(index-1<0) return 6;
    else return index-1;
}
function carouselChange() {
    const pictureNames =["images/onigiri_1.png","images/onigiri_2.png","images/onigiri_3.png","images/onigiri_4.png","images/roll_1.png","images/roll_2.png","images/roll_3.png"];

    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');

    let img1 =0;
    let img2=1;
    let img3=2;

    next.addEventListener('click', (event) =>{

        img1=add(img1);
        img2=add(img2);
        img3=add(img3);
        document.getElementById("image1").src=pictureNames[img1];
        document.getElementById("image2").src=pictureNames[img2];
        document.getElementById("image3").src=pictureNames[img3];
    });
    prev.addEventListener('click', (event) =>{

        img1=sub(img1);
        img2=sub(img2);
        img3=sub(img3);
        document.getElementById("image1").src=pictureNames[img1];
        document.getElementById("image2").src=pictureNames[img2];
        document.getElementById("image3").src=pictureNames[img3];

    });
}

window.onload = carouselChange;