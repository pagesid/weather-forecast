

export const getWeatherData = async (city) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=a6ffafbc0e9a0b3356d018f5999392d7&units=metric`
		);

		return await response.json();
	} catch (error) {
		console.error(error);
	}
}