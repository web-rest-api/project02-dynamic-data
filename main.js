import "./css/bootstrap.min.css"
import "./js/bootstrap.bundle.min"

const URL = "https://jsonplaceholder.typicode.com/users"
fetch(URL).then((res) => {
	if (!res.ok) {
		return (container.textContent = "no user found with this data")
	}
	res.json().then((json) => {
		handleData(json)
	})
})

function handleData(json) {
	json.forEach((element) => {
		console.log(element)
	})
}
