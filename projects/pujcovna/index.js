"use strict";

document.getElementById("suma").addEventListener("click", function (e) {
  let cena = 0;
  const chbBroup = document.querySelectorAll(".chb-group");
  const nmbrGroup = document.querySelectorAll(".nbmr-group");
  const rbGroup = document.querySelector('input[name="nosic"]:checked').value;

  for (let i = 0; i < chbBroup.length; i++) {
    if (chbBroup[i].checked) {
      cena += parseInt(chbBroup[i].value) * parseInt(nmbrGroup[i].value);
    }
  }

  cena *= parseInt(document.getElementById("doba").value);

  cena *= parseFloat(rbGroup);

  document.getElementById(
    "info-cena"
  ).textContent = `Celková cena je ${parseInt(cena)} Kč.`;

  document
    .getElementById("btn-rozpocet")
    .addEventListener("click", function (e) {
      let rozpocet = parseFloat(document.getElementById("rozpocet").value);
      let rozdil = rozpocet - cena;

      if (rozdil > 0) {
        document.getElementById(
          "info-rozpocet"
        ).textContent = `Máš nato, zbude ti ${parseInt(rozdil)} Kč.`;
      } else {
        document.getElementById(
          "info-rozpocet"
        ).textContent = `Nemáš nato, chybí ti ${parseInt(rozdil) * -1} Kč.`;
      }
    });
});

document.getElementById("email").addEventListener("keyup", function (e) {
  let test = document.getElementById("email").value;
  if (test.includes("@")) {
    document.getElementById("odesli").removeAttribute("disabled");
  } else {
    document.getElementById("odesli").setAttribute("disabled", true);
  }
});
