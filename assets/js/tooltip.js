
const body = document.querySelector('body');
const tooltip = document.querySelector('#tooltip');
const header = document.querySelector(".top-site");

// quem é o target? quem é o alvo?
//quem.addEventListener("evento", (evento) => {});

tooltip.addEventListener("mouseover", (e) => {

    console.log(e);
    console.log('Altura da pagina', body.clientHeight);
    console.log('Altura da pagina', body.clientWidth);
    console.log('Altura do tooltip', body.clientHeight);
    console.log('Largura do tooltip', body.clientWidth);
    console.log('Altura do mouse', e.clientY);
    console.log('Largura do mouse', e.clientX);

    if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
    const newDiv = document.createElement("div");


    newDiv.classList.add("tooltip");
    newDiv.innerHTML =
        "Meu tooltip com muitas dicas tops demais, aparece e desaparece. "
    newDiv.style.position = "absolute";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.left = (e.clientX + 200 > body.clientWidth? e.clientX - 210: e.clientX + 200) + "px";
    newDiv.style.display = "flex";
    header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout", (e) => {
    if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();

    }
});