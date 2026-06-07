const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.video-card');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    cards.forEach((card) => {
      const categories = card.dataset.category || '';
      const shouldShow = filter === 'all' || categories.includes(filter);
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});
