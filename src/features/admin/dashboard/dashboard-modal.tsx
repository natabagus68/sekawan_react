import { useState, useEffect } from "react";

export default function useDashboardModel() {
  const genArray = (len: number) => {
    const arr = []
    for(let i = 0; i < len; i++) {
      const v = Math.ceil(Math.random() * 99 + 1)
      arr.push(v)
    }
    return arr
  }

  const x = genArray(12)
  const y = genArray(12)
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];

  const charts_opts = {
    type: "line",
    responsive: true,
    plugins: {
      responsive: true,
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Quantity Posting",
        },
      },
    },
    animations: {
      radius: {
        duration: 500,
        easing: 'linear',
        loop: (context) => context.active
      }
    },
  };

  const charts = {
    labels: month,
    datasets: [
      {
        label: "Berita",
        data: x,
        borderColor: "#B8B6B6",
        backgroundColor: "#B8B6B6",
        cubicInterpolationMode: 'monotone',
        tension: 0.9
      },
      {
        label: "Acara",
        data: y,
        borderColor: "#F79009",
        backgroundColor: "#F79009",
        cubicInterpolationMode: 'monotone',
        tension: 0.9
      },
    ],
  };

  return {
    charts,
    charts_opts,
  };
}
