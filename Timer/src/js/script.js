
// Функция устанавливает таймер
// Функция для определения времени разницу
// Функция обновления таймера

let seconds = document.querySelector('#seconds');
let minutes = document.querySelector('#minutes');
let hours = document.querySelector('#hours');
let days = document.querySelector('#days');
let inputBtn = document.querySelector('#btn');
let inputDate = document.querySelector('#input');
let unBtn = document.querySelector('#unbtn');


const addZero = (num) =>{
    if (num < 10){
        return `0${num}`
    }else{
        return num
    }

};


 inputBtn.addEventListener('click', ()=>{
     let newDate = inputDate.value;
     if (Date.parse(newDate) > Date.parse(new Date()) + 3600000){
         const ourData = (days,hours,minutes,seconds) => {
             let current = new Date();
             let result = Date.parse(newDate) - Date.parse(current) ;
             seconds.textContent = addZero(result / 1000 % 60);
             minutes.textContent = addZero(Math.floor(result / 1000 / 60) % 60)  ;
             hours.textContent =  addZero(Math.floor(result / 1000 / 60 / 60 ) % 24 );
             days.textContent = addZero(Math.floor(result / 1000 / 60 / 60 /24));

             let timerId = setInterval(() => {
                 ourData(days,hours,minutes,seconds)
             },1000);

             if (result < 0){
                 clearInterval(timerId);
                 days.textContent = '00';
                 hours.textContent = '00';
                 minutes.textContent = '00';
                 seconds.textContent = '00';
             }
             unBtn.addEventListener('click', () =>{
                 clearInterval(timerId);
                 days.textContent = '00';
                 hours.textContent = '00';
                 minutes.textContent = '00';
                 seconds.textContent = '00';
                 inputDate.value = '';
             })
         };
         ourData(days,hours,minutes,seconds);
     } else {
         alert('Go out');
         inputDate.value = ''
     }
 });

