const OPENAI_API_KEY = "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"

async function getCompletion(prompt) {
    const res = await fetch("https://api.openai.com/v1/chat/completions",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer" + OPENAI_API_KEY
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "eres un amable maestro"
                },
                {
                    "role": "user",
                    "content": "cual es la capital de Rusia"
                }
            ],
            max_tokens:20
        })
    })
    return await res.json()
}

const prompt = document.querySelector("#prompt")
const button = document.querySelector("#generete")
const output = document.querySelector("#output")

button.addEventListener("click", async() => {
    if (!prompt.value) return

    const response = await getCompletion(prompt.value)
    output.innerHTML = response.choises[0].message.content

})