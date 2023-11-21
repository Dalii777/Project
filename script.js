let plus_btn = document.getElementsByClassName("plus_btn");
let qte = document.getElementById("qte");
let games = [
    {
      poster: "Leon.webp",
      name: "Resident Evil 4 ",
      price: "60$",
    },
    {
      poster: "Red_Dead_Redemption_II.jpg",
      name: "Red Dead Redemption ",
      price: "60$",
    },
    {
      poster: "Outlast.webp",
      name: "Outlast ",
      price: "60$",
    },
    {
      poster: "re7.jpeg",
      name: "Resident Evil 7 ",
      price: "60$",
    },
    {
      poster: "call of cthulhu.jpeg",
      name: "Call of Cthulhu ",
      price: "60$",
    },
    {
      poster: "re4.jpeg",
      name: "Resident Evil 4 ",
      price: "60$",
    },
  ];
  let item_list=document.getElementsByClassName("item_list")
for (let index = 0; index < plus_btn.length; index++) {
  plus_btn[index].addEventListener("click", function () {
    qte.textContent = Number(qte.textContent) + 1;
    let new_item = document.createElement("li");
  let item_poster = document.createElement("img");
  let item_name = document.createElement("p");
  let item_price = document.createElement("span");
  item_poster.src=games[index].poster
  item_name.textContent=games[index].name
  item_price.textContent=games[index].price
  new_item.appendChild(item_poster)
  new_item.appendChild(item_name)
  new_item.appendChild(item_price)
  item_list[0].appendChild(new_item)
  });
  
}
let pannier_shop = document.getElementsByClassName("pannier_shop");
let panier = document.getElementById("panier");

panier.addEventListener("click", function () {
  if (pannier_shop[0].style.display == "block") {
    pannier_shop[0].style.display = "none";
  } else {
    pannier_shop[0].style.display = "block";
  }
});

