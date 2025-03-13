document.querySelectorAll('.instrument-row').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('expanded');
	})
})
