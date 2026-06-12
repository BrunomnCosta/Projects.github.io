const projectGrid = document.querySelector('#projectGrid');
const noteList = document.querySelector('#noteList');
const filterButtons = document.querySelectorAll('.filter');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#navLinks');

document.querySelector('#year').textContent = new Date().getFullYear();

function renderProjects(filter = 'all') {
  projectGrid.innerHTML = '';
  const visibleProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  visibleProjects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="card-top">
        <span class="status">${project.status}</span>
        <span class="category">${project.category.join(' · ')}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="stack-list">
        ${project.stack.map(item => `<span>${item}</span>`).join('')}
      </div>
      <div class="card-actions">
        <a href="${project.links.repo}" aria-label="Repositório de ${project.title}">Repo</a>
        <a href="${project.links.demo}" aria-label="Demo ou artigo de ${project.title}">Detalhes</a>
      </div>
    `;
    projectGrid.appendChild(card);
  });
}

function renderNotes() {
  noteList.innerHTML = notes.map(note => `
    <article class="note-card">
      <time datetime="${note.date}">${note.date}</time>
      <h3>${note.title}</h3>
      <p>${note.text}</p>
    </article>
  `).join('');
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
});

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

renderProjects();
renderNotes();
