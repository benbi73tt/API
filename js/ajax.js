console.log('hello');



window.onload=function(){
    let rub=document.querySelector('#rub');
    let usd=document.querySelector('#usd');

rub.addEventListener('input',function(){
    let request=new XMLHttpRequest();
     request.open('GET','/js/current.json');
     request.setRequestHeader('Content-type','application/json; charset=utf-8');
     request.send();

     request.addEventListener('readystatechange',function(){
         if(request.readyState===4&&request.status===200){
            let data = JSON.parse(request.response);

            usd.value=rub.value/data.usd;
            console.log(data.usd);
         }
         else{
             usd.value='Что-то пошло не так!';
         }
     });
});
}