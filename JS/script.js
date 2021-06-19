let user = {
    birthYear : +prompt(`Введите свой год рождения`) ,
    currentCity : prompt(`Введите город , в котором проживаете`), 
    favoriteSport : prompt(`Укажите ваш любимый спорт`),
}

if (user.birthYear) {
    alert(`Ваш возраст ${Math.abs(user.birthYear -= 2021)}`);    
} else {
    alert(`Жаль , что вы не указали свой возраст`);
}


switch (user.currentCity) {
    case `киев`:
        alert(`Ты живешь в столице Украины`);
        break;
    case `москва`:
        alert(`Ты живешь в столице России`);
        break;
    case `минск`:
        alert(`Ты живешь в столице Белоруссии`);
        break;   
    case userCurrentCity:
       alert(`ты живешь в городе ${userCurrentCity}`);
        break;         
    default:
           alert(`Жаль, что Вы не захотели ввести свой город`);
        break;
}

switch (user.favoriteSport) {
    case `баскетбол`:
        alert(`Круто! Хочешь стать как Майкл Джордан?)`);
        break;
    case `футбол`:
        alert(`Круто! Хочешь стать как Лионель Месси?)`);
        break;
    case `бокс`:
        alert(`Круто! Хочешь стать как Виталий Кличко?)`);
        break;
    default:
        alert(`Жаль, что Вы не захотели указать свой любимый спорт`);
        break;
}

// for (let key in user) {
//     alert(user[key]);
// }
