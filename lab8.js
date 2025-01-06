const output = document.getElementsByClassName('output')[0]; 
 const btn1 = document.getElementById('btn1');
 const btn2 =document.getElementById('btn2');
 const btn3 = document.getElementById('btn3');
 const btn4 = document.getElementById('btn4');
 document.getElementById('btn5').remove();
 document.getElementById('btn6').remove();
 document.getElementById('btn7').remove();

 btn1.textContent  = "Тема Мета Місце розташування лабораторної роботи";
btn2.textContent = "ЗАВДАННЯ №1";
btn3.textContent = "ЗАВДАННЯ №2";
btn4.textContent = "Висновки";  
function content_load(buttonId) {
    let content = '';
    
  
    switch (buttonId) {
        case 'btn1':
            content = `Тема: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.<br><br>           
Мета: придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.<br><br>
ЛР_8:

    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_laba_8.git" target="_blank">репозиторій</a>  і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_laba_8/" target="_blank">живий сайт</a> <br><br>   

Звіт_html:
    <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_report_html.git" target="_blank">репозиторій</a> і
    <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_report_html" target="_blank">живий сайт</a> <br> <br>`;
           
            break;
        case 'btn2':
            content = ` <img src="img/lab8/image.png" alt="" style="width:900px;"><br>
            <textarea rows="50" cols="80">

            index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="CSS/style.css">
  <title>Gallery</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css">
</head>
<body>
  <header></header>
  <main>
  <ul class="gallery"></ul>
</main>
<footer></footer>
  <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>
  <script src="JS/gallery.js"></script>
</body>
</html>

style.css

body {
    font-family: Arial, sans-serif;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 0;
  }

  .gallery__item {
    flex: 1 1 calc(33.333% - 10px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .gallery__image {
    width: 100%;
    height: auto;
    display: block;
    cursor: pointer;
  }

    gallery.js

const images = [
    {
      preview: '/img/small/img1.jpg',
      original: '/img/big/img1.png',
      description: 'Перше зображення',
    },
    {
      preview: '/img/small/img2.jpg',
      original: '/img/big/img2.png',
      description: 'Друге зображення',
    },
    {
      preview: '/img/small/img3.jpg',
      original: '/img/big/img3.png',
      description: 'Четверте зображення',
    },
        {
          preview: '/img/small/img4.jpg',
          original: '/img/big/img4.jpg',
          description: 'Четверте зображення',
        },
        {
          preview: '/img/small/img5.jpg',
          original: '/img/big/img5.jpg',
          description: 'П’яте зображення',
        },
        {
          preview: '/img/small/img6.jpg',
          original: '/img/big/img6.jpg',
          description: 'Шосте зображення',
        },
        {
          preview: '/img/small/img7.jpg',
          original: '/img/big/img7.jpg',
          description: 'Сьоме зображення',
        },
        {
          preview: '/img/small/img8.jpg',
          original: '/img/big/img8.jpg',
          description: 'Восьме зображення',
        },
        {
          preview: '/img/small/img9.jpg',
          original: '/img/big/img9.jpg',
          description: 'Дев’яте зображення',
        },
        {
          preview: '/img/small/img10.jpg',
          original: '/img/big/img10.jpg',
          description: 'Десяте зображення',
        },
        {
          preview: '/img/small/img11.jpg',
          original: '/img/big/img11.jpg',
          description: 'Одинадцяте зображення',
        },
        {
          preview: '/img/small/img12.jpg',
          original: '/img/big/img12.jpg',
          description: 'Дванадцяте зображення',
        },
        {
          preview: '/img/small/img13.jpg',
          original: '/img/big/img13.jpg',
          description: 'Тринадцяте зображення',
        },
        {
          preview: '/img/small/img14.jpg',
          original: '/img/big/img14.jpg',
          description: 'Чотирнадцяте зображення',
        },
        {
          preview: '/img/small/img15.jpg',
          original: '/img/big/img15.jpg',
          description: 'П’ятнадцяте зображення',
        },
        {
          preview: '/img/small/img16.jpg',
          original: '/img/big/img16.jpg',
          description: 'Шістнадцяте зображення',
        },
        {
          preview: '/img/small/img17.jpg',
          original: '/img/big/img17.jpg',
          description: 'Сімнадцяте зображення',
        },
        {
          preview: '/img/small/img18.jpg',
          original: '/img/big/img18.jpg',
          description: 'Вісімнадцяте зображення',
        },
        {
          preview: '/img/small/img19.jpg',
          original: '/img/big/img19.jpg',
          description: 'Дев’ятнадцяте зображення',
        },
        {
          preview: '/img/small/img20.jpg',
          original: '/img/big/img20.jpg',
          description: 'Двадцяте зображення',
        },
        {
          preview: '/img/small/img21.jpg',
          original: '/img/big/img21.jpg',
          description: 'Двадцять перше зображення',
        },
        {
          preview: '/img/small/img22.jpg',
          original: '/img/big/img22.jpg',
          description: 'Двадцять друге зображення',
        },
        {
          preview: '/img/small/img23.jpg',
          original: '/img/big/img23.jpg',
          description: 'Двадцять третє зображення',
        },
        {
          preview: '/img/small/img24.jpg',
          original: '/img/big/img24.jpg',
          description: 'Двадцять четверте зображення',
        },
        {
          preview: '/img/small/img25.jpg',
          original: '/img/big/img25.jpg',
          description: 'Двадцять п’яте зображення',
        },
        {
          preview: '/img/small/img26.jpg',
          original: '/img/big/img26.jpg',
          description: 'Двадцять шосте зображення',
        },
        {
          preview: '/img/small/img27.jpg',
          original: '/img/big/img27.jpg',
          description: 'Двадцять сьоме зображення',
        },
        {
          preview: '/img/small/img28.jpg',
          original: '/img/big/img28.jpg',
          description: 'Двадцять восьме зображення',
        },
        {
          preview: '/img/small/img29.jpg',
          original: '/img/big/img29.jpg',
          description: 'Двадцять дев’яте зображення',
        },
        {
          preview: '/img/small/img30.jpg',
          original: '/img/big/img30.jpg',
          description: 'Тридцяте зображення',
        },      
  ];
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML  = images.map(({preview,original,description})=>{
    return\`<li class = "gallery__item">
    <img class = "gallery__image" src ="\${preview}" data-original ="\${original}" alt = "\${description}"/>
    </li>\`;
  }).join('');

gallery.addEventListener('click',(event)=>{
   let target = event.target;
   if(target.tagName !='IMG') return;
    Open_modal_window(target);
});

const Open_modal_window = (img)=>{
    basicLightbox.create(\`
    <img src="\${img.dataset.original}" alt="\${img.alt}">
  \`).show();
};
</textarea> 
            `;
            break;
        case 'btn3':
            content = ` <img src="img/lab8/image2.png" alt="" style="width:900px;"><br>
            <textarea rows="50" cols="80">
2-form.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(to right, #6a11cb, #2575fc);
            color: #fff;
        }

        header, footer {
            text-align: center;
            padding: 20px;
        }

        main {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
        }

        .feedback-form {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            max-width: 400px;
            width: 100%;
        }

        .feedback-form label {
            display: block;
            margin-bottom: 15px;
            font-size: 1rem;
        }

        .feedback-form input,
        .feedback-form textarea {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
        }

        .feedback-form input {
            height: 40px;
        }

        .feedback-form textarea {
            resize: none;
        }

        .feedback-form button {
            width: 100%;
            padding: 10px 15px;
            margin-top: 20px;
            background: #2575fc;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
        }

        .feedback-form button:hover {
            background: #1a5db5;
        }
    </style>
</head>
<body>
    <header></header>
    <main>
        <form class="feedback-form" autocomplete="off">
        <label>
            Email
            <input type="email" name="email" autofocus />
        </label>
        <label>
            Message
            \<textarea name="message" rows="8"\>\<textarea\>
        </label>
        <button type="submit">Submit</button>
        </form>

    </main>
    <footer></footer>
    <script src="2-form.js"></script>
</body>
</html>

2-form.js

const formData = JSON.parse(localStorage.getItem('feedback-form-state'))||{
email:"",
message: "" 
}
const form = document.querySelector('.feedback-form');
if(formData.email){
    form.elements.email.value = formData.email;
}
if(formData.message){
    form.elements.message.value = formData.message;
}

form.addEventListener('input',(event)=>{
const {name,value} = event.target;
if(name){
    formData[name]=value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

});

form.addEventListener('submit',(event)=>{
    form.preventDefault();
    if(!form.elements.email.value || !form.elements.message.value){
        alert('fulfill all fields'); return;
    }
    localStorage.removeItem('feedback-form-state');
    formData.email ='';
    formData.message ='';
    form.reset();
    });
</textarea>
  `;
            break;
        case 'btn4':
            content = `Я придбав практичні навички створення модального вікна; повторив процес створення макету, зокрема створення макету галереї довільних зображень; закріпив навички роботи з делегуванням подій.
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