let yearOfBirth = +prompt(`Введите свой год рождения`) ;

if(yearOfBirth){
    let age=`Ваш возраст ` + (2021-yearOfBirth); 
    let city = prompt(`Введите город , в котором проживаете`);

    if(city){
        switch (city) {
            case `Киев`:
                cityType=`Ты живешь в столице Украины`;
                break;
            case `Москва`:
                alert(`Ты живешь в столице России`);
                break;
            case `Минск`:
                cityType=`Ты живешь в столице Белоруссии`;
                break;   
            default:
                cityType=`Ты живешь в городе ${city}`;
        }

        let favSport = prompt(`Укажите ваш любимый спорт`);

        if(favSport){
            switch (favSport) {
                case `Баскетбол`:
                    sportType=`Круто! Хочешь стать как Майкл Джордан?`;
                    break;
                case `Футбол`:
                    sportType=`Круто! Хочешь стать как Лионель Месси?`;
                    break;
                case `Бокс`:
                    sportType=`Круто! Хочешь стать как Виталий Кличко?`;
                    break;
                    default:
                    sportType=`Круто! Ты занимаешься видом спорта:  ${favSport}`;
            }

            let user={
                age, 
                cityType,
                sportType
            }
            
            alert(user.age + "\n" + user.cityType + "\n" + user.sportType);
            
        }

        else{
            alert(`Жаль, что Вы не захотели указать свой любимый спорт`);
        }
        
    }

    else{
        alert(`Жаль, что Вы не захотели ввести свой город`);
    }
}

else{
    alert(`Жаль , что вы не указали свой возраст`);
}