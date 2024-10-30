const output = document.getElementsByClassName('output')[0]; 
 const btn1 = document.getElementById('btn1');
 const btn2 =document.getElementById('btn2');
 const btn3 = document.getElementById('btn3');
 const btn4 = document.getElementById('btn4');
 const btn5 = document.getElementById('btn5');
 const btn6 = document.getElementById('btn6');
document.getElementById('btn7').remove();

 btn1.textContent  = "Тема Мета Місце розташування лабораторної роботи";
btn2.textContent = "АДАПТИВНА ВЕРСТКА";
btn3.textContent = "Десктопноа версія";
btn4.textContent = "Планшетна версія";
btn5.textContent = "Мобільна версія";
btn6.textContent = "Висновки";      
function content_load(buttonId) {
    let content = '';
    
  
    switch (buttonId) {
        case 'btn1':
            content = `Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.<br><br>           
Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.<br><br>
ЛР_4:

    <a href ="https://github.com/OleksiiAnokhin2023/task_web_progect.git" target="_blank">репозиторій</a>  і
    <a href ="https://oleksiianokhin2023.github.io/task_web_progect/index.html" target="_blank">живий сайт</a> <br><br>   

Звіт_html:
    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_report_html.git" target="_blank">репозиторій</a> і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_report_html" target="_blank">живий сайт</a> <br> <br>`;
           
            break;
        case 'btn2':
            content = ` В нас існує три види приствоїв(великі екрани(десктоп), середні(планшети) та малі(телефони). Кожний вид пристроїв має свій розмір,
             саме тому нам потрібна адаптивна вестка, яка буде підлаштовуватись під будьякий розмір екрану. Для полегшення адаптації сайту, 
             адаптацію розділили на три види: декстопна, планшетна та мобільна версії. Їх розразняють за розмірами екрану. 
             Це дозволяє нам коли ми бачимо відповідні розміри застосовувати доцільні для даних розмірів властивості(розмір тексту, блоків тощо). 
             На сайті, за допомогою медіа запитів(команди, які реагують на певні параметри, при спрацюванні яких в код вводяться відповідні стилі, які були визначені в коді для цих умов)
             реалізована адаптація для мобільних та планшетних версій. Адаптація ж декстопної версії записана в самому коді і не потребує в дублюванні за допомогою медіа запитів.
`;
            break;
        case 'btn3':
            content = `style.css<br><textarea rows="50" cols="80">
   body{
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

footer {
    flex-grow: 0;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: relative;
    width: 100%;
    bottom: 0;
box-sizing: border-box;
}

  </textarea><br>
  structure_style.css<br><textarea rows="20" cols="35">
  body{
  overflow: auto;
}

.list{
    font-size: 20px;
    line-height: 2;
}
.content {
padding: 20px;
 margin: 0;
 margin-bottom: 10px;
  }

.add_content{
  font-size: 20px;
  line-height: 2;
}
  </textarea><br>
  equipment_style.css<br><textarea rows="60" cols="40">
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    display: block;
    max-width: 100vw;
    box-sizing: border-box;
    overflow-x: auto;
  }
  
  td, th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #ddd;
  }

  .tabl_div{
    width: 1500px;
    margin: 5px;
    margin-bottom: 30px;
    padding: 10px;
    align-items: center;
    max-width: 100vw;
    box-sizing: border-box;
  }

  select {
    margin: 10px;
}
img{
  width: 200px;
  cursor: pointer;
}


#image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

#modal-image {
width: 70%;
max-height:90% ;
}

#close-modal {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}
  </textarea><br>
  history_style.css<br><textarea rows="35" cols="35">
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 18px;
}
th, td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
}
table tr:nth-child(even) {
    background-color: #e2eaed;
}
th {
    background-color: #2f5ebb;
    color: white;
}
h2 {
    color: #2e6da4;
}
p, ul {
    line-height: 1.6;
    font-size: 19px;
}
.body{
    margin: 5px;
    padding: 10px;
  }
  h1,h2,h3{
    font-size: 2em;
  }
  p {
    text-indent: 20px;
}</textarea>
  `;
            break;
        case 'btn4':
            content = ` style.css<br><textarea rows="35" cols="30">
  @media (max-width: 767px) {
    header h1 {
        font-size: 1.5em;
    }

    nav {
        flex-direction: column;
    }

    nav a {
        padding: 10px;
        font-size: 0.9em;
    }

    p {
        padding: 0 10px;
        font-size: 0.9em;
    }

    form {
        width: 90%;
        padding: 15px;
    }

    input[type="text"] {
        font-size: 0.9em;
    }

    input[type="submit"] {
        padding: 8px 16px;
        font-size: 0.9em;
    }
}

    </textarea><br>
    structure_style.css<br><textarea rows="25" cols="35">
    @media (max-width: 767px) {
  .content {
      padding: 10px;
      font-size: 0.9em;
  }

  .list {
      font-size: 0.85em;
      line-height: 1.6;
  }

  .add_content {
      font-size: 0.85em;
  }

  h1 {
      font-size: 1.3em;
  }

  ol, ul {
      padding-left: 20px;
  }
}
  </textarea><br>
  equipment_style.css<br><textarea rows="35" cols="35">
  @media (max-width: 767px) {
  .tabl_div {
      width: 100%;
      overflow-x: auto;
      margin: 5px 0;
      padding: 5px;
      max-width: 100vw;
      box-sizing: border-box;
  }
  
  table {
      font-size: 0.8em;
      max-width: 100vw;
      display: block;
  }
    th, td {
      padding: 5px;
      white-space: wrap;
    }
  img {
      width: 150px;
  }

  #modal-image {
      width: 90%;
      max-height: 80%;
  }

  select {
      width: 100%;
      margin: 5px 0;
      padding: 8px;
      font-size: 0.9em;
  }
}
  </textarea><br>
   history_style.css<br><textarea rows="25" cols="35">
   @media (max-width: 767px) {
    h2, h3 {
        font-size: 1.5em;
    }

    .body {
        padding: 10px;
        font-size: 0.9em;
    }

    table, th, td {
        font-size: 0.8em;
        max-width: 100vw;
    }

    table {
        display: block;
        overflow-x: auto;
        width: 100%;
    }

    th, td {
        padding: 5px;
        white-space: wrap;
    }
}</textarea>
    `;
            break;
        case 'btn5':
            content = `style.css<br><textarea rows="45" cols="55"> 
             .class1{
   @media (min-width: 768px) and (max-width: 1023px) {
    header h1 {
        font-size: 2em;
    }

    nav a {
        padding: 12px 18px;
        font-size: 1em;
    }

    p {
        padding: 0 15px;
        font-size: 1em;
    }

    form {
        width: 80%;
        padding: 18px;
    }

    input[type="text"] {
        font-size: 1em;
    }

    input[type="submit"] {
        padding: 10px 18px;
        font-size: 1em;
    }
}
    </textarea><br>
    structure_style.css<br><textarea rows="25" cols="50">
    @media (min-width: 768px) and (max-width: 1023px) {
  .content {
      padding: 15px;
      font-size: 1em;
  }

  .list {
      font-size: 0.95em;
      line-height: 1.8;
  }

  .add_content {
      font-size: 1em;
  }

  h1 {
      font-size: 1.6em;
  }

  ol, ul {
      padding-left: 25px;
  }
}
  </textarea><br>
  equipment_style.css<br><textarea rows="25" cols="50">
  @media (min-width: 768px) and (max-width: 1023px) {
  .tabl_div {
    width: 100%;
    
    margin: 5px 0;
    padding: 5px;
    max-width: 100vw;
    box-sizing: border-box;
  }
  
  table {
    width: 100%;
      font-size: 0.9em;
      display: block;
      max-width: 100vw;
      box-sizing: border-box;
      overflow-x: auto;
  }
  th, td {
    padding: 5px;
    white-space: wrap;
  }

  img {
      width: 180px;
  }

  #modal-image {
      width: 80%;
      max-height: 85%;
  }
}
</textarea><br>
history_style.css<br><textarea rows="15" cols="35">
@media (min-width: 768px) and (max-width: 1023px) {
    h2, h3 {
        font-size: 1.75em;
    }
    table, th, td {
        font-size: 0.9em;
        max-width: 100vw;
    }

    th, td {
        padding: 8px;
    }
}</textarea>
    `;
            break;
        case 'btn6':
            content = `Я придбав практичні навички адаптивної верстки для трьох версій приладів за допомогою медіа запитів`;
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