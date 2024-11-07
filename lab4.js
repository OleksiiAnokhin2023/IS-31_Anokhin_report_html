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

    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_laba_4.git" target="_blank">репозиторій</a>  і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_laba_4/" target="_blank">живий сайт</a> <br><br>   

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
            content = `<textarea rows="50" cols="80">
            body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    flex-direction: column; 
    height: 100vh;
}

body::-webkit-scrollbar {
    display: none;
}

main {
    flex-grow: 2;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

h1 {
    margin: 0;
    background-color: #0044cc;
    padding: 15px;
    color: white;
    text-align: center;
    box-sizing: border-box;
}

.nav {
    background-color: #c7c7c7;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(2, auto);
    grid-gap: 1px;
    max-width: 1500px;
    height: 650px;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    padding: 5px;
    box-sizing: border-box;
}

.nav .tag:nth-child(4) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

.tag {
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.tag img {
    width: 100px;
}

.tag h3 {
    margin-top: 5px;
}

.tag_2 {
    cursor: pointer;
    transition: transform 0.3s ease;
    text-align: center;
}

.tag_2:hover {
    transform: scale(1.2);
}
</textarea>
  `;
            break;
        case 'btn4':
            content = `<textarea rows="35" cols="30">
 @media (max-width: 767px) {
    h1 {
        font-size: 1.5em;
        padding: 10px;
    }

    .nav {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }

    .tag img {
        width: 60px; 
    }

    .tag h3 {
        font-size: 0.9em;
    }

    .nav .tag:nth-child(4) {
        grid-column: auto;
        grid-row: auto;
    }
}</textarea>
    `;
            break;
        case 'btn5':
            content = `<textarea rows="45" cols="55"> 
@media (min-width: 768px) and (max-width: 1023px) {
    h1 {
        font-size: 2em;
    }

    .nav {
        grid-template-columns: repeat(2, 1fr); 
        grid-gap: 10px;
    }

    .tag img {
        width: 80px; 
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