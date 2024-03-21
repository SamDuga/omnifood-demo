// Mobile nav open/close
const mobileNavButton = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

mobileNavButton.addEventListener('click', (e) => {
	header.classList.toggle('nav-open');
});

// smooth scrolling all browsers
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const href = link.getAttribute('href');

		switch (href) {
			case '#':
				window.scrollTo({ top: 0, behavior: 'smooth' });
			default:
				const sectionEl = document.querySelector(href);
				sectionEl.scrollIntoView({ behavior: 'smooth' });
		}

		if (link.classList.contains('main-nav-link') && header.classList.contains('nav-open'))
			header.classList.toggle('nav-open');
	});
});

// sticky nav bar
const observer = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		if (ent.intersectionRatio === 0 && !ent.isIntersecting) {
			document.body.classList.add('sticky');
		} else document.body.classList.remove('sticky');
	},
	{
		// while in the viewport
		root: null,
		threshold: 0,
		rootMargin: '-80px',
	},
);
observer.observe(document.querySelector('.section-hero'));

// Keep year current
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();
