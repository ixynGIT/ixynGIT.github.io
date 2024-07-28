let yValues = [
  "C",
  "C++",
  "CSS",
  "Java",
  "JavaScript",
  "HTML",
  "PHP",
  "Python",
];

let xValues = [1, 2, 4, 3, 3, 4, 3, 1];

const valueLabels = {
  1: "Beginner",
  2: "Entry-Level",
  3: "Intermediate",
  4: "Advanced",
};

const valueColors = {
  1: "#D6BD98", // Beginner
  2: "#677D6A", // Entry
  3: "#40534C", // Intermediate
  4: "#1A3636", // Advanced
};

let barColors = xValues.map((value) => valueColors[value]);

let delayed;

new Chart(document.getElementById("chart"), {
  type: "bar",
  data: {
    labels: yValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: xValues,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          generateLabels: function (chart) {
            return Object.keys(valueLabels).map(function (key) {
              return {
                text: valueLabels[key],
                fillStyle: valueColors[key],
                hidden: false,
                lineDash: [],
                lineDashOffset: 0,
                pointStyle: "rect",
                strokeStyle: valueColors[key],
                lineWidth: 0,
                borderRadius: 2,
                usePointStyle: true,
                padding: 10,
                borderRadius: 0,
              };
            });
          },
          font: {
            family: "Raleway",
            weight: 600,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let value = tooltipItem.raw;
            return valueLabels[value] || value;
          },
        },
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    title: {
      display: true,
      text: "Skills",
    },
  },
});
