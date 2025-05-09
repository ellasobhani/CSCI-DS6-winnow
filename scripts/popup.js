let search = "";
const input = document.getElementById("winnow-input");
const button = document.getElementById("winnow-button");

input.addEventListener("input", function(e){
    search = e.target.value;
    console.log(search);
});
input.addEventListener("keyup", function(e){
  if(e.key == "Enter"){
    winnowSearch();
  }
});
button.addEventListener("click", winnowSearch);

function winnowSearch() {
    const url = new URL(`https://en.wikipedia.org/wiki/${search}`);
    open(url);
};
