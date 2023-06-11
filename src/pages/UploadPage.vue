<template>
  <div class="text-2xl bg-red-500 text-blue-500">This is upload page</div>

  Mouse position is at : {{ x }} , {{ y }}
  <!-- <Line id="my-chart-id" :options="chartOptions" :data="chartData" /> -->
</template>

<script setup>
import { Line } from "vue-chartjs";
import { useMouse } from "../composable/mouse";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement, // Change this line
  CategoryScale,
  LineElement,
  LinearScale,
} from "chart.js";

const { x, y } = useMouse();

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement, // Change this line
  LineElement, // Change this line
  CategoryScale,
  LinearScale
);
const chartData = {
  labels: ["January", "February", "March", "May", "June"],
  datasets: [
    {
      label: "Data One",
      borderColor: "#f87979",
      data: [60, 20, 12, 45],
      fill: false,
    },
  ],
};
const chartOptions = {
  responsive: true,
};
</script>
