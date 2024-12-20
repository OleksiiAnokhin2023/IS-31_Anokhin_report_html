const output = document.getElementsByClassName('output')[0]; 
 const btn1 = document.getElementById('btn1');
 const btn2 =document.getElementById('btn2');
 const btn3 = document.getElementById('btn3');
 const btn4 = document.getElementById('btn4');
 const btn5 = document.getElementById('btn5');
 const btn6 = document.getElementById('btn6');
 const btn7 = document.getElementById('btn7');
 const btn8 = document.createElement('button');
 const btn9 =  document.createElement('button');
 const sidebar = document.getElementsByClassName('sidebar')[0];
 btn8.id='btn8';
 btn9.id='btn9'

 sidebar.appendChild(btn8);
 sidebar.appendChild(btn9);
 btn1.textContent  = "Тема Мета Місце розташування лабораторної роботи";
btn2.textContent = "ЗАВДАННЯ №1";
btn3.textContent = "ЗАВДАННЯ №3";
btn4.textContent = "ЗАВДАННЯ №5";
btn5.textContent = "ЗАВДАННЯ №7";
btn6.textContent = "ЗАВДАННЯ №8";      
btn7.textContent = "ЗАВДАННЯ №9";
btn8.textContent = 'ЗАВДАННЯ №10';
btn9.textContent = 'Висновки';
function content_load(buttonId) {
    let content = '';
    
  
    switch (buttonId) {
        case 'btn1':
            content = `Тема: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ.<br><br>           
Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT<br><br>
ЛР_7:

    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_laba_7.git" target="_blank">репозиторій</a>  і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_laba_7/" target="_blank">живий сайт</a> <br><br>   
    
Звіт_html:
    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_report_html.git" target="_blank">репозиторій</a> і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_report_html" target="_blank">живий сайт</a> <br> <br>`;
           
            break;
        case 'btn2':
            content = `
            <img src="img/lab7/image.png" alt="" style="width:900px;"><br>
            <textarea rows="50" cols="90">
            index.html 
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header></header>
    <main>
        <section>
            <div style="background-color: lawngreen; padding: 15px; box-sizing: border-box; width: 30%;">
                <p style="font-size: large;">Завдання 1</p>
                <div style="display: flexbox; flex-direction: row;">
                    <button id="btn1">SHOW ME</button>
                    <input type="text" id="inp1">
                </div>
            </div>
        </section>
    </main>
    <footer></footer>
    <script src="index.js"></script>
</body>
</html>
        index.js
    const btn1 = document.querySelector('#btn1');
const inp1 = document.querySelector('#inp1');
const btn2 = document.querySelector('#btn2');
const inp2 = document.querySelector('#inp2');
const div1 = document.querySelector('#place');
const list1 = document.querySelector('#categories');
const liCount = list1.querySelectorAll('.item');
let show;
let isHidden = false;
let isClicked = false;
btn1.addEventListener('click',()=>{
show = inp1.value;
console.log(show);
});
            </textarea>
`;
            break;
        case 'btn3':
            content = `
            <img src="img/lab7/image2.png" alt="" style="width:900px;"><br>
            <img src="img/lab7/image3.png" alt="" style="width:900px;"><br>
            <textarea rows="50" cols="90">
            index.html 
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header></header>
    <main>
        <section>
            <div style="background-color: lawngreen; padding: 15px; box-sizing: border-box; width: 30%;">
                <p style="font-size: large;">Завдання 3</p>
                <div style="display: flexbox; flex-direction: row;">
                    <input type="text" id="inp2">
                    <button id="btn2">Приховати</button>
                </div>
            </div>
        </section>
       
    </main>
    <footer></footer>
    <script src="index.js"></script>
</body>
</html>
        index.js
    const btn1 = document.querySelector('#btn1');
const inp1 = document.querySelector('#inp1');
const btn2 = document.querySelector('#btn2');
const inp2 = document.querySelector('#inp2');
const div1 = document.querySelector('#place');
const list1 = document.querySelector('#categories');
const liCount = list1.querySelectorAll('.item');
let show;
let isHidden = false;
btn2.addEventListener('click',()=>{
if(!isHidden){
    inp2.dataset.realValue = inp2.value;
    inp2.value = '*'.repeat(inp2.value.length);
    inp2.disabled = true;
    btn2.textContent = 'Розкрити';
} else{
    inp2.value = inp2.dataset.realValue || '';
    inp2.disabled = false;
    btn2.textContent = 'Приховати';
}
isHidden = !isHidden;
    });
            </textarea>`;
            break;
        case 'btn4':
            content = `
            <img src="img/lab7/image4.png" alt="" style="width:900px;"><br>
            
            <textarea rows="30" cols="90">
            index.html 
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header></header>
    <main>
        <section>
            <div style="background-color: lawngreen; padding: 15px; box-sizing: border-box; width: 30%;">
                <p style="font-size: large;" class="taskTitle" >Завдання 5</p>
                <div id="place" style="background-color: green;">
                    <br> <br><br><br><br>
                </div>
            </div>
        </section>
    </main>
    <footer></footer>
    <script src="index.js"></script>
</body>
</html>
        index.js
const div1 = document.querySelector('#place');
window.addEventListener('click',(event)=>{
if(event.target == div1){
    console.log(true);
} else console.log(false);

});
            </textarea>`;
            break;
        case 'btn5':
            content = `
            <img src="img/lab7/image5.png" alt="" style="width:900px;"><br> 
            <textarea rows="50" cols="90">
            index.html
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header></header>
    <main>
        <section>
            <ul id="categories">
                <li class="item">
                  <h2>Animals</h2>
                  <ul>
                    <li>Cat</li>
                    <li>Hamster</li>
                    <li>Horse</li>
                    <li>Parrot</li>
                  </ul>
                </li>
                <li class="item">
                  <h2>Products</h2>
                  <ul>
                    <li>Bread</li>
                    <li>Prasley</li>
                    <li>Cheese</li>
                  </ul>
                </li>
                <li class="item">
                  <h2>Technologies</h2>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </li>
              </ul>
              
        </section>
    </main>
    <footer></footer>
    <script src="index.js"></script>
</body>
</html>
        index.js
const list1 = document.querySelector('#categories');
const liCount = list1.querySelectorAll('.item');
liCount.forEach(element => {
  const output = element.querySelector('h2');
  const numOfItem = element.querySelectorAll('ul li').length;
  console.log(\`Category: \${output.textContent}\`);
  console.log(\`Elements: \${numOfItem}\`);
});
console.log(\`Number of categoies: \${liCount.length}\`);

            </textarea>`;
            break;
        case 'btn6':
            content = `
            <img src="img/lab7/image6.png" alt="" style="width:900px;"><br>
             <textarea rows="50" cols="90">
             index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header></header>
    <main>
        <section>
            <form class="login-form">
                <label>
                  Email
                  <input type="email" name="email" />
                </label>
                <label>
                  Password
                  <input type="password" name="password" />
                </label>
                <button type="submit">Log in</button>
              </form>              
        </section>
    </main>
    <footer></footer>
    <script src="index.js"></script>
</body>
</html>
    
        index.js
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit',(event)=>{
event.preventDefault();
const{email,password} = loginForm.elements;
if(email.value.trim()===''||password.value.trim()===''){
    alert('All form fields must be filled in');
    return;
}
const User ={
    email:email.value.trim(),
    password:password.value.trim(),
}
console.log(User);
loginForm.reset();
});
});
</textarea>
`;
            break;
        case 'btn7':
            content = `
           <img src="img/lab7/image7.png" alt="" style="width:900px;"><br>
            <textarea rows="30" cols="90">
             index.html 
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header></header>
    <main>
        <section>
            <div class="widget">
                <p>Background color: <span class="color">-</span></p>
                <button type="button" class="change-color">Change color</button>
              </div>              
        </section>
    </main>
    <footer></footer>
    <script src="index.js"></script>
</body>
</html>
        index.js
function getRandomHexColor() {
  return \`\${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}\`;
}

const newbtn = document.querySelector('.change-color');
const span = document.querySelector('.color');
newbtn.addEventListener('click',()=>{
span.textContent = getRandomHexColor();
document.body.style.backgroundColor =span.textContent;

});

            </textarea>
`;
            break;
            case 'btn8':
                content =`      
                <img src="img/lab7/image8.png" alt="" style="width:900px;"><br>
                <img src="img/lab7/image9.png" alt="" style="width:900px;"><br>    
            <textarea rows="50" cols="90">
            index.html 
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header></header>
    <main>
        <section>
            <div id="controls">
                <input type="number" min="1" max="100" step="1" />
                <button type="button" data-create>Create</button>
                <button type="button" data-destroy>Destroy</button>
              </div>
              
              <div id="boxes"></div>              
        </section>
    </main>
    <footer></footer>
    <script src="index.js"></script>
</body>
</html>
        index.js
function getRandomHexColor() {
  return \`\${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}\`;
}
    function createBoxes(amount){
    const elements = [];
    let size = 30;

    for(let i=1; i<=amount;i++){
        const div = document.createElement('div');
        div.style.width = \`\${size}px\`;
        div.style.height = \`\${size}px\`;
        div.style.backgroundColor = getRandomHexColor();
        size +=10;
        elements.push(div);
    }
    boxes.innerHTML = '';
    boxes.append(...elements)
} 



const boxes = document.querySelector('#boxes');
const input = document.querySelector('input[type="number"]');
const crtbtn = document.querySelector('[data-create]');
const dstbtn = document.querySelector('[data-destroy]');

crtbtn.addEventListener('click',()=>{
    if(input.value>=1 && input.value<=100){
    createBoxes(input.value)
    input.value ='';
    }else alert('Please enter a number between 1 and 100');
});
dstbtn.addEventListener('click',()=>{
    boxes.innerHTML = '';
});
            </textarea>`;
                break;
            case 'btn9':
                content =`Я придбав практичні навички роботи  з об'єктами, їх методами. Опанував Callback, стрілочні функції та стрілочні функції як колбеки.
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