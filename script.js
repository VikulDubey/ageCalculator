const calender = document.getElementById("calender");
const calculateBtn = document.querySelector(".calculateBtn");
const result = document.querySelector(".result");

const todayDate = new Date();

calculateBtn.addEventListener("click", () => {
  const getUserDate = calender.value;
  const input = new Date(getUserDate);

  const y1 = input.getFullYear();
  const m1 = input.getMonth() + 1;
  const d1 = input.getDate();

  const y2 = todayDate.getFullYear();
  const m2 = todayDate.getMonth() + 1;
  const d2 = todayDate.getDate();

  let y3, m3, d3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + (m2 - m1);
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getMonthDate(y1, m1) + (d2 - d1);
  }

  function getMonthDate(year, month) {
    return new Date(year, month, 0).getDate();
  }

  result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old.`;
});
