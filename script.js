let op11 = document.getElementById('option11');
let op12 = document.getElementById('option12');
let op13 = document.getElementById('option13');
let op14 = document.getElementById('option14');
let op21 = document.getElementById('option21');
let op22 = document.getElementById('option22');
let op23 = document.getElementById('option23');
let op24 = document.getElementById('option24');
let op31 = document.getElementById('option31');
let op32 = document.getElementById('option32');
let op33 = document.getElementById('option33');
let op34 = document.getElementById('option34');
let ques1 =document.getElementById('ques1');
let ques2 =document.getElementById('ques2');
let ques3 =document.getElementById('ques3');
let score = 0;

function submit()
{
    if (op13.checked) {
        score = score + 1;
        ques1.style.backgroundColor='green'
    } else {
        score = score;
        ques1.style.backgroundColor='red'
  }
    if (op21.checked) {
        score = score + 1;
        ques2.style.backgroundColor='green'
} else {
        score = score;
        ques2.style.backgroundColor='red'

    }
    if (op34.checked) {
        score = score + 1;
        ques3.style.backgroundColor='green'
    } else {
        score = score;
        ques3.style.backgroundColor='red'

    }
    console.log(score)
    document.getElementById('result').innerHTML =`result: ${score} correct out of 3 `
    score = 0;
}