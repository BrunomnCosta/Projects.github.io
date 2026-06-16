const projectGrid = document.querySelector('#projectGrid');
const noteList = document.querySelector('#noteList');
const filterButtons = document.querySelectorAll('.filter');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#navLinks');
const linkedinLink = document.querySelector('#linkedinLink');

document.querySelector('#year').textContent = new Date().getFullYear();

function currentLang() {
  return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'pt';
}

function t(key) {
  const dict = I18N[currentLang()] || I18N.pt;
  return dict[key] !== undefined ? dict[key] : key;
}

function statusClass(statusKey) {
  return { live: 'is-live', progress: 'is-progress', soon: 'is-soon' }[statusKey] || '';
}

function statusLabel(statusKey) {
  return t({ live: 'status_live', progress: 'status_progress', soon: 'status_soon' }[statusKey] || 'status_soon');
}

function buildActions(project) {
  const lang = currentLang();
  const actions = [];

  if (project.detailPage) {
    actions.push(`<a href="${project.detailPage}">${t('card_details')}</a>`);
  }
  if (project.links && project.links.repo) {
    actions.push(`<a href="${project.links.repo}" target="_blank" rel="noreferrer">${t('card_repo')}</a>`);
  }
  if (project.links && project.links.demo) {
    actions.push(`<a href="${project.links.demo}" target="_blank" rel="noreferrer">${t('card_demo')}</a>`);
  }
  if (actions.length === 0) {
    actions.push(`<span class="disabled">${t('card_soon')}</span>`);
  }
  return actions.join('');
}

function renderProjects(filter = 'all') {
  const lang = currentLang();
  projectGrid.innerHTML = '';
  const visibleProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  visibleProjects.forEach(project => {
    const card = document.createElement('article');
    card.className = `project-card${project.statusKey === 'soon' ? ' is-soon' : ''}`;
    card.innerHTML = `
      <div class="card-top">
        <span class="status ${statusClass(project.statusKey)}">${statusLabel(project.statusKey)}</span>
        <span class="category">${project.category.join(' · ')}</span>
      </div>
      <h3>${project.title[lang]}</h3>
      <p>${project.summary[lang]}</p>
      <div class="stack-list">
        ${project.stack.map(item => `<span>${item}</span>`).join('')}
      </div>
      <div class="card-actions">
        ${buildActions(project)}
      </div>
    `;
    projectGrid.appendChild(card);
  });
}

function renderNotes() {
  const lang = currentLang();
  noteList.innerHTML = notes.map(note => `
    <article class="note-card">
      <time datetime="${note.date}">${note.date}</time>
      <h3>${note.title[lang]}</h3>
      <p>${note.text[lang]}</p>
    </article>
  `).join('');
}

function activeFilter() {
  const active = document.querySelector('.filter.active');
  return active ? active.dataset.filter : 'all';
}

function renderAll() {
  renderProjects(activeFilter());
  renderNotes();
}

function setupLinkedIn() {
  if (!linkedinLink) return;
  if (SITE_LINKS.linkedin) {
    linkedinLink.href = SITE_LINKS.linkedin;
  } else {
    linkedinLink.style.display = 'none';
  }
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

document.addEventListener('langchange', renderAll);

setupLinkedIn();
renderAll();
