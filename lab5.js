const output = document.getElementsByClassName('output')[0]; 
 const btn1 = document.getElementById('btn1');
 const btn2 =document.getElementById('btn2');
 const btn3 = document.getElementById('btn3');
 const btn4 = document.getElementById('btn4');
 const btn5 = document.getElementById('btn5');
 const btn6 = document.getElementById('btn6');
 const btn7 = document.getElementById('btn7');

btn1.textContent  = "Тема Мета Місце розташування лабораторної роботи";
btn2.textContent = "ЗАВДАННЯ №1";
btn3.textContent = "ЗАВДАННЯ №2";
btn4.textContent = "ЗАВДАННЯ №3";
btn5.textContent = "ЗАВДАННЯ №4";
btn6.textContent = "ЗАВДАННЯ №5"; 
btn7.textContent = "Висновки";      
function content_load(buttonId) {
    let content = '';
    switch (buttonId) {
        case 'btn1':
            content = `Тема: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. 
ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT.<br><br>           
Мета: придбати практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT<br><br>
ЛР_5:

    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_laba_5.git" target="_blank">репозиторій</a>  і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_laba_5/" target="_blank">живий сайт</a> <br><br>   

Звіт_html:
    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_report_html.git" target="_blank">репозиторій</a> і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_report_html" target="_blank">живий сайт</a> <br> <br>`;
           
            break;
        case 'btn2':
            content = `<img src="img/lab5/image.png" alt="" style="width:900px;"><br>
            <textarea rows="20" cols="80">   
            <h1>Buy drone</h1>
    <h2>quantity</h2>
    <input type="text">
    <button>buy</button>
const pricePerDroid = 100;
const quantityInput  = document.getElementsByTagName('input')[0];
const btn = document.getElementsByTagName('button')[0];
const btn2 = document.getElementsByTagName('button')[1];
const btn3 = document.getElementsByTagName('button')[2];
btn.addEventListener('click',()=>{
    try{
    const quantity =parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        throw new Error("Введіть коректну кількість дронів (ціло позитивне число).");
    }
    makeTrunsaction(quantity,pricePerDroid);
} catch (error) {
    alert(\`Помилка: \${error.message}\`);
}
});
function makeTrunsaction(quantity, pricePerDroid ){
let totalPrice = quantity*pricePerDroid;
console.log(\`You ordered \${quantity} droids worth \${totalPrice} credits!\`)
}
 </textarea>
`;
            break;
        case 'btn3':
            content = `<img src="img/lab5/image2.png" alt="" style="width:900px;"><br>
<textarea rows="20" cols="80"> 
 <p>enter "spam" or "sale"</p>
    <input type="text"> <button>check</button><br><br>
const messageInpt = document.getElementsByTagName('input')[1];
btn2.addEventListener('click',()=>{
const checkvar = checkForSpam(messageInpt.value);
console.log(checkvar);
});
function checkForSpam(message) {
    const lowtext = message.toLowerCase();
    if (lowtext.includes('spam')|| lowtext.includes('sale') )return true;
    else return false;
}
  </textarea>`;
            break;
        case 'btn4':
            content = ` <img src="img/lab5/image3.png" alt="" style="width:900px;"><br>
            <textarea rows="15" cols="80">
  <p>enter mass</p>
    <input type="text"><button>add mass</button><br><br>
const inputString = document.getElementsByTagName('input')[2];

btn3.addEventListener('click',()=>{
    const numbers = inputString.value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        throw new Error("Массив должен содержать только числа.");}

        const filterValue = Number(prompt("Введите число для фильтрации массива:"));
        if (isNaN(filterValue)) {
            throw new Error("Введите корректное число для фильтрации.");
        }
    const result = filterArray(numbers, filterValue);
console.log(result);});
function filterArray(numbers, value){
    let mass =[];
    for (const element of numbers) {
        if(element>value) mass.push(element);
    }
    return mass;
}
    </textarea>`;
            break;
        case 'btn5':
            content = `<img src="img/lab5/image3.png" alt="" style="width:900px;"><br>
            <textarea rows="60" cols="80"> 
 <p>enter mass</p>
    <input type="text"><button>add mass</button><br><br>
    const inputString = document.getElementsByTagName('input')[2];

btn3.addEventListener('click',()=>{
    const numbers = inputString.value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        throw new Error("Массив должен содержать только числа.");}
        const oneDimentioanalArray =[...numbers];
    
   
    console.log(\`max element \${FindMax(oneDimentioanalArray)}\`);
    console.log(\`min element \${FindMin(oneDimentioanalArray)}\`); 

    console.log(\`old mass:\${oneDimentioanalArray}\`);
    console.log(\`new mass:\${ChangeItems(oneDimentioanalArray,FindMax(oneDimentioanalArray),FindMin(oneDimentioanalArray))}\`);
    console.log(\`Insertion Sort: \${SortMass(oneDimentioanalArray)}\`);

});

function FindMax(oneDimentioanalArray){
    const mass = oneDimentioanalArray.filter((element,_)=>element%2===0);
    const max = Math.max(...mass);
    return max;
}
function FindMin(oneDimentioanalArray){
    const mass = oneDimentioanalArray.filter((_,index)=>index%2===0);
    const min =Math.min(...mass);
    return min;
}

function ChangeItems(oneDimentioanalArray, max, min){
    const maxLocation = oneDimentioanalArray.indexOf(max);
    const minLocation = oneDimentioanalArray.indexOf(min);
   const new_oneDimentioanalArray = [...oneDimentioanalArray];
   const temp = new_oneDimentioanalArray[maxLocation];
   new_oneDimentioanalArray[maxLocation] = new_oneDimentioanalArray[minLocation];
   new_oneDimentioanalArray[minLocation] = temp;
   
    return new_oneDimentioanalArray;
}

function SortMass(mass){
const arr = [...mass];
for(let i=0; i<arr.length; i++){
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j --;
    }
    arr[j + 1] = key;
}
return arr;
}


</textarea>`;
            break;
        case 'btn6':
            content = `<img src="img/lab5/image4.png" alt="" style="width:900px;"><br>
            <textarea rows="90" cols="80">  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        form {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}
fieldset {
    border: none;
}
legend {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #333;
}
input[type="text"],input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}
button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}
button[type="submit"]:hover {
    background-color: #45a049;
}
    </style>
</head>
<body>
    <form>
        <fieldset>
            <legend>Реєстрація</legend>
            <label for="integerField">Ціле число (*):</label>
            <input type="text" id="integerField" name="integerField"><br>
          
            <label for="floatField">Дійсне число (*):</label>
            <input type="text" id="floatField" name="floatField"><br>
          
            <label for="dateField">Дата (DD.MM.YYYY) (*):</label>
            <input type="text" id="dateField" name="dateField"><br>
          
            <label for="password">Пароль (*):</label>
            <input type="password" id="password" name="password"><br>
          
            <label for="confirmPassword">Підтвердження паролю (*):</label>
            <input type="password" id="confirmPassword" name="confirmPassword"><br>
          
            <button type="submit" id="registr">Зареєструватися</button>
        </fieldset>
    </form>
    <button onclick="window.location.href='index.html'">main file</button>
      
     <script src="registration.js"></script>
</body>
</html>
const btn = document.getElementById('registr');
const integerInp = document.getElementById('integerField');
const floatInp = document.getElementById('floatField');
const dateInp = document.getElementById('dateField');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.querySelector('form');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    let integerValue = parseInt(integerInp.value);
    if (isNaN(integerValue)) {
        alert("Введіть ціле число.");
        return;
    }

    let floatValue = parseFloat(floatInp.value);
    if (isNaN(floatValue)) {
        alert("Введіть дійсне число.");
        return;
    }

    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(dateInp.value)) {
        alert("Введіть дату у форматі DD.MM.YYYY.");
        return;
    }

    const date = dateInp.value.split('.');
    const day = Number(date[0]);
    const month = Number(date[1]);
    const year = Number(date[2]);

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1000 || year > 9999) {
        alert("Невірна дата.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Паролі не співпадають.");
        return;
    }

    if (password.value.length !== 8) {
        alert("Пароль повинен містити  8 символів.");
        return;
    }

    console.log(\`Today is \${day} \${WhatMonth(month)} \${year} year\`);
    console.log(integerValue);
    console.log(floatValue);
    console.log(password.value);

    form.reset();
});

function WhatMonth(month) {
    switch (month) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "Invalid month";
    }
}

  </textarea>`;
            break;
        case 'btn7':
            content = `
Я придбав практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.  Навчився реалізовувати програми засобами мови JAVASCRIPT.
`;
            break;
        default:
            content = 'Нет информации';
    }


    output.innerHTML = content;
}


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        content_load(event.target.id); 
    });
});