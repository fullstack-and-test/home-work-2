// Play kalimba's sound
const tabs = document.querySelectorAll(".tab__group");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const sound = new Audio(`../sounds/${tab.dataset.sound}.wav`);
		sound.play();
	});
});
