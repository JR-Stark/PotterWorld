const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('darkList');
});

const cache = document.getElementById('search_btn');

cache.addEventListener('click', () => {
    document.getElementById("search_btn").style.display = "none";
});