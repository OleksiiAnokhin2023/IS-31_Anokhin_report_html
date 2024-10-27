
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
btn2.textContent = "Способи підключення стилів";
btn3.textContent = "СЕЛЕКТОРИ";
btn4.textContent = "Склектори тегу";
btn5.textContent = "Селектори класу";
btn6.textContent = "Селектори ідентифікаторів";      
btn7.textContent = "Інші селектори";
btn8.textContent = 'Шрифти Текст Таблиці Фон Контур Списки CSS Просунутий';
btn9.textContent = 'Висновки';
function content_load(buttonId) {
    let content = '';
    
  
    switch (buttonId) {
        case 'btn1':
            content = `Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.<br><br>           
Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів<br><br>
ЛР_2:

    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_laba_2.git" target="_blank">репозиторій</a>  і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_laba_2/" target="_blank">живий сайт</a> <br><br>   

СР_2:
    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_sr_2.git" target="_blank">репозиторій</a> і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_sr_2/" target="_blank">живий сайт</a> <br> <br> 
Звіт_html:
    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_report_html.git" target="_blank">репозиторій</a> і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_report_html" target="_blank">живий сайт</a> <br> <br>`;
           
            break;
        case 'btn2':
            content = ` існують декілька способів підключення стилів. а саме:
            <ol style="line-height: 2;">    
            <li>вбудовані стилі: стилі прописуються безпосередньо в тегах HTML-елементів за допомогою атрибута style.</li>  
            <li>внутрішні стилі: CSS-правила визначаються у межах самого HTML-документа в блоці style всередині тегу head.</li>
            <li>зовнішні стилі: илі зберігаються в окремому файлі CSS, який потім підключається  через тег link у блоці head до  HTML-документа.</li>
            <li>імпортовані стилі: стилі імпоруються з якогось інщого CSS файла за допомогою спеціальної команди @import url('назва файлу'); Цей метод можна використовувати всередині іншого CSS-файлу або в блоці style .</li>    
            </ol>
`;
            break;
        case 'btn3':
            content = `<textarea rows="15" cols="80">table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #ddd;
  }
  .class1{
    border: 1px solid #111;
    margin: 10px;
  }
  #img1:hover{
    width: 70%;
  }
  #img1{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
  p{
    font-family: Verdana,sans-serif;
  }
  ol{
    line-height: 2;
  }
  ul{
    list-style-type: circle;
    animation: change_type 5s linear 2s infinite reverse;
  }
  </textarea>`;
            break;
        case 'btn4':
            content = `<textarea rows="15" cols="80">
             td, th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
    }
      p{
    font-family: Verdana,sans-serif;
  }
  ol{
    line-height: 2;
  }
  ul{
    list-style-type: circle;
    animation: change_type 5s linear 2s infinite reverse;
  }
    </textarea>`;
            break;
        case 'btn5':
            content = `<textarea rows="6" cols="35"> 
             .class1{
    border: 1px solid #111;
    margin: 10px;
  }</textarea>`;
            break;
        case 'btn6':
            content = `<textarea rows="8" cols="35">  
  #img1{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
  </textarea>`;
            break;
        case 'btn7':
            content = `
            <textarea rows="10" cols="35">  
 tr:nth-child(even) {
 background-color: #ddd;
  }
#img1:hover{
width: 70%;
  }
</textarea>
`;
            break;
            case 'btn8':
                content =`<textarea rows="30" cols="35">table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #ddd;
  }
  .class1{
    border: 1px solid #111;
    margin: 10px;
  }
  #img1:hover{
    width: 70%;
  }
  #img1{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
  p{
    font-family: Verdana,sans-serif;
  }
  ol{
    line-height: 2;
  }
  ul{
    list-style-type: circle;
  }</textarea>`;
                break;
            case 'btn9':
                content =`Я придбав практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів.
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