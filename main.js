const i18n = {
  en: {
    title: "War Calculator",
    labelA: "Your Score",
    labelB: "Opponent's Score",
    btn: "Calculate",
    resText: "Required Time: ",
    unit: "minutes",
  },
  zh: {
    title: "戰爭時間計算機",
    labelA: "我方分數",
    labelB: "敵方分數",
    btn: "計算",
    resText: "所需時間：",
    unit: "分鐘",
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const userLang = navigator.language.startsWith('zh') ? 'zh' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');

    if (el.tagName === 'INPUT') {
      el.value = i18n[userLang][key];
    } else {
      el.innerText = i18n[userLang][key];
    }
  });


  const form = document.getElementById('calculator');
  const A = document.getElementById("A");
  const B = document.getElementById("B");
  const result = document.getElementById("result");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let a = Number(A.value);
      let b = Number(B.value);


      let time = 0;

      while (a < 300) {
        let ground = Math.floor((a + b) / 100) + 1;
        a += ground;
        time++;
      }

      result.textContent = (time * 2).toString();
    })
  }
})

function changeLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT') {
      el.value = i18n[lang][key];
    } else {
      el.innerText = i18n[lang][key];
    }
  });
}