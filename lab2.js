
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
            content = `<textarea rows="150" cols="90">table {
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
            content = `
            <img src="img/lab1/image2.png" alt="" style="width:900px;"><br>
            <img src="img/lab1/image2.2.png" alt="" style="width:900px;"><br>
            <img src="img/lab1/image2.3.png" alt="" style="width:900px;"><br>
            <textarea rows="15" cols="80">
             <table>
            <tr>
                <th>Модель</th>
                <th>тип</th>
                <th>дальнобойность</th>
                <th>точность</th>
                <th>дополнительное снаряжение</th>
                <th>начало експлоутации</th>
            </tr>
            <tr>
                <td>M4 Carbine</td>
                <td>Карабин</td>
                <td>500-600 метров (эффективная)</td>
                <td>Высокая на коротких и средних дистанциях</td>
                <td>Оптические прицелы, глушитель, подствольный гранатомет M203, лазерные целеуказатели</td>
                <td>1994 год</td>
            </tr>
            <tr>
                <td>M16A4 Rifle</td>
                <td>Автоматическая винтовка</td>
                <td>550 метров (эффективная)</td>
                <td>Высокая на средних и дальних дистанциях</td>
                <td>Оптические прицелы ACOG, лазерные целеуказатели, глушитель</td>
                <td>1997 год</td>
            </tr>
            <tr>
                <td>M249 SAW (Squad Automatic Weapon)</td>
                <td>Легкий пулемет</td>
                <td>800 метров (эффективная)</td>
                <td>Средняя</td>
                <td>Оптический прицел, лазерные целеуказатели, складной сошник</td>
                <td>1984 год</td>
            </tr>
            <tr>
                <td>M2010 Enhanced Sniper Rifle</td>
                <td>Снайперская винтовка</td>
                <td>1200 метров (эффективная)</td>
                <td>Очень высокая</td>
                <td>Оптический прицел, глушитель ,  сошник</td>
                <td>2010 год</td>
            </tr>
            <tr>
                <td>M2010 Enhanced Sniper Rifle</td>
                <td>Снайперская винтовка</td>
                <td>1200 метров (эффективная)</td>
                <td>Очень высокая</td>
                <td>Оптический прицел, глушитель, сошник</td>
                <td>2010 год</td>
            </tr>
        </table>
            table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
             td, th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
    }
        <p>
        <mark style="font-size: 180%"><strong >Основные роли в батальоне</strong></mark>
    <ol>
            <li><b> Командир батальона <small>(Battalion Commander)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Подполковник <small>(Lieutenant Colonel)</small></li>
                <li><i>Ответственность:</i> Общее командование батальоном, принятие решений по тактике и стратегии, взаимодействие с вышестоящими командующими.</li>
            </ul>
            <li><b>Заместитель командира батальона <small> (Executive Officer, XO)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Майор <small>(Major)</small></li>
                <li><i>Ответственность:</i> Административное управление, помощь командиру батальона, координация работы штабного персонала.</li>
            </ul>
            <li> <b>Сержант-майор батальона <small>(Command Sergeant Major)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Сержант-майор <sup>(Command Sergeant Major)</sup></li>  
                <li><i>Ответственность:</i> Руководство сержантами, поддержание дисциплины и стандартов выполнения задач, советник командира по вопросам личного состава.</li> 
            </ul>
            <li><b>Офицер по операциям <small>(Operations Officer, S3)</small>:</b></li>
            <ul>
                <li> <i>Звание:</i> Майор или капитан <small>(Major/Captain)</small></li>
                <li><i>Ответственность:</i> Планирование и координация операций, разработка тактических планов, управление учениями и тренировками.</li>
            </ul>
            <li><b>Офицер по логистике <small>(Logistics Officer, S4):</small></b></li>
            <ul>
                <li><i>Звание:</i> Капитан <small>(Captain)</small></li>
                <li><i>Ответственность:</i> Управление снабжением, транспортом и материально-техническим обеспечением батальона.</li>
            </ul>
            <li><b>Офицер по разведке <small>(Intelligence Officer, S2)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Капитан или лейтенант <small>(Captain/Lieutenant)</small></li>
                <li><i>Ответственность:</i> Сбор и анализ разведывательной информации, обеспечение безопасности информации.</li>
            </ul>
            <li><b>Офицер по персоналу <small>(Personnel Officer, S1)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Капитан или лейтенант <small>(Captain/Lieutenant)</small></li>
                <li><i>Ответственность:</i> Управление кадровыми вопросами, администрирование личного состава, моральное состояние солдат.</li>
            </ul>
            <li> <b>Офицер по гражданским делам <small>(Civil Affairs Officer)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Капитан или лейтенант <small>(Captain/Lieutenant)</small></li>
                <li><i>Ответственность:</i> Координация взаимодействия с гражданским населением и местными властями в зоне операций.</li>
            </ul>
    </ol>

        <mark style="font-size: 180%"><strong >Структура батальона</strong></mark>
    Батальон обычно включает несколько рот:  
        Командная рота (Headquarters Company):
        
        Обеспечивает <a href="https://ru.wikipedia.org/wiki/%D0%A8%D1%82%D0%B0%D0%B1">штабные функции</a>x и поддержку командования.
        Включает секции по планированию, связи и управлению огнём.
        Боевые роты (Line Companies):
        
        Несколько рот, в зависимости от типа батальона (например, пехотный, танковый).
        Каждая рота выполняет свои специализированные задачи, такие как штурмовые действия или оборона.
        Подразделения поддержки (Support Units):
        
        Могут включать медиков, инженеров и артиллерийские подразделения, обеспечивающие боевую и техническую поддержку.
        Дополнительные ключевые роли
        Старший медицинский офицер (Senior Medical Officer): Управляет медицинской службой батальона, обеспечивает медицинскую помощь.
        Офицер по связи (Communications Officer): Обеспечивает связь и координацию внутри батальона и с вышестоящими подразделениями.
        Батальон действует как целостная единица, где каждая роль и подразделение дополняют друг друга, обеспечивая эффективность и боеспособность в различных условиях.</p>
      p{
    font-family: Verdana,sans-serif;
  }
    <ol>
            <li><b> Командир батальона <small>(Battalion Commander)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Подполковник <small>(Lieutenant Colonel)</small></li>
                <li><i>Ответственность:</i> Общее командование батальоном, принятие решений по тактике и стратегии, взаимодействие с вышестоящими командующими.</li>
            </ul>
            <li><b>Заместитель командира батальона <small> (Executive Officer, XO)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Майор <small>(Major)</small></li>
                <li><i>Ответственность:</i> Административное управление, помощь командиру батальона, координация работы штабного персонала.</li>
            </ul>
            <li> <b>Сержант-майор батальона <small>(Command Sergeant Major)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Сержант-майор <sup>(Command Sergeant Major)</sup></li>  
                <li><i>Ответственность:</i> Руководство сержантами, поддержание дисциплины и стандартов выполнения задач, советник командира по вопросам личного состава.</li> 
            </ul>
            <li><b>Офицер по операциям <small>(Operations Officer, S3)</small>:</b></li>
            <ul>
                <li> <i>Звание:</i> Майор или капитан <small>(Major/Captain)</small></li>
                <li><i>Ответственность:</i> Планирование и координация операций, разработка тактических планов, управление учениями и тренировками.</li>
            </ul>
            <li><b>Офицер по логистике <small>(Logistics Officer, S4):</small></b></li>
            <ul>
                <li><i>Звание:</i> Капитан <small>(Captain)</small></li>
                <li><i>Ответственность:</i> Управление снабжением, транспортом и материально-техническим обеспечением батальона.</li>
            </ul>
            <li><b>Офицер по разведке <small>(Intelligence Officer, S2)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Капитан или лейтенант <small>(Captain/Lieutenant)</small></li>
                <li><i>Ответственность:</i> Сбор и анализ разведывательной информации, обеспечение безопасности информации.</li>
            </ul>
            <li><b>Офицер по персоналу <small>(Personnel Officer, S1)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Капитан или лейтенант <small>(Captain/Lieutenant)</small></li>
                <li><i>Ответственность:</i> Управление кадровыми вопросами, администрирование личного состава, моральное состояние солдат.</li>
            </ul>
            <li> <b>Офицер по гражданским делам <small>(Civil Affairs Officer)</small>:</b></li>
            <ul>
                <li><i>Звание:</i> Капитан или лейтенант <small>(Captain/Lieutenant)</small></li>
                <li><i>Ответственность:</i> Координация взаимодействия с гражданским населением и местными властями в зоне операций.</li>
            </ul>
    </ol>
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
            content = `
            <img src="img/lab1/image2.4.png" alt="" style="width:900px;"><br>
            <textarea rows="6" cols="35"> 
             <div class="class1">fvdvfidjvodvidofvjfdo</div>
             .class1{
    border: 1px solid #111;
    margin: 10px;
  }</textarea>`;
            break;
        case 'btn6':
            content = `
            <img src="img/lab1/image2.5.png" alt="" style="width:900px;"><br>
            <textarea rows="8" cols="35">  
            <img src="phorm.webp" alt="" id="img1">
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
*{
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