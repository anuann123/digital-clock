let spanElement = document.querySelector("span");
setInterval(starting, 1000);

function starting() {
  const d = new Date();
  let hrs = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  if (hrs > 12) {
    hrs = hrs - 12;
    spanElement.innerText =
      (hrs < 10 ? ("0" + hrs) : hrs) + ":" +
      (min < 10 ? ("0" + min) : min) + ":" +
      (sec < 10 ? ("0" + sec) : sec) + "pm";

  } else {
    spanElement.innerText =
      (hrs < 10 ? ("0" + hrs) : hrs) + ":" +
      (min < 10 ? ("0" + min) : min) + ":" +
      (sec < 10 ? ("0" + sec) : sec) + "am";

  }

}