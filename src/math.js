const calculateTip = (total, tipPercent = .25) => total + (total * tipPercent)

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

const add = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x < 0 || y < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(x + y)
        }, 2000)
    })
}

module.exports = {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}