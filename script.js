const wrapper = document.querySelector(".wrapper");
Array.from({ length: 24 }, (val, idx) => {
  const slot = document.createElement("div");
  slot.className = `slot s-${idx + 1}-00`;
  const time = document.createElement("div");
  time.className = "time";
  time.innerHTML = `${idx + 1 !== 12 ? (idx + 1) % 12 : idx + 1}:00 ${
    idx + 1 >= 12 && idx + 1 < 24 ? "pm" : "am"
  }`;
  slot.appendChild(time);
  const box = document.createElement("div");
  box.className = "box";
  slot.appendChild(box);
  wrapper.appendChild(slot);
});