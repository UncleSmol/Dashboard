const manualsContainer = document.getElementById('manuals-container');
const manualsList = document.getElementById('manuals-list');

manualsContainer.addEventListener('click', () => {
	if (manualsList.style.display === 'block') {
		manualsList.style.display = 'none';
	} else {
		manualsList.style.display = 'block';
	}
});
