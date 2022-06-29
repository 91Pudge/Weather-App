let clicker1 = document.querySelector("#geoEnter");

clicker1.addEventListener("click", () => {
	console.log("click");
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			let address = "https://api.openweathermap.org/data/2.5/weather?lat=";
			let api = "lon=" + lon + 1;
			fetch(address + lat + "&" + api)
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						throw new Error("Response not ok");
					}
				})
				.then((data) => {
					console.log(data);
					const temp = data["main"].temp;
					document.getElementById("temperature").textContent = temp;
					const feel = data["main"].feels_like;
					document.getElementById("feels").textContent = feel;
					const place = data["name"];
					document.getElementById("places").textContent =
						place + ", " + data["sys"].country;
					const minTemp = data["main"].temp_min;
					document.getElementById("min").textContent = minTemp;
					const maxTemp = data["main"].temp_max;
					document.getElementById("max").textContent = maxTemp;
					const Humidty = data["main"].humidity;
					document.getElementById("hum").textContent = Humidty;
				});
		});
	} else {
		console.log("geolocation IS NOT available");
	}
});

// console.log(lat);
// let key = ["7ffcb2dcc7748856bd1a8b5a24d06c9c"];

let address = "https://api.openweathermap.org/data/2.5/weather?q=";

let clicker = document.querySelector("#entButton");

clicker.addEventListener("click", () => {
	// require("dotenv").config();

	let api = 2;

	let place = document.querySelector("#inputter").value;

	fetch(address + place + api)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Response not ok");
			}
		})
		.then((data) => {
			console.log(data);
			const temp = data["main"].temp;
			document.getElementById("temperature").textContent = temp;
			const feel = data["main"].feels_like;
			document.getElementById("feels").textContent = feel;
			const place = data["name"];
			document.getElementById("places").textContent =
				place + ", " + data["sys"].country;
			const minTemp = data["main"].temp_min;
			document.getElementById("min").textContent = minTemp;
			const maxTemp = data["main"].temp_max;
			document.getElementById("max").textContent = maxTemp;
			const Humidty = data["main"].humidity;
			document.getElementById("hum").textContent = Humidty;
		});
	// }
});
