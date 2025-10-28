<script setup>
import ColorModeButton from '@/components/ColorModeButton/ColorModeButton.vue'

const updateTime = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let dayOfMonth = now.getDate();
  const month = now.getMonth() + 1;

  // Format minutes to always be two digits
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} - ${dayOfMonth}/${month}`;
};

const currentTime = updateTime();
let intervalId = null;

const getWeather = () => {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  const city = "London"; // Replace with the desired city

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      console.log("Weather data:", data);
      // Process and display the weather data here
      // e.g., data.main.temp, data.weather[0].description
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
};

onMounted(() => {
  intervalId = setInterval(() => {
    currentTime = updateTime();
  }, 60000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <UHeader :toggle="false">
    <template #left>
      <UIcon name="fluent-mdl2:alarm-clock" class="size-5 me-1" />{{
        currentTime
      }}
    </template>
    <template #right>
      <ColorModeButton />
    </template>
  </UHeader>
</template>
