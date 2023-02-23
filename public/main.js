let blob = document.querySelector(".blob");

document.body.onmousemove = (Event) => {
  const { clientX, clientY } = Event;
  blob.style.left = `${clientX}px`;
  blob.style.top = `${clientX}px`;
};
