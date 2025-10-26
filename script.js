
// function to create a podcast card
function createPodcastCard() {
    const podcastCard = document.createElement('section');
    podcastCard.class= "podcast-card";

    podcastCard.innerHTML= `
        <img src="${podcast-image}" alt="Podcast Cover" class="podcast-image">
        <div class="podcast-info">
            <h3 class="podcast-title">
                ${podcast-title}
            </h3>
            <div class="podcast-seasons">
                ${podcast-seasons}
            </div>
            <div id="genres" class="genres">
                ${podcast-genres}
            </div>
            <div id="last-updated" class="last-updated">
                ${podcast-updated}
            </div>
        </div>
    `;
    return podcastCard;


}

const podcastGrid = document.getElementById('podcast-grid');
