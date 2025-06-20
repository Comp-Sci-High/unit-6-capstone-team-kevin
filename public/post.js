const createForm = document.querySelector("form")

createForm.addEventListener("submit", async (e)=>{
	e.preventDefault()
	const bookData = new FormData(createForm)
	const reqBody = Object.fromEntries(bookData)

	const response = await fetch("/add/post", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(reqBody)
	})
window.location.href = "/post"
})
