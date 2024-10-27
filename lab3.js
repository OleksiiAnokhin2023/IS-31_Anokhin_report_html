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
 const btn10 =  document.createElement('button');
 const btn11 =  document.createElement('button');
 const sidebar = document.getElementsByClassName('sidebar')[0];
 btn8.id='btn8';
 btn9.id='btn9'
 btn10.id='btn10';
 btn11.id='btn11';
 sidebar.appendChild(btn8);
 sidebar.appendChild(btn9);
 sidebar.appendChild(btn10);
 sidebar.appendChild(btn11);
 btn1.textContent  = "Тема Мета Місце розташування лабораторної роботи";
btn2.textContent = "ЗАВДАННЯ 1. Зовняшний вигляд макету. Код макету";
btn3.textContent = "ЗАВДАННЯ 2";
btn4.textContent = "Фіксована таблична верстка";
btn5.textContent = "Гумова таблична верстка";
btn6.textContent = "Фіксована блокова верстка";      
btn7.textContent = "Гумова блокова верстка";
btn8.textContent = 'ЗАВДАННЯ 3 FLEXBOX(Скріншот сторінки)';
btn9.textContent = 'HTML - код(Flexbox)';
btn10.textContent = 'CSS - код(Flexbox)';
btn11.textContent = 'ВИСНОВКИ';
function content_load(buttonId) {
    let content = '';
    
  
    switch (buttonId) {
        case 'btn1':
            content = `Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.<br><br>           
Мета:<br>
 ⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок<br>
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX   
<br><br>
ЛР_2:

    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_laba_3.git" target="_blank">репозиторій</a>  і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_laba_1" target="_blank">живий сайт</a> <br><br>   
Звіт_html:
    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_report_html.git" target="_blank">репозиторій</a> і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_report_html" target="_blank">живий сайт</a> <br> <br>`;
           
            break;
        case 'btn2':
            content = `<img src="img/lab3/image.png" alt="" style="width:900px;"><br>
            <textarea rows="150" cols="100">
             <!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Військова Спроможність Армії США</title>
</head>
<body>

<header>
    <h1>Військова Спроможність Армії США</h1>
</header>
<main>
<nav>
    <a href="index.html">Головна</a>
    <a href="structure/structure.html">Структура Армії</a>
    <a href="/equipment/equipment.html">Озброєння</a>  
    <a href="history/history.html">Історія Армії</a>
</nav>
<p>На этом сайте можно найти информацию о военной мощм армии США. Тут указана вся структура современной армии США. Росписаны основные боевые единици, состав, командование, тактика, назначение и т.д.. На сайте приведена краткая история армии как структуры. Так же тут указаны все корпуса и основной остав действующих. Так же представлено большинство оружия и техники, используемого армией США. Так же предоставлен сайт со всеми военными базами и их расположением <a href="">вот он</a>. </p>
<p>Основное назначение сайта это проведение военно-стратегических игор. Использование его как справочника для создания проектов. Автор раскрыл все темы, которые понадобаятся для этого, по крайней мере по мнению автора. Если же вы с этим не согласны, заполните форму ниже, где изложите, что еще нужно добавть.</p>
<br>
     <form>
        <fieldset>
            <legend>Що додати?</legend>
            Що хочеш додати(коротко) <br>
            <input type="text" name="theme "> <br><br>
            Детальний опис матеріалу <br>
            <input type="text" name="description"> <br> <br>
            Чому це треба додати <br>
            <input type="text" name="why_it_need"> <br> <br>
            <input type="submit" value="Надіслати">
        </fieldset>
     </form>
</main>
<footer>
    © 2024 Військова Спроможність Армії США
</footer>


</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    overflow: auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
}
  body::-webkit-scrollbar {
    display: none; 
  }

  

header {
    flex-grow: 0;
    background-color: #0044cc;
    padding: 15px;
    color: white;
    text-align: center;
}
main{
    flex-grow: 2;
}

nav {
    background-color: #333;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

nav a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover {
    background-color: #ddd;
    color: black;
}

.container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.filter-section {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.filter-section h2 {
    margin-bottom: 15px;
}

.filter-section select {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.results {
    margin-top: 20px;
}

footer {
    flex-grow: 0;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: relative;
    width: 100%;
    bottom: 0;
}</textarea>
`;
            break;
        case 'btn3':
            content = `<img src="img/lab3/image2.png" alt="" style="width:900px;"><br>
            <img src="img/lab3/image3.png" alt="" style="width:900px;"><br>
            <img src="img/lab3/image4.png" alt="" style="width:900px;"><br>
            <img src="img/lab3/image5.png" alt="" style="width:900px;"><br>
            `;
            break;
        case 'btn4':
            content = `<textarea rows="70" cols="80">
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin: 0;
        }
        table {
            width: 1536px;
            height: 825px; 
            border-collapse: collapse;
        }
        td {
            border: 1px solid black;
        }
        .header , .footer {
            background-color: blue;
            color: white;
            height: 50px; 
            text-align: left;
            box-sizing: border-box;
            padding-left: 25px;
        }
        .sidebar {
            background-color: yellow;
            color: black;
            width: 100px; 
            text-align: right;
            vertical-align: middle;
            box-sizing: border-box;
            padding-right: 10px;
        }
        .content {
            box-sizing: border-box;
            padding-left: 25px;
            background-color: white;
            text-align: left;
        }
        .spacer {
            width: 100px;
            background-color: white;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td class="sidebar" rowspan="3">2</td>
            <td class="header">1</td>
            <td class="spacer" rowspan="3"></td>
        </tr>
        <tr>
            <td class="content">4</td>
        </tr>
        <tr>
            <td class="footer">3</td>
        </tr>
    </table>
</body>
</html>
    </textarea>`;
            break;
        case 'btn5':
            content = `<textarea rows="70" cols="80"> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html, body {
            height: 100%;
            margin: 0;
        }
        table {
            width: 100%;
            height: 100%;
            border-collapse: collapse;
        }
        td {
            border: 1px solid black;
        }
        .header, .footer {
            background-color: blue;
            color: white;
            height: 10%;
            text-align: left;
            box-sizing: border-box;
            padding-left: 1%;
        }
        .sidebar {
            background-color: yellow;
            color: black;
            width: 15%;
            text-align: right;
            vertical-align: middle;
            box-sizing: border-box;
            padding-right: 0.5%;
        }
        .content {
            background-color: white;
            text-align: left;
            box-sizing: border-box;
            padding-left: 1%;
        }
        .spacer {
            width: 15%;
            background-color: white;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td class="sidebar" rowspan="3">2</td>
            <td class="header">1</td>
            <td class="spacer" rowspan="3"></td>
        </tr>
        <tr>
            <td class="content">4</td>
        </tr>
        <tr>
            <td class="footer">3</td>
        </tr>
    </table>
</body>
</html>
    </textarea>`;
            break;
        case 'btn6':
            content = `<textarea rows="80" cols="80">  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <style>
        body {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
}

section {
    height: 100%;
}

header,footer {
    box-sizing: border-box;
    height: 100px;
    width: 1536px;
    background-color: lightblue;    
    padding-left: 35px;
    padding-top: 25px;
}

main {
    background-color: lightgray;
    height: calc(100vh - 200px);
    width: 1536px;
}

div {   
    background-color: lightcoral;

}

#n4,#n5,#n2 {
box-sizing: border-box;
padding-top: 192px;
text-align: center;
    float: left;
    background-color: lightyellow;
    width: 384px;  
    height: 100%;  
}   
#n4{    
    width: calc(384px*2);
    background-color: crimson;
}


    </style>
</head>
<body>
<header>1</header>
<main>
    <section>
        <div id="n5">5</div>
        <div id="n4">4</div>
        <div id="n2">2</div>
    </section>
</main>
<footer>3</footer>
</body>
</html>
  </textarea>`;
            break;
        case 'btn7':
            content = `
            <textarea rows="70" cols="80">  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: inline-block;
}

section {
    height: 100%;
}

header,footer {
    box-sizing: border-box;
    height: 10%;
    width: 100%;
    background-color: lightblue;    
    padding-left: 1.5%;
    padding-top: 1%;
}

main {
    background-color: lightgray;
    height: 80%;
    width: 100%;
}

div {   
    background-color: lightcoral;

}

#n4,#n5,#n2 {
box-sizing: border-box;
padding-top: 13%;
text-align: center;
    float: left;
    background-color: lightyellow;
    width: 25%;  
    height: 100%;  
}   
#n4{    
    width: 50%;
    background-color: crimson;
}


    </style>
</head>
<body>
    <header>1</header>
    <main>
        <section>
            <div id="n5">5</div>
            <div id="n4">4</div>
            <div id="n2">2</div>
        </section>
    </main>
    <footer>3</footer>
    </body>
</html>
</textarea>
`;
            break;
            case 'btn8':
                content =`<img src="img/lab3/image6.png" alt="" style="width:900px;"><br>
                <img src="img/lab3/image7.png" alt="" style="width:900px;"><br>`;
                break;
            case 'btn9':
                content =`<textarea rows="70" cols="80">
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style2.css">
    <title>Document</title>
</head>
<body>
    <header></header>
    <main>
        <nav class="sidebar">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </nav>
        <section id="page1">
            <h1>Для кого розроблена програма</h1>
            <div class="block">
                <div id="d1" class="d">
                    <h2>Школярі та випускники(15-18 років)</h2>
                    <p>отримають першу професію, не відкладаючи на потім свою мрію стати програмістом</p>
                    <img src="image.png" alt="">
                </div>
                <div id="d2" class="d">
                    <img src="image.png" alt="">
                    <h2>Студент ВНЗ(18-23 років)</h2>
                    <p>освоють другу спеціальність паралельно з універсетецькою</p>
                </div>
                <div id="d3" class="d">
                    <h2>Представники інших професій(23-55 років)</h2>
                    <p>яких не влаштовуює поточна карєра і фінансова перспектива зможуть перевчитися на розробника ПЗ і отримати затребувану професію.</p>
                    <img src="image.png" alt="">
                </div>
                <div id="d4" class="d">
                    <img src="image.png" alt="">
                    <h2>Всі бажаючі підвищити ІТ-кваліфікацію</h2>
                    <p>систематизують свої знання і отримають робочі навички, затребувані сучасному ІТ</p>
                </div>
            </div>
        </section>
        <section id="page2">
            <h1>Як проходить навчання</h1>
            <div class="block">
                <div><img src="image.png" alt=""></div>
                <div><img src="image.png" alt=""></div>
                <div><img src="image.png" alt=""></div>
            </div>
        </section>
        <section id="page3">
            <h1>Партнери Академії</h1>
            <div class="block">
                <div><img src="image.png" alt=""></div>
                <div>
                    <h2>Luxof</h2>
                    <p><mark> Luxoft</mark>, технологічна компанія DXC, є глобальною компанією з цифрової стратегії та розробки програмного забезпечення з глобальною клієнтською базою по всьому світу. Luxoft обслуговує клієнтів у Північній Америці, Європі та Азіатсько-Тихоокеанському регіоні Штаб-квартира компанії знаходиться в місті Цуг, Швейцарія. Luxoft надає послуги та технологічні рішення для автомобільної, фінансової, туристичної, готельної сфери, охорони здоров'я, біотехнологій, медіа та телекомунікаційної промисловості.</p>
                </div> 
            </div>
        </section>
    </main>
    <footer></footer>
</body>
</html>
</textarea>
                `;
                break;
        case 'btn10':
                content =`<textarea rows="70" cols="80">
                body{
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
}
header, footer{
    height: 5vh;
}
main{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
.sidebar{
    display: flex;
    flex-direction: row;   
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
}
.sidebar button{
    width: 15%;
    height: 60px;
}
section {
    display: flex;
    flex-direction: column;
}

.block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: rgb(195, 196, 196);
}

.block div {
    width: 100%;
    text-align: center;
}
h1{
    text-align: center;
}
.d{
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    height: 500px; 
    padding: 20px;
    background-color: #8be8ff; 
}

#d1 img{
    width: 100%;
    height: auto;
    margin-top: auto;
    display: block;
}

#d2 img{
    width: 100%;
    height: auto;
    margin-bottom: auto;
    display: block;
}

#d3 img{
    width: 100%;
    height: auto;
    display: block;
}

#d4 img{
    width: 100%;
    height: auto;
    margin-bottom: auto;
    display: block;
}

                </textarea>
                `;
                break;
          case 'btn11':
                  content =` Я придбав практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, дізнався переваги та недоліки типів макетів веб-сторінок
та придбав практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX. 

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