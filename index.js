let yesNode = document.querySelector(`.yes`);
let bu2Node = document.querySelector(`.bu2`);



bu2Node.addEventListener('click', function () {
    yesNode.innerHTML = `Успешно`;

});

// объяви переменную counter со значение 0
// эта переменная будет считать, сколько раз человек нажимал на колесо
let counter = 0;

wheel.addEventListener("click", function () {
    // увеличь счётчик поворотов на 1
    counter+=1;

    
    if (counter==1) {
        wheel.classList.add(`deg1`);
        // прокручиваем на 90 градусов
        
    } else {
        wheel.classList.remove(`deg1`);
        // прокручиваем на 0 градусов   
    }

    if (counter==1) {
        wheel.classList.add(`deg1`);
        // поверни на 90 градусов              
    } else if (counter==2) {
        wheel.classList.add(`deg2`);
        // поверни на 180 градусов
        wheel.classList.remove(`deg1`);
        // удали старый класс          
    } else {
        wheel.classList.remove(`deg2`);
        // сбрасываем счётчик обратно    
    }


    if (counter==2){
        wheel.classList.add(`deg2`);
    }else if (counter==3){
        wheel.classList.add(`deg3`);
        wheel.classList.remove(`deg2`);
    }else{
        wheel.classList.remove(`deg3`);   
    }

    if (counter==3){
        wheel.classList.add(`deg3`);
    }else if (counter==4){
        wheel.classList.add(`deg4`);
        wheel.classList.remove(`deg3`);
    }else{
        wheel.classList.remove(`deg4`); 

    }
    if (counter>4){
        counter=0;
    }
});









const swiper = new Swiper('.mySwiper', {

    // Optional parameters
    spaceBetween: 30,
    loop: true,
    mousewheel: false,
    keyboard: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

let enemyNode= document.querySelector(`#enemy`);
let dragonNode= document.querySelector(`#dragon`);
let healthNode= document.querySelector(`#health`);
let qut = `<img src="dragon-fruit.png">`;
let health =50;
let count=0;

enemyNode.addEventListener(`click`, function () {
    count +=1
    if (count==1){
        health-=1;
    }
    else if (count==2){
        health-=3;
    }
    else if (count==3){
        health-=10;
        count=0;
    }
    healthNode.innerHTML = `Здоровье ` +  health;

    if (health > 0) {
        count==1
    } else  if (health<=0) {
        healthNode.innerHTML=`ПОБЕДА! ` ; 
        dragonNode.innerHTML = '<img src="dragon-fruit.png"/>';
    }
});











