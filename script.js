// selected font name
var value = "none";
// variables using when detect tags in html
var select = document.getElementById('font-select');
var element = document.querySelector('html');

// font list
var font_list = [
  {val:"sans serif", txt:"sans serif"},
  {val:"serif", txt:"serif"},
  {val:"Monospace", txt:"Monospace"},
  {val:"Noto Sans JP", txt:"Noto Sans JP"},
  {val:"Noto Serif JP", txt:"Noto Serif JP"},
  {val:"M PLUS 1p", txt:"M PLUS 1p"},
  {val:"M PLUS Rounded 1c", txt:"M PLUS Rounded 1c"},
  {val:"Sawarabi Mincho", txt:"Sawarabi Mincho"},
  {val:"Sawarabi Gothic", txt:"Sawarabi Gothic"},
  {val:"Kosugi Maru", txt:"Kosugi Maru"},
  {val:"Kosugi", txt:"Kosugi"},
];

// load Google Fonts
WebFont.load({
  google: {
    families: ['Noto Sans JP', 'Noto Serif JP', 'M PLUS 1p', 'M PLUS Rounded 1c', 'Sawarabi Mincho', 'Sawarabi Gothic', 'Kosugi Maru', 'Kosugi']
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
    case "sans serif":
      element.className = "sans-serif";
      break;
      case "serif":
        element.className = "serif";
        break;
      case "Monospace":
        element.className = "monospace";
        break;
      case "Noto Sans JP":
        element.className = "noto-sans-jp";
        break;
      case "Noto Serif JP":
        element.className = "noto-serif-jp";
        break;
      case "M PLUS 1p":
        element.className = "m-plus-1p";
        break;
      case "M PLUS Rounded 1c":
        element.className = "m-plus-rounded-1c";
        break;
      case "Sawarabi Mincho":
        element.className = "sawarabi-mincho";
        break;
      case "Sawarabi Gothic":
        element.className = "sawarabi-gothic";
        break;
      case "Kosugi Maru":
        element.className = "kosugi-maru";
        break;
      case "Kosugi":
        element.className = "kosugi";
        break;
    default:
      break;
  }
}