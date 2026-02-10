window.addEventListener('DOMContentLoaded', () => {
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
