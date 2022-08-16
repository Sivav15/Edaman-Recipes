document.getElementsByClassName("button")[0].addEventListener("click", () => {
  let input_value = document.getElementsByClassName("inputbox")[0].value;
  loadings(input_value);
});
function loadings(value) {
  function domain() {
      let url = `https://api.edamam.com/search?q=${value}&app_id=b44cf4e2&app_key=1b4d48a5d8b6a9fb556f2170d272b78c&from=0&to=3&calories=591-722&health=alcohol-free`;
      fetch(url)
    .then((data) => data.json())
    .then((data1) => {
      console.log(data1);
      document.querySelectorAll('.main_container').forEach(e => {
        console.log(e);
        e.remove()
      });
      let container = document.createElement("div");
      container.setAttribute("class", "main_container");
      container.classList.add("d-flex", "flex-row", "justify-content-center", "flex-wrap");
      container.style.margin = "10px";
      container.style.overflowX = "hidden";
      document.body.append(container);
      document.getElementsByClassName("title")[0].innerHTML = data1.q;
      //........................................
      for (let i = 0; i < (data1.hits.length); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "div");
        //.........................................................
        let center = document.createElement("div");
        center.setAttribute("class", "center");
        let img = document.createElement("img");
        let a = data1.hits[i].recipe.image;
        img.src = a;
        //........................................................
        let food_name = document.createElement("h4");
        food_name.setAttribute("class", "h4");
        food_name.innerHTML = data1.hits[i].recipe.label;
        //..................................................
        let hed = document.createElement("h5");
        hed.setAttribute("class", "hed");
        hed.innerHTML = "Nutrition : -";
        //.................................................
        let cal = document.createElement("p");
        cal.innerHTML = `${data1.hits[i].recipe.totalNutrients.CA.label} : ${Math.round(data1.hits[i].recipe.totalNutrients.CA.quantity)} ${data1.hits[i].recipe.totalNutrients.CA.unit} `;
        //..................................................
        let fat = document.createElement("p");
        fat.innerHTML = `${data1.hits[i].recipe.totalNutrients.FAT.label} : ${Math.round(data1.hits[i].recipe.totalNutrients.FAT.quantity)} ${data1.hits[i].recipe.totalNutrients.FAT.unit} `;
        //................................................................
        let Phosphorus = document.createElement("p");
        Phosphorus.innerHTML = `${data1.hits[i].recipe.totalNutrients.P.label} : ${Math.round(data1.hits[i].recipe.totalNutrients.P.quantity)} ${data1.hits[i].recipe.totalNutrients.P.unit} `;
        //................................................................
        let iron = document.createElement("p");
        iron.innerHTML = `${data1.hits[i].recipe.totalNutrients.FE.label} : ${Math.round(data1.hits[i].recipe.totalNutrients.FE.quantity)} ${data1.hits[i].recipe.totalNutrients.FE.unit} `;
        //................................................................
        let fiber = document.createElement("p");
        fiber.innerHTML = `${data1.hits[i].recipe.totalNutrients.FIBTG.label} : ${Math.round(data1.hits[i].recipe.totalNutrients.FIBTG.quantity)} ${data1.hits[i].recipe.totalNutrients.FIBTG.unit} `;
        //........................................................................
        let proten = document.createElement("p");
        proten.innerHTML = `${data1.hits[i].recipe.totalNutrients.PROCNT.label} : ${Math.round(data1.hits[i].recipe.totalNutrients.PROCNT.quantity)} ${data1.hits[i].recipe.totalNutrients.PROCNT.unit} `;
        //....................................
        let div_link = document.createElement("div");
        div_link.setAttribute("class", "link");
        let anchor = document.createElement("a");
        anchor.innerHTML = " More details click here";
        anchor.href = data1.hits[i].recipe.url;
        anchor.target = "_blank";
        anchor.setAttribute("class", "link1")
        container.append(div);
        div.append(center, food_name, hed, cal, fat, Phosphorus, iron, fiber, proten, div_link);
        center.append(img);
        div_link.append(anchor);
      }
    })
    .catch((err) => console.log(err));
  }
  domain()
}

let input_value = document.getElementsByClassName("inputbox")[0].value;

loadings(input_value);


