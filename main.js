function myFunction(){

    let numb = Math.floor(Math.random() * 10)

    while(true){
        let a = Number(prompt('Ты должен угадать число от 0 до 10'));
        if(numb==a){
            document.getElementById('wynik').innerHTML = "Ты угадал )";
            break;
        } else {
            document.getElementById('wynik').innerHTML = "Попробуй снова, дибил блять )";
        }
    }
}