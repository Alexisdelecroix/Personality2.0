let container = document.getElementById("container");
let img = document.getElementById("img");
let icone = document.getElementById("icone");
let iconeReverse = document.getElementById("iconeReverse");
let detail = document.getElementById("detail");

let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach((element) => {
    element.addEventListener("click", () => {
        myfunction(element);
    });
});

function myfunction(el) {
    if (el.getAttribute("id") === "btn") {
        btn.classList.add("active")
        btn1.classList.remove("active")
        btn2.classList.remove("active")
        btn3.classList.remove("active")
        btn4.classList.remove("active")
        container.classList.toggle("active");
        img.src = "./images/johnsoncolor.png";
        detail.innerHTML = `   <h1>
            DWAYNE JOHNSON
          </h1>
          <h2>Ses meilleurs films</h2>
  
          <h3>Fast & Furious</h3>
          <h3>Jumanji</h3>
          <h3>Le retour de la momie</h3>`;
    } else if (el.getAttribute("id") === "btn1") {
        btn.classList.remove("active")
        btn1.classList.add("active")
        btn2.classList.remove("active")
        btn3.classList.remove("active")
        btn4.classList.remove("active")
        container.classList.toggle("active");
        img.src = "./images/vincolor.png";
        detail.innerHTML = `   <h1>
            VIN DIESEL
          </h1>
          <h2>Ses meilleurs films</h2>

          <h3>
            les Chroniques <br />
            De Riddick
          </h3>
          <h3>XXX</h3>
          <h3>Fast & Furious</h3>`;
    } else if (el.getAttribute("id") === "btn2") {
        btn.classList.remove("active")
        btn1.classList.remove("active")
        btn2.classList.add("active")
        btn3.classList.remove("active")
        btn4.classList.remove("active")
        container.classList.toggle("active");
        img.src = "./images/imencolor.png";
        detail.innerHTML = `    <h1>
        IMEN ES
      </h1>
      <h2>Ses meilleurs chansons</h2>

      <h3>Fantômes</h3>
      <h3>Première Fois</h3>
      <h3>Essaie Encore</h3>`;
    } else if (el.getAttribute("id") === "btn3") {
        btn.classList.remove("active")
        btn1.classList.remove("active")
        btn2.classList.remove("active")
        btn3.classList.add("active")
        btn4.classList.remove("active")
        container.classList.toggle("active");
        img.src = "./images/jessicacolor.png";
        detail.innerHTML = ` <h1>
                            JESSICA ALBA
      </h1>
      <h2>Ses meilleurs films</h2>

      <h3>Awake</h3>
      <h3>Sin City</h3>
      <h3>Fantastic Four</h3>`;
    } else if (el.getAttribute("id") === "btn4") {
        btn.classList.remove("active")
        btn1.classList.remove("active")
        btn2.classList.remove("active")
        btn3.classList.remove("active")
        btn4.classList.add("active")
        container.classList.toggle("active");
        img.src = "./images/zitacolor.png";
        detail.innerHTML = ` <h1>
        ZITA<br />
        HANROT
      </h1>
      <h2>Ses meilleurs films</h2>

      <h3>La Vie Scolaire</h3>
      <h3>Annie Colere</h3>
      <h3>Rouge</h3>`;
    }
}

icone.addEventListener("click", () => {
    iconeFunct();
});

function iconeFunct() {
    detail.classList.toggle("active");
    img.classList.toggle("active");

    if (iconeReverse.classList.contains('fa-arrow-right')) {
        iconeReverse.classList.remove('fa-arrow-right');
        iconeReverse.classList.add('fa-arrow-left');
        icone.classList.add("active");
      } else {
        iconeReverse.classList.remove('fa-arrow-left');
        iconeReverse.classList.add('fa-arrow-right');
        icone.classList.remove("active");
      }
}
