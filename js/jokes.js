async function bringJoke() {
    try {
        const response = await fetch('https://api.dadjokes.io/api/random/joke').then(res => res.json())
        const punchline = response.body[0].punchline
        const setup = response.body[0].setup
        return {setup, punchline}
    } catch (error) {
        alert('We could not get the joke, so sorry!!!')
    }
}

const btn = document.getElementById("joke-button");
btn.addEventListener('click', async (event) => {
    const joke = await bringJoke();
    console.log(joke)
    document.getElementById("setup").innerHTML = joke.setup;
    document.getElementById("punchline").innerHTML = joke.punchline;
});