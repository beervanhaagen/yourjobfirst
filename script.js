const jobs = [
  { title: 'Frontend Developer', company: 'TechCorp', location: 'Remote' },
  { title: 'Backend Engineer', company: 'DataWorks', location: 'San Francisco' },
  { title: 'Product Manager', company: 'InnovateX', location: 'New York' }
];

let currentIndex = 0;

function showJob(index) {
  const container = document.getElementById('jobs-container');
  container.innerHTML = '';
  if (index < jobs.length) {
    const job = jobs[index];
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `<h3>${job.title}</h3><p>${job.company}</p><p>${job.location}</p>`;
    container.appendChild(card);
  } else {
    container.textContent = 'No more jobs';
  }
}

function handleLike() {
  currentIndex++;
  showJob(currentIndex);
}

function handleDislike() {
  currentIndex++;
  showJob(currentIndex);
}

window.addEventListener('load', () => {
  const likeBtn = document.getElementById('like');
  const dislikeBtn = document.getElementById('dislike');
  if (likeBtn && dislikeBtn) {
    likeBtn.addEventListener('click', handleLike);
    dislikeBtn.addEventListener('click', handleDislike);
  }
  showJob(currentIndex);
});
