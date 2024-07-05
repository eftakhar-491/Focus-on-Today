// Collect goal value
const goal1 = document.querySelector(".goal1");
const goal2 = document.querySelector(".goal2");
const goal3 = document.querySelector(".goal3");

const checkbox1 = document.querySelector(".checkbox1");
const checkbox2 = document.querySelector(".checkbox2");
const checkbox3 = document.querySelector(".checkbox3");
const warning = document.querySelector(".warning");
const progress = document.querySelector(".progress");
const data = document.querySelector(".data");

let goal = [goal1.value, goal2.value, goal3.value];
let x = 0;
let y = 0;
let z = 0;
let sum = 0;

localStorage.setItem("data", '["", "", ""]');

goal1.value = JSON.parse(localStorage.getItem("data"))[0];
goal2.value = JSON.parse(localStorage.getItem("data"))[1];
goal3.value = JSON.parse(localStorage.getItem("data"))[2];

goal = [
  JSON.parse(localStorage.getItem("data"))[0],
  JSON.parse(localStorage.getItem("data"))[1],
  JSON.parse(localStorage.getItem("data"))[2],
];

goal1.addEventListener("blur", () => {
  goal = [goal1.value, goal2.value, goal3.value];
  localStorage.setItem("data", JSON.stringify(goal));
});
goal2.addEventListener("blur", () => {
  goal = [goal1.value, goal2.value, goal3.value];
  localStorage.setItem("data", JSON.stringify(goal));
});
goal3.addEventListener("blur", () => {
  goal = [goal1.value, goal2.value, goal3.value];
  localStorage.setItem("data", JSON.stringify(goal));
});

checkbox1.addEventListener("click", () => {
  goal.forEach((inputitem) => {
    if (inputitem == "") {
      warning.style.visibility = "visible";
    }
    console.log(inputitem);
  });
});

checkbox2.addEventListener("click", () => {
  goal.forEach((inputitem) => {
    if (inputitem == "") {
      warning.style.visibility = "visible";
    }
    console.log(inputitem);
  });
});

checkbox3.addEventListener("click", () => {
  goal.forEach((inputitem) => {
    if (inputitem == "") {
      warning.style.visibility = "visible";
    }
    console.log(inputitem);
  });
});

goal1.addEventListener("focus", () => {
  warning.style.visibility = "hidden";
});
goal2.addEventListener("focus", () => {
  warning.style.visibility = "hidden";
});
goal3.addEventListener("focus", () => {
  warning.style.visibility = "hidden";
});

const checkboxactive1 = document.querySelector(".checkbox-active-1");
const checkboxactive2 = document.querySelector(".checkbox-active-2");
const checkboxactive3 = document.querySelector(".checkbox-active-3");
let count = 0;

checkboxactive1.addEventListener("click", () => {
  count = 0;

  goal.forEach((inputitem) => {
    if (inputitem == "") {
      count++;
    }
  });
  if (count == 0) {
    checkboxactive1.classList.toggle("checkbox-active");

    goal1.classList.toggle("delete");
    if (x == 0) {
      x++;
      sum += x;
    } else {
      // x--;
      sum -= 1;
      x = 0;
    }
    data.innerText = `${sum}/3 Complited`;
  }
  console.log(sum);
  if (sum == 0) {
    progress.style.width = "0%";
  } else if (sum == 1) {
    progress.style.width = "33.33%";
  } else if (sum == 2) {
    progress.style.width = "66.66%";
  } else if (sum == 3) {
    progress.style.width = "100%";
  }
});

checkboxactive2.addEventListener("click", () => {
  count = 0;
  goal.forEach((inputitem) => {
    if (inputitem == "") {
      count++;
    }
  });
  if (count == 0) {
    checkboxactive2.classList.toggle("checkbox-active");
    goal2.classList.toggle("delete");
    if (y == 0) {
      y++;
      sum += y;
    } else {
      // x--;
      sum -= 1;
      y = 0;
    }
    data.innerText = `${sum}/3 Complited`;
  }

  if (sum == 0) {
    progress.style.width = "0%";
  } else if (sum == 1) {
    progress.style.width = "33.33%";
  } else if (sum == 2) {
    progress.style.width = "66.66%";
  } else if (sum == 3) {
    progress.style.width = "100%";
  }
});

checkboxactive3.addEventListener("click", () => {
  count = 0;
  goal.forEach((inputitem) => {
    if (inputitem == "") {
      count++;
    }
  });
  if (count == 0) {
    checkboxactive3.classList.toggle("checkbox-active");
    goal3.classList.toggle("delete");

    if (z == 0) {
      z++;
      sum += z;
    } else {
      // x--;
      sum -= 1;
      z = 0;
    }
    data.innerText = `${sum}/3 Complited`;
  }

  if (sum == 0) {
    progress.style.width = "0%";
  } else if (sum == 1) {
    progress.style.width = "33.33%";
  } else if (sum == 2) {
    progress.style.width = "66.66%";
  } else if (sum == 3) {
    progress.style.width = "100%";
  }
});
goal1.addEventListener("input", () => {
  if (goal1.value == "") {
    checkboxactive1.classList.remove("checkbox-active");
    goal1.classList.remove("delete");

    checkboxactive2.classList.remove("checkbox-active");
    goal2.classList.remove("delete");

    checkboxactive3.classList.remove("checkbox-active");
    goal3.classList.remove("delete");

    progress.style.width = "0%";
    x = 0;
    y = 0;
    z = 0;
    sum = 0;
    console.log(sum);
  }
});

goal2.addEventListener("input", () => {
  if (goal2.value == "") {
    checkboxactive1.classList.remove("checkbox-active");
    goal1.classList.remove("delete");

    checkboxactive2.classList.remove("checkbox-active");
    goal2.classList.remove("delete");

    checkboxactive3.classList.remove("checkbox-active");
    goal3.classList.remove("delete");
    x = 0;
    y = 0;
    z = 0;
    sum = 0;
    progress.style.width = "0%";
  }
});

goal3.addEventListener("input", () => {
  if (goal3.value == "") {
    checkboxactive1.classList.remove("checkbox-active");
    goal1.classList.remove("delete");

    checkboxactive2.classList.remove("checkbox-active");
    goal2.classList.remove("delete");

    checkboxactive3.classList.remove("checkbox-active");
    goal3.classList.remove("delete");
    x = 0;
    y = 0;
    z = 0;
    sum = 0;
    progress.style.width = "0%";
  }
});

if (x == 0 && y == 0 && z == 0) {
  progress.style.width = "0%";
}
