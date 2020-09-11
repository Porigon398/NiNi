// selected font name
var value = "none";
// variables using when detect tags in html
var select = document.getElementById('font-select');
var element = document.querySelector('html');

// font list
var font_list = [
  {val:"serif", txt:"serif"},
  {val:"Kufam", txt:"Kufam"},
  {val:"Grandstander", txt:"Grandstander"},
  {val:"Syne", txt:"Syne"},
  {val:"Roboto Mono", txt:"Roboto Mono"},
];

// load Google Fonts
WebFont.load({
  google: {
    families: ['Kufam', 'Grandstander', 'Syne', 'Roboto Mono']
  }
});

// add font name to pull down
function readFirst() {
  for(var i=0; i<font_list.length; i++) {
    let opt = document.createElement("option");
    opt.value = font_list[i].val;
    opt.text = font_list[i].txt;
    document.getElementById("font-select").appendChild(opt);
  }
};

// change html class depend on selected font from pull down
select.onchange = function() {
  selectedItem = this.options[this.selectedIndex];
  value = selectedItem.value
  // in case of debug, leave comment
  console.log(value + " selected!");

  switch (value) {
    case "serif":
      element.className = "serif";
      break;
    case "Kufam":
      element.className = "kufam";
      break;
    case "Grandstander":
      element.className = "grandstander";
      break;
    case "Syne":
      element.className = "syne";
      break;
    case "Roboto Mono":
      element.className = "roboto-mono";
      break;
    default:
      break;
  }
}