function generateProfile() {
    // Get values from input boxes
    let artist = document.getElementById("artist").value;
    let genre = document.getElementById("genre").value;
    let song = document.getElementById("song").value;

    // Create a personalized message
    let message = `🎶 You love listening to ${artist}! Your favorite genre is ${genre}, 
                   and your top song is "${song}". Keep the vibes going! 🎧`;

    // Display message on the page
    document.getElementById("output").textContent = message;
}


