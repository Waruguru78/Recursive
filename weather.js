let temperature = prompt("Enter the current temperature in Celsius:");
temperature = Number(temperature);

function getClothingAdvice(temperature, isRaining) {
    switch (true) {
        case (temperature < 0):
            return isRaining ? "Wear a heavy coat, waterproof boots, and an umbrella." : "Wear a heavy coat, gloves, and a hat.";
        case (temperature >= 0 && temperature < 10):
            return isRaining ? "Wear a warm jacket and waterproof shoes." : "Wear a warm jacket and a scarf.";
        case (temperature >= 10 && temperature < 20):
            return isRaining ? "Wear a light jacket and carry an umbrella." : "Wear a light jacket.";
        case (temperature >= 20 && temperature < 30):
            return isRaining ? "Wear a t-shirt and bring a raincoat." : "Wear a t-shirt and shorts.";
        case (temperature >= 30):
            return isRaining ? "Wear light clothing and stay cool indoors." : "Wear light clothing, sunglasses, and a hat.";
        default:
            return "Invalid temperature entered.";
    }
}
