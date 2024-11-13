const output = document.getElementsByClassName('output')[0]; 
 const btn1 = document.getElementById('btn1');
 const btn2 =document.getElementById('btn2');
 const btn3 = document.getElementById('btn3');
 const btn4 = document.getElementById('btn4');
 const btn5 = document.getElementById('btn5');
 const btn6 = document.getElementById('btn6');
 const btn7 = document.getElementById('btn7');
 const btn8 = document.createElement('button');
 const sidebar = document.getElementsByClassName('sidebar')[0];
 btn8.id='btn8';

 sidebar.appendChild(btn8);

btn1.textContent  = "Тема Мета Місце розташування лабораторної роботи";
btn2.textContent = "ЗАВДАННЯ №1";
btn3.textContent = "ЗАВДАННЯ №2";
btn4.textContent = "ЗАВДАННЯ №3";
btn5.textContent = "ЗАВДАННЯ №4";
btn6.textContent = "ЗАВДАННЯ №5"; 
btn7.textContent = "ЗАВДАННЯ №6";
btn8.textContent = "Висновки";        
function content_load(buttonId) {
    let content = '';
    switch (buttonId) {
        case 'btn1':
            content = `Тема: ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.<br><br>           
Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT<br><br>
ЛР_6:

    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_laba_6.git" target="_blank">репозиторій</a>  і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_laba_6/" target="_blank">живий сайт</a> <br><br>   

Звіт_html:
    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_report_html.git" target="_blank">репозиторій</a> і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_report_html" target="_blank">живий сайт</a> <br> <br>`;
           
            break;
        case 'btn2':
            content = `<img src="img/lab6/image.png" alt="" style="width:900px;"><br>
            <textarea rows="120" cols="80">   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section id="products">

        <div class="product">
            <img src="img/product1.png" alt="milk">
            <p id="name1">Молоко</p>
            <p>Price: <span id="price1">47.79</span> грн</p>
            <label for="quantity1">Количество:</label>
            <div class="quantity-controls">
                <button  onclick="decreaseQuantity('quantity1')">-</button>
                <input type="number" id="quantity1" name="quantity" value="1">
                <button  onclick="increaseQuantity('quantity1')">+</button>
            </div>
            <button onclick="addToCart(1)">Buy</button>
        </div>

        <div class="product">
            <img src="img/product2.png" alt="water">
            <p id="name2">Вода мінеральна «Карпатська Джерельна» негазована</p>
            <p>Price: <span id="price2">22.99</span> грн</p>
            <label for="quantity2">Количество:</label>
            <div class="quantity-controls">
                <button  onclick="decreaseQuantity('quantity2')">-</button>
                <input type="number" id="quantity2" name="quantity" value="1">
                <button  onclick="increaseQuantity('quantity2')">+</button>
            </div>
            <button onclick="addToCart(2)">Buy</button>
        </div>

        <div class="product">
            <img src="img/product3.png" alt="sugar">
            <p id="name3">Цукор «Повна Чаша» білий кристалічний</p>
            <p>Price: <span id="price3">32.89</span> грн</p>
            <label for="quantity3">Количество:</label>
            <div class="quantity-controls">
                <button  onclick="decreaseQuantity('quantity3')">-</button>
                <input type="number" id="quantity3" name="quantity" value="1">
                <button  onclick="increaseQuantity('quantity3')">+</button>
            </div>
            <button onclick="addToCart(3)">Buy</button>
        </div>
        
        <div class="product">
            <img src="img/product4.png" alt="sugar">
            <p id="name4">Серветки паперові «Премія»® мікс 3-шарові в коробці</p>
            <p>Price: <span id="price4">49.99</span> грн</p>
            <label for="quantity4">Количество:</label>
            <div class="quantity-controls">
                <button  onclick="decreaseQuantity('quantity4')">-</button>
                <input type="number" id="quantity4" name="quantity" value="1">
                <button  onclick="increaseQuantity('quantity4')">+</button>
            </div>
            <button onclick="addToCart(4)">Buy</button>
        </div>

        <div class="product">
            <img src="img/product5.png" alt="sugar">
            <p id="name5">Серветки паперові «Повна Чаша» «Мікс» 2-шарові в картонній коробці, 150шт</p>
            <p>Price: <span id="price5">59.99</span> грн</p>
            <label for="quantity5">Количество:</label>
            <div class="quantity-controls">
                <button  onclick="decreaseQuantity('quantity5')">-</button>
                <input type="number" id="quantity5" name="quantity" value="1">
                <button  onclick="increaseQuantity('quantity5')">+</button>
            </div>
            <button onclick="addToCart(5)">Buy</button>
        </div>

        <div class="product">
            <img src="img/product6.png" alt="sugar">
            <p id="name6">Напій Coca-Cola</p>
            <p>Price: <span id="price6">27.99</span> грн</p>
            <label for="quantity6">Количество:</label>
            <div class="quantity-controls">
                <button  onclick="decreaseQuantity('quantity6')">-</button>
                <input type="number" id="quantity6" name="quantity" value="1">
                <button  onclick="increaseQuantity('quantity6')">+</button>
            </div>
            <button onclick="addToCart(6)">Buy</button>
        </div>

        <div class="product">
            <img src="img/product7.png" alt="sugar">
            <p id="name7">Сироп Luxardo Lime, 0,75л</p>
            <p>Price: <span id="price7">239</span> грн</p>
            <label for="quantity7">Количество:</label>
            <div class="quantity-controls">
                <button  onclick="decreaseQuantity('quantity7')">-</button>
                <input type="number" id="quantity7" name="quantity" value="1">
                <button  onclick="increaseQuantity('quantity7')">+</button>
            </div>
            <button onclick="addToCart(7)">Buy</button>
        </div>

        <div class="product">
            <img src="img/product8.png" alt="sugar">
            <p id="name8">Ковбаса «Глобино» «Лікарська» в/ґ</p>
            <p>Price: <span id="price8">33.90</span> грн</p>
            <label for="quantity8">Количество:</label>
            <div class="quantity-controls">
                <button  onclick="decreaseQuantity('quantity8')">-</button>
                <input type="number" id="quantity8" name="quantity" value="1">
                <button  onclick="increaseQuantity('quantity8')">+</button>
            </div>
            <button onclick="addToCart(8)">Buy</button>
        </div>

        <div class="product">
            <img src="img/product9.png" alt="sugar">
            <p id="name9">Крупа «Сквирянка» гречана ядриця, 800г</p>
            <p>Price: <span id="price9">54.49</span> грн</p>
            <label for="quantity9">Количество:</label>
            <div class="quantity-controls">
                <button  onclick="decreaseQuantity('quantity9')">-</button>
                <input type="number" id="quantity9" name="quantity" value="1">
                <button  onclick="increaseQuantity('quantity9')">+</button>
            </div>
            <button onclick="addToCart(9)">Buy</button>
        </div>

    </section>
    <button onclick="window.open('site2.html', '_blank')">next task</button>
    <script src="index.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
}
section{
    margin: 25px;
}
#products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}
.product {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    width: 23%; /* Adjust width as needed */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.product img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
}
.quantity-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 10px 0;
}
button {
    padding: 5px 10px;
    cursor: pointer;
}
input[type="number"] {
    width: 50px;
    text-align: center;
}
    
function createProduct(obj, callback){
const Product = {
    ...obj,
    id:Date.now().toString()
};
    callback(Product);
}

function logProduct(product){
    console.log("Product created:", product);
} 
function logTotalPrice(product) {
    console.log(product.price*product.quantity)
}


function decreaseQuantity(id ){
let quantity  = document.getElementById(id);
if(quantity.value>0)
  quantity.value = parseInt(quantity.value)-1;
}
function increaseQuantity(id ){
    let quantity  = document.getElementById(id);
    quantity.value = parseInt(quantity.value)+1;
    }

function CreateObject(name,quantity, price){
return {
    name: name,
    quantity: quantity,
    price: price
};
}


function addToCart(num) {
    const quantity = parseInt(document.getElementById('quantity' + num).value);
    const name = document.getElementById('name' + num).textContent;
    const price = parseFloat(document.getElementById('price' + num).textContent);

    const productObject = CreateObject(name, quantity, price);
    
    createProduct(productObject, (product)=> {
        logProduct(product);
        logTotalPrice(product);
    });
    alert("product added");
}
 </textarea>
`;
            break;
        case 'btn3':
            content = `<img src="img/lab6/image2.png" alt="" style="width:900px;"><br>
<textarea rows="20" cols="80"> 
const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
   };
   const currentMedicines = Object.keys(medicines).filter(name => medicines[name] > new Date()).sort((a, b) => medicines[a] - medicines[b]);
console.log(currentMedicines);
  </textarea>`;
            break;
        case 'btn4':
            content = ` <img src="img/lab6/image3.png" alt="" style="width:900px;"><br>
            <textarea rows="15" cols="80">
const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];

  function newMass(fruits){
    const new_fruits = fruits.map((element,index)=>{
        return {
            id: index+1,
            name: element.name,
            price: element.price*0.8
        };
    });
       return new_fruits; 
  }
  console.log(newMass(fruits)); 
    </textarea>`;
            break;
        case 'btn5':
            content = `<img src="img/lab6/image4.png" alt="" style="width:900px;"><br>
            <textarea rows="30" cols="50"> 
 class Client {
    #login;
    #email;

    constructor(login, email)
    {
        this.#login = login;
        this.#email = email;
    }

    get login(){
        return this.#login
    }

    get email(){
        return this.#email;
    }
    set login(login){
        this.#login = login;
    }
    set email(email){
        this.#email=email;
    }

  }
  const client =  new Client('AlexGey','alexgeyver2023@gmail.com')
  console.log(client.login);
  console.log(client.email);
</textarea>`;
            break;
        case 'btn6':
            content = `<img src="img/lab6/image5.png" alt="" style="width:900px;"><br>
            <textarea rows="20" cols="60">  
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];

    function countTags(tweets) {
        const tagCounts = {};
    
        tweets.forEach(tweet => {
            tweet.tags.forEach(tag => {
                if (tagCounts[tag]) {
                    tagCounts[tag] += 1;
                } else {
                    tagCounts[tag] = 1;
                }
            });
        });
    
        return tagCounts;
    }
    console.log(countTags(tweets));
  </textarea>`;
            break;
        case 'btn7':
            content = `
<img src="img/lab6/image6.png" alt="" style="width:900px;"><br>
            <textarea rows="20" cols="65">  
  function checkBrackets(str){

    const stack = [];
    const compr_val = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for (const element of str) {
        if(compr_val[element])
            stack.push(element) 
        else if(Object.values(compr_val).includes(element)){
            const last =stack.pop();
            if(compr_val[last]!==element) return false;
        }
    }
    return stack.length===0;
  } 
  console.log(checkBrackets('someFn() {} []'));
  console.log(checkBrackets('fdjfoff{'));      
  console.log(checkBrackets('[(])'));           
  console.log(checkBrackets('{[()]}'));         
  console.log(checkBrackets('{([])}')); 
  console.log(checkBrackets('{([]})')); 
  console.log(checkBrackets('{([)')); 
  console.log(checkBrackets('аощавошщвпова(атвоащшл)ываыа(]')); 
  </textarea>
`;
break;
case 'btn8':
            content = ` Я придбав практичні навички роботи з об'єктами та його методами. Успішно застосував стрілочні функції як колбеки.
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