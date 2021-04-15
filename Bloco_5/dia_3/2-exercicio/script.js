function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercicio 1:


//O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro:

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

function completeMonth(array) {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let element = document.createElement('li');
    let days = document.getElementById('days');
    element.innerText = array[index];
    element.setAttribute('class', 'day');
    days.appendChild(element);
  }
}
completeMonth(dezDaysList)


//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

function holidays(holid) {
  for (let key of holid)  {
    for (let index2 = 0; index2 < document.getElementsByClassName('day').length; index2 += 1) {
      if (key.toString() === document.getElementsByClassName('day')[index2].innerText) {
        document.getElementsByClassName('day')[index2].className += (' holiday');
      }
    }
  }
}
holidays([24,25,31]);



//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function fridays(days) {
  for (let fri of days)  {
    for (let index3 = 0; index3 < document.getElementsByClassName('day').length; index3 += 1) {
      if (fri.toString() === document.getElementsByClassName('day')[index3].innerText) {
        document.getElementsByClassName('day')[index3].className += (' friday');
      }
    }
  }
}
fridays([4,11,18,25]);