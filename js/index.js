const p = console.log; // Creating a shortcut for printing

// Get references to interactive HTML elements
const controlButtons = document.querySelectorAll('.controls button');
p(controlButtons);
const container = document.querySelector('.container');
let buttonsArray = [
	controlButtons[0],
	controlButtons[1],
	controlButtons[2]
	]; // There are better ways to do this conversion in future projects

// Create an array that will store the data
let pages = [
	{
		heading: "<h2>Energy Efficient Lighting Solutions</h2>",
		bodyText: "<p>Incentivization target rich environment but curate prioritize these line items. Strategic staircase cross functional teams enable out of the box brainstorming please submit the sop and uat files by next monday yet cross-pollination, nor game plan. Ultimate measure of success draw a line in the sand, or I have zero cycles for this programmatically can you send me an invite? nor we want to empower the team with the right tools and guidance to uplevel our craft and build better price point. Strategic fit message the initiative digitalize nor strategic fit, yet design thinking, but flesh that out, and strategic staircase. Mobile friendly the right info at the right time to the right people. Pull in ten extra bodies to help roll the tortoise we need to have a Come to Jesus meeting with Phil about his attitude they have downloaded gmail and seems to be working for now work so value prop can you send me an invite?. Time vampire this medium needs to be more dynamic let's schedule a standup during the sprint to review our kpis so baseline yet after I ran into Helen at a restaurant, I realized she was just office pretty. Back to the drawing-board it just needs more cowbell. Your work on this project has been really impactful circle back. We need to touch base off-line before we fire the new ux experience draft policy ppml proposal can you champion this personal development so my capacity is full downselect yet re-inventing the wheel. Wiggle room innovation is hot right now and this is a no-brainer, but out of scope, for can you put it on my calendar?. Prairie dogging not a hill to die on but baseline so high performance keywords. Groom the backlog get buy-in best practices. Canatics exploratory investigation data masking granularity workflow ecosystem eat our own dog food. Big boy pants product market fit. We are running out of runway pull in ten extra bodies to help roll the tortoise. This is not the hill i want to die on. Reach out that ipo will be a game-changer ensure to follow requirements when developing solutions and make it look like digital drive awareness to increase engagement.</p>",
		thumb: "http://via.placeholder.com/300/ff00ff/fff"
	},
	{
		heading: "<h2>DVR and Cable Boxes Use More Than You Think</h2>", // This h2 tag is overwritten later, when the code adds an h2 to it, but for testing purposes it's easier to see
		bodyText: "<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. </p>",
		thumb: "http://via.placeholder.com/300/ff00ff/000"
	},
	{
		heading: "<h2>It's The Little Things that Make a Difference</h2>",
		bodyText: "<p>Radio telescope Apollonius of Perga something incredible is waiting to be known tendrils of gossamer clouds Flatland emerged into consciousness. Star stuff harvesting star light great turbulent clouds venture gathered by gravity rings of Uranus encyclopaedia galactica. Rings of Uranus courage of our questions permanence of the stars paroxysm of global death dream of the mind's eye vastness is bearable only through love. The only home we've ever known invent the universe bits of moving fluff the carbon in our apple pies a very small stage in a vast cosmic arena extraordinary claims require extraordinary evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions. </p>",
		thumb: "http://via.placeholder.com/300/blue/fff"
	},
];

// Create a funtion that handles the click-event
function clickButton(eve) {
	let clickedButton = eve.target; // Reference: Brightspace Week 6
	let index = buttonsArray.indexOf(clickedButton); // Reference: MDM
	p(index); // Node list and arrays are very similar, but this function only works for a node list. We need to create a new array.

	
	// Handle moving id-active to the currently clicked button
		// Remove currently present id "active" in the list of buttons
		for (let i=0; i<controlButtons.length; i++) {
			if (controlButtons[i].id) {
				
				controlButtons[i].removeAttribute('id'); // MDM reference: mozilla reference: remove attribute
			}
		}
		
		// Assign id="active" to the currently selected button
		clickedButton.id='active';
	
	// Load the corresponding data into <div class="container"></div>
	container.innerHTML = `<h2>${pages[index].heading}</h2>
	<figure>
		<img src="${pages[index].thumb}" alt="${pages[index].heading}"
	</figure>
	<p>${pages[index].bodyText}</p>`;
}

// Register clickable objects (buttons) for click-event
for (let i=0; i<controlButtons.length; i++) {
controlButtons[i].addEventListener("click", clickButton);
}