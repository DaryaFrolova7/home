let phrases = [
  'отправить другу смешную гифку',
  'посмотреть скидки на авиабилеты',
  'разобраться, о чём поют рэперы',
  'Юрий Дудь',
  'расставить книги на полке по цвету',
  'читать про зарплаты в Сан-Франциско'
];

//let randIndex = Math.floor(Math.random() * phrases.length);
//console.log(randIndex);
//console.log(phrases[randIndex]);

//function sHello (name){
//alert("Привет,"+ name);}

//sHello("Alex");
function getRandomElement(arr){
  let randIndex= Math.floor(Math.random()*arr.lenght);
  console.log(randIndex);
  console.log(arr[randIndex]);
  return arr[randIndex];
}

let button= document.querySelector('.button');
let advice= document.querySelector('.advice');
let phrase= document.querySelector('.phrases');
let image= document.querySelector('.image');

button.addEventListener('click', function(){
  phrase.textContent= getRandomElement(phrases);
})


