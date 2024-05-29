document.getElementById('my-age').innerHTML = calculateAge({ year: 2010, month: 1, day: 29 })

function calculateAge({ year, month, day }) {
    const currentDate = new Date(Date.now())
    const currentMonth = currentDate.getMonth() + 1 // January is 0

    if (currentMonth < month || (currentMonth === month && currentDate.getDate() < day)) {
        return currentDate.getFullYear() - year - 1
    } else {
        return currentDate.getFullYear() - year
    }
}
