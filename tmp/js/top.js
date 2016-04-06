$(function(){
});

function displayDate() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  h = ("0"+h).slice(-2);
  m = ("0"+m).slice(-2);
  s = ("0"+s).slice(-2);

  $("#date").text(h+":"+m+":"+s);
}

$("#alert").on("click", function(){
  Native.showToast('Alert from JS');
});

$("#now").on("click", function(){
  displayDate();
});

