const uis = [{
  href: "01-html-navBar",
  text: "Header NavBar"
}];


function createLink(item) {
  var link = document.createElement("a");
  link.href = item.href;
  link.textContent = item.text;
  return link;
}


function createUILists(uis) {
  var listItems = uis.map(function (ui, i) {
    var li = document.createElement("li");
    li.style.position = "relative";

    var link = createLink(ui);
    li.appendChild(link);
    return li;
  });

  return listItems;
}



const list = document.querySelector(".list");
const elmentsUI = createUILists(uis)
elmentsUI.forEach(function (elment) {
  list.appendChild(elment)
});