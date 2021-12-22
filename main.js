function toggleMenu() {
  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  let main = document.getElementById(".first-container");
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}

const investment = document.getElementById("myChart1").getContext("2d");
const bid = document.getElementById("myChart2").getContext("2d");

const myChart1 = new Chart(investment, {
  type: "line",
  data: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Investment Values",
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  },

  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Investment Values",
        position: "top",
        align: "start",
        padding: {
          left: 50,
        },
      },
      subtitle: {
        display: true,
        text: "USD <-> IDR",
        align: "end",
        // padding: 5
      },
      legend: {
        display: false,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
    },

    interaction: {
      mode: "index",
    },
    responsive: true,
  },
});

const myChart2 = new Chart(bid, {
  data: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        type: "bar",
        label: "Current",
        data: [10, 20, 30, 40, 45],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "blue",
      },
      {
        type: "bar",
        label: "Pending",
        data: [5, 30, 25, 50, 41],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "orange",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Last Bid",
        position: "top",
        align: "start",
        padding: {
          left: 50,
        },
      },
      legend: {
        display: true,
        align: "end",
        pointStyle: "dash",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 70,
      },
    },
    responsive: true,
  },
});
