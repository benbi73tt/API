// let options={
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size:'16px',
//         color: 'white'
//     }
// };

// console.log(JSON.stringify(options));//перевод объекта в JSON(На сервер)

// console.log(JSON.parse(JSON.stringify(options)));//Принимать и преобразовывать данные с сервера
alert('hello');
let inputRub = document.getElementById('rub'),
    inputUsd=document.getElementById('usd');

inputRub.addEventListener('input', () => {

    //!1) решили пойти в магазин
    let request=new XMLHttpRequest();//Главный объект для работы с реакт запросами, у него есть свои св-ва методы и события

    //! request.open(method,url,async,login,pass);
    //open производит настройку AJAX запроса, может принимать 5 аргументов
    //method (get/post) получить/отправить данные на сервер
    //url путь к серверу (локальный/облачный)
    //async (true/false), если false, то мы не сможем работать пока нет ответа от сервера
    //login
    //pass

    //!2) что там нужно взять с собой (зачем и куда)
    request.open('GET','/js/current.json');

    //!3) Что хотим купить
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    //setRequestHeader - настройка http запросов и внутри него контент

    //!4) идём в магазин
    request.send();//открывает соединение и открывает запрос на сервер


    //status- код ответа сервера( состояние 404 или др )(Магазин закрыт/открыт/обед)
    //statusText - текстовый ответ от сервера
    //responseText / response - то что разработчик хочет послать со своего раб окружения(товары в магазине)
    //readyState - текущее состоянее запроса( всего их 5 (от 0 до 4))

    request.addEventListener('readystatechange',function(){
        if (request.readyState===4 && request.status===200){
            let data=JSON.parse(request.response);//responce- ответ от сервера

            console.log(data.usd);
            inputUsd.value = inputRub.value / data.usd;
        }
        else{
            inputUsd.value='Что-то пошло не так!';
        }
    });

});