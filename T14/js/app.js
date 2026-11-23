// Student Internship Portal - Core Application Logic

(function () {
  'use strict';

  // --- Internships Directory Dataset ---
  const internships = [
    {
      id: 1,
      title: 'Frontend Web Developer Intern',
      company: 'Surat InfoTech',
      location: 'Surat, Gujarat',
      mode: 'Remote',
      category: 'Web Development',
      duration: '3 Months',
      stipend: '₹12,000 / month',
      deadline: 'Dec 15, 2026',
      description: 'Build responsive, accessible user interfaces using modern HTML, CSS, JavaScript, and Tailwind. Collaborate with backend teams to integrate REST APIs and optimize page performance.',
      responsibilities: [
        'Develop responsive web pages from UI wireframes and Figma designs',
        'Ensure cross-browser compatibility and mobile responsiveness',
        'Consume RESTful APIs and handle asynchronous state management',
        'Participate in daily standups and code review sessions'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Git'],
      perks: ['Certificate of Completion', 'Letter of Recommendation for top performers', 'Flexible work hours', 'Mentorship from senior frontend engineers']
    },
    {
      id: 2,
      title: 'Python & Data Analyst Intern',
      company: 'Apex Analytics',
      location: 'Surat, Gujarat',
      mode: 'Hybrid',
      category: 'Data & Python',
      duration: '6 Months',
      stipend: '₹15,000 / month',
      deadline: 'Dec 20, 2026',
      description: 'Analyze real-world business datasets, clean and transform messy data, and create interactive visual charts and statistical dashboards for client reporting.',
      responsibilities: [
        'Extract, clean, and process tabular datasets using Pandas and NumPy',
        'Perform exploratory data analysis (EDA) to uncover trends and patterns',
        'Build visual charts and summary dashboards for executive reporting',
        'Write optimized SQL queries for relational databases'
      ],
      skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Data Visualization'],
      perks: ['Pre-Placement Offer (PPO) opportunity', 'Hands-on enterprise database access', 'Certificate of Completion', 'Weekly 1-on-1 mentorship']
    },
    {
      id: 3,
      title: 'UI/UX Design Intern',
      company: 'Creative Studio',
      location: 'Remote',
      mode: 'Remote',
      category: 'Design',
      duration: '2 Months',
      stipend: '₹10,000 / month',
      deadline: 'Dec 10, 2026',
      description: 'Design intuitive interfaces, create interactive user prototypes in Figma, conduct user feedback interviews, and craft cohesive design systems for web and mobile products.',
      responsibilities: [
        'Create high-fidelity wireframes, UI components, and mockups in Figma',
        'Conduct quick user research interviews to test usability and workflows',
        'Maintain consistent component libraries, typography, and color tokens',
        'Collaborate with developers to ensure accurate visual implementation'
      ],
      skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
      perks: ['Certificate of Completion', 'Portfolio showcase feature on company website', 'Letter of Recommendation', 'Direct guidance from Design Lead']
    },
    {
      id: 4,
      title: 'Full Stack Developer Intern',
      company: 'Nexus Software Labs',
      location: 'Ahmedabad, Gujarat',
      mode: 'On-site',
      category: 'Web Development',
      duration: '6 Months',
      stipend: '₹18,000 / month',
      deadline: 'Dec 30, 2026',
      description: 'Work across the entire stack building robust client applications with Node.js, Express, and MongoDB, alongside interactive client web frontends and authentication modules.',
      responsibilities: [
        'Implement server-side logic, routing, and REST endpoints with Express',
        'Design schemas and perform CRUD operations in MongoDB',
        'Implement JWT authentication, authorization, and secure cookies',
        'Integrate client frontends with backend endpoints seamlessly'
      ],
      skills: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
      perks: ['Competitive monthly stipend', 'Opportunity for full-time conversion', 'Certificate of Completion', 'Free campus meals and snacks']
    },
    {
      id: 5,
      title: 'Android App Development Intern',
      company: 'BlueWave Apps',
      location: 'Remote',
      mode: 'Remote',
      category: 'Mobile Apps',
      duration: '3 Months',
      stipend: '₹14,000 / month',
      deadline: 'Dec 18, 2026',
      description: 'Build native Android applications with Kotlin and Android Studio. Integrate REST APIs, handle background workers, and assist in publishing updates to testing tracks.',
      responsibilities: [
        'Develop clean Android app activities and fragments using Kotlin',
        'Integrate backend REST APIs and parse JSON responses with Retrofit',
        'Handle local data caching with Room Database and SharedPreferences',
        'Test on multiple screen densities and virtual test devices'
      ],
      skills: ['Kotlin', 'Android Studio', 'Jetpack Components', 'Retrofit', 'Room DB'],
      perks: ['Certificate of Completion', 'Real-world app publishing experience', 'Flexible remote schedule', 'Letter of Recommendation']
    },
    {
      id: 6,
      title: 'Digital Marketing & SEO Intern',
      company: 'GrowthCraft Media',
      location: 'Surat, Gujarat',
      mode: 'Hybrid',
      category: 'Marketing',
      duration: '3 Months',
      stipend: '₹8,000 / month',
      deadline: 'Dec 25, 2026',
      description: 'Help manage search engine optimization (SEO), create technical and educational blog posts, monitor web analytics, and run campaigns across social platforms.',
      responsibilities: [
        'Perform keyword research and on-page SEO optimization for articles',
        'Track organic impressions and click-through rates in Google Search Console',
        'Draft engaging technical posts for company LinkedIn and Twitter feeds',
        'Produce monthly growth and conversion summary reports'
      ],
      skills: ['SEO', 'Content Writing', 'Google Analytics', 'Social Media', 'Canva'],
      perks: ['Hands-on paid marketing campaigns', 'Certificate of Completion', 'Flexible timing', 'Direct exposure to client marketing pitches']
    },
    {
      id: 7,
      title: 'QA & Software Testing Intern',
      company: 'Precision QA Solutions',
      location: 'Remote',
      mode: 'Remote',
      category: 'QA & Cloud',
      duration: '4 Months',
      stipend: '₹10,000 / month',
      deadline: 'Jan 05, 2027',
      description: 'Validate web applications through structured manual and automated test suites. Write detailed bug reports, verify fixes, and ensure regression testing before production releases.',
      responsibilities: [
        'Author clear test cases, test scenarios, and acceptance checklists',
        'Execute functional, cross-browser, and UI regression tests',
        'File structured bug reports with steps to reproduce and network logs',
        'Collaborate with developers to verify issue resolution'
      ],
      skills: ['Manual Testing', 'Test Case Design', 'Bug Tracking (Jira)', 'Postman', 'Git'],
      perks: ['Certificate of Completion', 'Mentorship in test automation', 'Letter of Recommendation', 'Flexible remote schedule']
    },
    {
      id: 8,
      title: 'Cloud & DevOps Intern',
      company: 'CloudMatrix Systems',
      location: 'Remote',
      mode: 'Remote',
      category: 'QA & Cloud',
      duration: '6 Months',
      stipend: '₹16,000 / month',
      deadline: 'Dec 28, 2026',
      description: 'Assist in maintaining cloud environments, configuring CI/CD deployment pipelines, writing Dockerfiles for containerization, and monitoring server health metrics.',
      responsibilities: [
        'Containerize web applications using Docker and Docker Compose',
        'Configure automated build and test pipelines with GitHub Actions',
        'Manage Linux server configurations, firewall rules, and SSH keys',
        'Monitor application uptime and resource utilization logs'
      ],
      skills: ['Linux', 'Docker', 'GitHub Actions', 'AWS / Cloud Basics', 'Bash Scripting'],
      perks: ['Direct hands-on cloud credits', 'Certificate of Completion', 'High potential for PPO conversion', 'Flexible working hours']
    }
  ];

  // --- LocalStorage State for Applications ---
  const STORAGE_KEY = 'internship_portal_applications_v1';

  function getStoredApplications() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error('Failed to load applications from localStorage:', e);
    }
    return [];
  }

  function saveApplications(apps) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
    } catch (e) {
      console.error('Failed to save applications to localStorage:', e);
    }
  }

  let applications = getStoredApplications();

  function isApplied(internshipId) {
    return applications.some(app => app.internshipId === internshipId);
  }

  // --- UI Elements ---
  const tabBtnExplore = document.getElementById('tab-btn-explore');
  const tabBtnApplications = document.getElementById('tab-btn-applications');
  const panelExplore = document.getElementById('panel-explore');
  const panelApplications = document.getElementById('panel-applications');

  const statOpportunities = document.getElementById('stat-opportunities');
  const statApplications = document.getElementById('stat-applications');
  const tabExploreCount = document.getElementById('tab-explore-count');
  const tabAppsCount = document.getElementById('tab-apps-count');

  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const modeFilter = document.getElementById('mode-filter');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');

  const internshipsGrid = document.getElementById('internships-grid');
  const noResultsState = document.getElementById('no-results-state');
  const applicationsContainer = document.getElementById('applications-container');

  const detailsDialog = document.getElementById('details-dialog');
  const applyDialog = document.getElementById('apply-dialog');
  const applyForm = document.getElementById('apply-form');
  const detailApplyBtn = document.getElementById('detail-apply-btn');

  // --- Toast Notification ---
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-xl shadow-lg text-xs font-semibold border transition-all duration-300 transform translate-y-2 opacity-0 ${
      type === 'success'
        ? 'bg-slate-900 text-white border-slate-800'
        : 'bg-rose-900 text-white border-rose-800'
    }`;
    toast.innerHTML = `
      <span class="${type === 'success' ? 'text-emerald-400' : 'text-rose-400'} font-bold">✓</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    });

    // Auto remove
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- Tab Switching with History / Deep-Linking ---
  function switchTab(target) {
    const isExplore = target === 'explore';

    if (tabBtnExplore && tabBtnApplications) {
      tabBtnExplore.setAttribute('aria-selected', isExplore ? 'true' : 'false');
      tabBtnApplications.setAttribute('aria-selected', isExplore ? 'false' : 'true');

      if (isExplore) {
        tabBtnExplore.className = 'tab-btn flex-1 py-2 px-4 text-xs font-semibold rounded-lg bg-blue-600 text-white transition text-center shadow-sm';
        tabBtnApplications.className = 'tab-btn flex-1 py-2 px-4 text-xs font-semibold rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition text-center';
        panelExplore.classList.remove('hidden');
        panelApplications.classList.add('hidden');
      } else {
        tabBtnExplore.className = 'tab-btn flex-1 py-2 px-4 text-xs font-semibold rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition text-center';
        tabBtnApplications.className = 'tab-btn flex-1 py-2 px-4 text-xs font-semibold rounded-lg bg-blue-600 text-white transition text-center shadow-sm';
        panelExplore.classList.add('hidden');
        panelApplications.classList.remove('hidden');
      }
    }

    if (window.location.hash !== `#${target}`) {
      try {
        history.replaceState(null, '', `#${target}`);
      } catch (e) {}
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.switchTab = switchTab;

  if (tabBtnExplore) tabBtnExplore.addEventListener('click', () => switchTab('explore'));
  if (tabBtnApplications) tabBtnApplications.addEventListener('click', () => switchTab('applications'));

  // --- Update Dashboard Counters ---
  function updateCounters() {
    const appsCount = applications.length;
    if (statApplications) statApplications.textContent = `${appsCount} Submitted`;
    if (tabAppsCount) tabAppsCount.textContent = appsCount;
    if (tabExploreCount) tabExploreCount.textContent = internships.length;
    if (statOpportunities) statOpportunities.textContent = `${internships.length} Roles`;
  }

  // --- Render Internships Grid ---
  function renderInternships() {
    if (!internshipsGrid) return;

    const query = (searchInput?.value || '').trim().toLowerCase();
    const category = categoryFilter?.value || 'All';
    const mode = modeFilter?.value || 'All';

    const filtered = internships.filter(item => {
      const matchQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query) ||
        item.skills.some(s => s.toLowerCase().includes(query));

      const matchCategory = category === 'All' || item.category === category;
      const matchMode = mode === 'All' || item.mode === mode;

      return matchQuery && matchCategory && matchMode;
    });

    if (filtered.length === 0) {
      internshipsGrid.innerHTML = '';
      if (noResultsState) noResultsState.classList.remove('hidden');
      return;
    }

    if (noResultsState) noResultsState.classList.add('hidden');

    internshipsGrid.innerHTML = filtered.map(item => {
      const applied = isApplied(item.id);

      return `
        <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between gap-4">
          <div class="space-y-3">
            
            <!-- Company & Mode Header -->
            <div class="flex items-start justify-between gap-2">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                  ${item.company.charAt(0)}
                </div>
                <div>
                  <h3 class="text-xs font-bold text-slate-900 leading-tight">${item.company}</h3>
                  <p class="text-[11px] text-slate-500">${item.location}</p>
                </div>
              </div>

              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                item.mode === 'Remote' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                item.mode === 'Hybrid' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                'bg-slate-100 text-slate-700 border border-slate-200'
              }">${item.mode}</span>
            </div>

            <!-- Role Title & Description -->
            <div>
              <h4 class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug">${item.title}</h4>
              <p class="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">${item.description}</p>
            </div>

            <!-- Key Info Pill Strip -->
            <div class="flex items-center gap-2 text-[11px] font-semibold pt-1">
              <span class="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700">${item.stipend}</span>
              <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">${item.duration}</span>
            </div>

            <!-- Skills Required -->
            <div class="flex flex-wrap gap-1 pt-1">
              ${item.skills.slice(0, 3).map(s => `
                <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100">${s}</span>
              `).join('')}
              ${item.skills.length > 3 ? `<span class="text-[10px] font-medium px-1.5 py-0.5 rounded-md text-slate-400">+${item.skills.length - 3}</span>` : ''}
            </div>

          </div>

          <!-- Card Footer & Actions -->
          <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <span class="text-[11px] text-slate-400">Deadline: <strong class="text-slate-600 font-semibold">${item.deadline}</strong></span>
            
            <div class="flex items-center gap-1.5">
              <button type="button" onclick="openDetailsModal(${item.id})" class="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition">
                Details
              </button>

              ${applied ? `
                <span class="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Applied ✓
                </span>
              ` : `
                <button type="button" onclick="openApplyModal(${item.id})" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm">
                  Apply Now
                </button>
              `}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Render Applications View ---
  function renderApplications() {
    if (!applicationsContainer) return;

    if (applications.length === 0) {
      applicationsContainer.innerHTML = `
        <div class="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3 shadow-sm">
          <div class="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto text-xl font-bold">
            0
          </div>
          <h3 class="text-sm font-bold text-slate-900">No applications submitted yet</h3>
          <p class="text-xs text-slate-500 max-w-md mx-auto">
            You haven't submitted any internship applications. Browse our active openings, view job descriptions, and apply online in seconds.
          </p>
          <div class="pt-2">
            <button type="button" onclick="switchTab('explore')" class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition shadow-sm">
              Explore Active Internships &rarr;
            </button>
          </div>
        </div>
      `;
      return;
    }

    applicationsContainer.innerHTML = `
      <div class="space-y-4">
        <div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-slate-50/70 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                  <th class="py-3 px-4">Internship Role &amp; Company</th>
                  <th class="py-3 px-4">Work Mode</th>
                  <th class="py-3 px-4">Applied Date</th>
                  <th class="py-3 px-4">Applicant Credentials</th>
                  <th class="py-3 px-4 text-center">Current Status</th>
                  <th class="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-700">
                ${applications.map(app => `
                  <tr class="hover:bg-slate-50/70 transition">
                    <td class="py-3.5 px-4">
                      <div class="font-bold text-slate-900">${app.roleTitle}</div>
                      <div class="text-[11px] text-slate-500 font-medium">${app.company}</div>
                    </td>
                    <td class="py-3.5 px-4">
                      <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        app.mode === 'Remote' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        app.mode === 'Hybrid' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                        'bg-slate-100 text-slate-700 border border-slate-200'
                      }">${app.mode || 'Remote'}</span>
                    </td>
                    <td class="py-3.5 px-4 text-slate-600 font-mono text-[11px]">
                      ${app.appliedAt}
                    </td>
                    <td class="py-3.5 px-4">
                      <div class="font-semibold text-slate-800">${app.applicant.name}</div>
                      <div class="text-[11px] text-slate-400">${app.applicant.college} • ${app.applicant.degree}</div>
                    </td>
                    <td class="py-3.5 px-4 text-center">
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                        ${app.status || 'Under Review'}
                      </span>
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      <button type="button" onclick="withdrawApplication(${app.internshipId})" class="text-rose-600 hover:text-rose-800 font-semibold text-[11px] hover:underline">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // --- Details Modal Handler ---
  window.openDetailsModal = function (id) {
    const item = internships.find(i => i.id === id);
    if (!item || !detailsDialog) return;

    document.getElementById('details-title').textContent = item.title;
    document.getElementById('detail-company').textContent = `${item.company} • ${item.location}`;
    document.getElementById('detail-category').textContent = item.category;
    document.getElementById('detail-mode').textContent = item.mode;
    document.getElementById('detail-stipend').textContent = item.stipend;
    document.getElementById('detail-duration').textContent = item.duration;
    document.getElementById('detail-deadline').textContent = item.deadline;
    document.getElementById('detail-desc').textContent = item.description;

    const respList = document.getElementById('detail-responsibilities');
    if (respList) {
      respList.innerHTML = item.responsibilities.map(r => `<li>${r}</li>`).join('');
    }

    const skillsList = document.getElementById('detail-skills');
    if (skillsList) {
      skillsList.innerHTML = item.skills.map(s => `
        <span class="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 text-slate-700 rounded-lg">${s}</span>
      `).join('');
    }

    const perksList = document.getElementById('detail-perks');
    if (perksList) {
      perksList.innerHTML = item.perks.map(p => `<li>${p}</li>`).join('');
    }

    if (detailApplyBtn) {
      const applied = isApplied(item.id);
      if (applied) {
        detailApplyBtn.textContent = 'Already Applied ✓';
        detailApplyBtn.className = 'px-5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg cursor-default';
        detailApplyBtn.onclick = null;
      } else {
        detailApplyBtn.textContent = 'Apply for this Position';
        detailApplyBtn.className = 'px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition shadow-sm';
        detailApplyBtn.onclick = () => {
          detailsDialog.close();
          openApplyModal(item.id);
        };
      }
    }

    detailsDialog.showModal();
  };

  // --- Apply Modal Handler ---
  window.openApplyModal = function (id) {
    const item = internships.find(i => i.id === id);
    if (!item || !applyDialog) return;

    const formIdInput = document.getElementById('form-internship-id');
    const roleBadge = document.getElementById('apply-role-badge');

    if (formIdInput) formIdInput.value = item.id;
    if (roleBadge) roleBadge.textContent = `${item.title} at ${item.company}`;

    applyDialog.showModal();
    document.getElementById('applicant-name')?.focus();
  };

  // --- Submit Application Handler ---
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const internshipId = parseInt(document.getElementById('form-internship-id')?.value, 10);
      const item = internships.find(i => i.id === internshipId);
      if (!item) return;

      if (isApplied(internshipId)) {
        showToast('You have already applied for this internship.', 'error');
        applyDialog.close();
        return;
      }

      const name = document.getElementById('applicant-name')?.value.trim();
      const email = document.getElementById('applicant-email')?.value.trim();
      const phone = document.getElementById('applicant-phone')?.value.trim();
      const college = document.getElementById('applicant-college')?.value.trim();
      const degree = document.getElementById('applicant-degree')?.value.trim();
      const link = document.getElementById('applicant-link')?.value.trim() || '';
      const note = document.getElementById('applicant-note')?.value.trim() || '';

      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      const appliedAt = new Date().toLocaleDateString('en-US', options);

      const applicationRecord = {
        internshipId,
        roleTitle: item.title,
        company: item.company,
        mode: item.mode,
        appliedAt,
        status: 'Under Review',
        applicant: { name, email, phone, college, degree, link, note }
      };

      applications.unshift(applicationRecord);
      saveApplications(applications);

      updateCounters();
      renderInternships();
      renderApplications();

      applyDialog.close();
      applyForm.reset();

      showToast(`Application submitted for ${item.title}!`);
    });
  }

  // --- Withdraw Application Handler ---
  window.withdrawApplication = function (internshipId) {
    const item = internships.find(i => i.id === internshipId);
    const roleName = item ? item.title : 'this role';

    if (confirm(`Are you sure you want to withdraw your application for "${roleName}"?`)) {
      applications = applications.filter(app => app.internshipId !== internshipId);
      saveApplications(applications);

      updateCounters();
      renderInternships();
      renderApplications();

      showToast('Application withdrawn successfully.');
    }
  };

  // --- Filter Event Listeners ---
  if (searchInput) searchInput.addEventListener('input', renderInternships);
  if (categoryFilter) categoryFilter.addEventListener('change', renderInternships);
  if (modeFilter) modeFilter.addEventListener('change', renderInternships);

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (categoryFilter) categoryFilter.value = 'All';
      if (modeFilter) modeFilter.value = 'All';
      renderInternships();
    });
  }

  // --- Progressive Light-Dismiss for Dialogs (Modern Web Guidance fallback) ---
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const isClickOutside = (e, dlg) => {
      const r = dlg.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    [detailsDialog, applyDialog].forEach(dlg => {
      if (!dlg) return;
      let pressedOutside = false;
      dlg.addEventListener('pointerdown', (e) => {
        pressedOutside = isClickOutside(e, dlg);
      });
      dlg.addEventListener('pointerup', (e) => {
        if (pressedOutside && isClickOutside(e, dlg)) {
          dlg.close();
        }
      });
    });
  }

  // --- Initial Render & Hash Routing ---
  updateCounters();
  renderInternships();
  renderApplications();

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash === 'applications') {
    switchTab('applications');
  } else {
    switchTab('explore');
  }

})();
