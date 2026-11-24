// Job Portal UI - Core Application Logic

(function () {
  'use strict';

  // --- Verified Jobs Directory Dataset ---
  const jobsData = [
    {
      id: 1,
      title: 'Senior Frontend Engineer (React/TypeScript)',
      company: 'Razorpay',
      location: 'Bengaluru',
      mode: 'Hybrid',
      type: 'Full-time',
      exp: '3 - 5 Years',
      expCategory: 'Mid',
      category: 'Engineering',
      salary: '₹18 - 28 LPA',
      numericSalary: 28,
      posted: '1 day ago',
      timestamp: 1,
      description: 'Join the merchant dashboard engineering team to build lightning-fast payment interfaces, checkout SDKs, and analytics visualizations used by millions of businesses.',
      responsibilities: [
        'Architect high-performance web applications using React, TypeScript, and Tailwind',
        'Optimize bundle sizes, core web vitals, and client-side rendering speed',
        'Build reusable component systems with high accessibility standards',
        'Collaborate with product designers and backend API engineers'
      ],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'Web Vitals'],
      perks: ['Comprehensive Health Insurance', 'Annual Wellness & Home-Office Allowance', 'Flexible Hybrid Work Schedule', 'ESOPs Option Pool'],
      aboutCompany: 'Razorpay is India’s leading full-stack financial solutions company powering digital payments and banking for fast-growing businesses.'
    },
    {
      id: 2,
      title: 'Backend Go/Node Developer',
      company: 'Zerodha',
      location: 'Remote',
      mode: 'Remote',
      type: 'Full-time',
      exp: '2 - 4 Years',
      expCategory: 'Mid',
      category: 'Engineering',
      salary: '₹16 - 24 LPA',
      numericSalary: 24,
      posted: '2 days ago',
      timestamp: 2,
      description: 'Build low-latency order execution services and market data streaming systems handling billions of requests daily with minimal resource footprints.',
      responsibilities: [
        'Design and deploy concurrent backend microservices in Go and Node.js',
        'Optimize PostgreSQL queries and Redis caching for high-throughput reads',
        'Maintain zero-downtime deployment pipelines and monitor service health',
        'Follow simple, dependency-light software design principles'
      ],
      skills: ['Golang', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      perks: ['100% Remote Culture', 'Generous Annual Bonus', 'Health & Term Insurance', 'Top-tier Workstation Budget'],
      aboutCompany: 'Zerodha is India’s largest retail brokerage firm pioneering modern fintech trading platforms and open-source tooling.'
    },
    {
      id: 3,
      title: 'UI/UX Product Designer',
      company: 'Swiggy',
      location: 'Bengaluru',
      mode: 'On-site',
      type: 'Full-time',
      exp: '2 - 4 Years',
      expCategory: 'Mid',
      category: 'Design',
      salary: '₹14 - 22 LPA',
      numericSalary: 22,
      posted: '3 days ago',
      timestamp: 3,
      description: 'Design intuitive, frictionless ordering flows, grocery delivery experiences, and personalized merchant recommendation interfaces across mobile and web.',
      responsibilities: [
        'Create user journeys, wireframes, interactive prototypes, and design specs in Figma',
        'Conduct qualitative user testing and translate quantitative metrics into design improvements',
        'Contribute to and maintain Swiggy’s unified design system components',
        'Partner closely with product managers and iOS/Android developers'
      ],
      skills: ['Figma', 'UI Prototyping', 'User Research', 'Design Systems', 'Micro-interactions'],
      perks: ['Free Daily Food & Snacks at Office', 'Annual Learning & Conference Stipend', 'Comprehensive Medical Coverage', 'Parental Leaves'],
      aboutCompany: 'Swiggy is India’s premier on-demand convenience platform connecting consumers with restaurants and grocery stores.'
    },
    {
      id: 4,
      title: 'Python Data Engineer',
      company: 'Fractal Analytics',
      location: 'Mumbai',
      mode: 'Hybrid',
      type: 'Full-time',
      exp: '1 - 3 Years',
      expCategory: 'Entry',
      category: 'Data',
      salary: '₹12 - 20 LPA',
      numericSalary: 20,
      posted: 'Just now',
      timestamp: 0,
      description: 'Build scalable data pipelines, automated ETL workflows, and data warehousing models that power predictive AI models for enterprise retail clients.',
      responsibilities: [
        'Develop automated batch and streaming data pipelines using Python and Spark',
        'Model data schemas for Snowflake and Google BigQuery warehouses',
        'Implement automated data quality checks and anomaly detection scripts',
        'Collaborate with data scientists to deploy machine learning features'
      ],
      skills: ['Python', 'SQL', 'Apache Spark', 'Snowflake', 'Airflow'],
      perks: ['Flexible Hybrid Work Hours', 'Certification Reimbursements', 'Health & Dental Insurance', 'Collaborative Innovation Labs'],
      aboutCompany: 'Fractal is a global leader in artificial intelligence and analytics, helping Fortune 500 companies make every human decision smarter.'
    },
    {
      id: 5,
      title: 'Full Stack JavaScript Engineer',
      company: 'Postman',
      location: 'Bengaluru',
      mode: 'Remote',
      type: 'Full-time',
      exp: '4 - 7 Years',
      expCategory: 'Senior',
      category: 'Engineering',
      salary: '₹20 - 32 LPA',
      numericSalary: 32,
      posted: '4 days ago',
      timestamp: 4,
      description: 'Contribute to the world’s leading API development platform. Work on electron desktop clients, browser extensions, and cloud collaboration workspaces.',
      responsibilities: [
        'Develop real-time collaborative workspace features using modern web APIs',
        'Optimize client-side memory footprint and Electron rendering pipelines',
        'Build extensible plugins and developer integrations for API testing',
        'Mentor junior software engineers and conduct architectural reviews'
      ],
      skills: ['JavaScript / Node', 'React', 'Electron', 'REST APIs', 'GraphQL'],
      perks: ['Remote-First Setup Stipend', 'Unlimited Paid Time Off (PTO)', 'Annual Global Team Offsites', 'Generous Stock Options'],
      aboutCompany: 'Postman is used by over 30 million developers and 500,000 organizations worldwide to simplify API lifecycles.'
    },
    {
      id: 6,
      title: 'DevOps & Cloud Engineer',
      company: 'BrowserStack',
      location: 'Mumbai',
      mode: 'Hybrid',
      type: 'Full-time',
      exp: '3 - 5 Years',
      expCategory: 'Mid',
      category: 'Data',
      salary: '₹15 - 25 LPA',
      numericSalary: 25,
      posted: '2 days ago',
      timestamp: 2,
      description: 'Maintain high-availability cloud infrastructure across thousands of virtualized browsers and physical mobile devices operating 24/7 globally.',
      responsibilities: [
        'Manage AWS infrastructure as code using Terraform and Ansible',
        'Orchestrate Kubernetes clusters and automate deployment pipelines',
        'Improve system observability using Prometheus, Grafana, and ELK stack',
        'Lead incident response drills and post-mortem root cause analyses'
      ],
      skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Linux / Bash'],
      perks: ['Modern Mumbai Tech Hub Office', 'Health & Critical Illness Cover', 'Subsidized Meals & Cab Facilities', 'Skill Upgrade Budget'],
      aboutCompany: 'BrowserStack is the world’s leading web and mobile software testing platform relied upon by Google, Amazon, and Microsoft.'
    },
    {
      id: 7,
      title: 'Mobile App Developer (Flutter)',
      company: 'Cred',
      location: 'Bengaluru',
      mode: 'On-site',
      type: 'Full-time',
      exp: '2 - 5 Years',
      expCategory: 'Mid',
      category: 'Engineering',
      salary: '₹18 - 26 LPA',
      numericSalary: 26,
      posted: '5 days ago',
      timestamp: 5,
      description: 'Craft award-winning mobile interactions, fluid 60fps animations, and secure credit card rewards workflows for millions of premium members.',
      responsibilities: [
        'Build silky-smooth mobile user experiences in Flutter and Dart',
        'Integrate biometric security, device sensors, and native platform channels',
        'Profile app performance to maintain consistent 60fps frame rates',
        'Collaborate with motion designers to bring creative concepts to life'
      ],
      skills: ['Flutter', 'Dart', 'State Management (Riverpod)', 'Mobile Animations', 'REST / WebSockets'],
      perks: ['Gourmet Cafeteria & Coffee Bar', 'World-Class Health Care Plans', 'Generous Equity Grants', 'State-of-the-art Hardware'],
      aboutCompany: 'Cred is a members-only credit card rewards club celebrating creditworthy individuals with exceptional aesthetic experiences.'
    },
    {
      id: 8,
      title: 'QA Automation Engineer',
      company: 'Freshworks',
      location: 'Chennai',
      mode: 'Hybrid',
      type: 'Full-time',
      exp: '2 - 4 Years',
      expCategory: 'Mid',
      category: 'Engineering',
      salary: '₹10 - 16 LPA',
      numericSalary: 16,
      posted: '3 days ago',
      timestamp: 3,
      description: 'Design and implement robust end-to-end automation frameworks for customer engagement and CRM cloud products used globally.',
      responsibilities: [
        'Develop scalable automated test suites using Playwright and TypeScript',
        'Integrate automated regression runs into continuous CI/CD pipelines',
        'Perform performance benchmarking and API contract testing',
        'Work with agile squads to review user stories and acceptance criteria'
      ],
      skills: ['Playwright / Cypress', 'TypeScript', 'API Testing (Postman)', 'CI/CD Pipelines', 'Jira'],
      perks: ['Modern Chennai Campus', 'Employee Stock Purchase Plan', 'Comprehensive Medical & Accident Insurance', 'Hybrid Flexibility'],
      aboutCompany: 'Freshworks creates innovative customer service and IT management software that empowers teams to delight customers.'
    },
    {
      id: 9,
      title: 'Junior Web Developer',
      company: 'Surat InfoTech',
      location: 'Surat',
      mode: 'On-site',
      type: 'Full-time',
      exp: '0 - 2 Years',
      expCategory: 'Entry',
      category: 'Engineering',
      salary: '₹4.5 - 7 LPA',
      numericSalary: 7,
      posted: 'Just now',
      timestamp: 0,
      description: 'Great starter role for enthusiastic graduates. Work on dynamic client websites, e-commerce storefronts, and internal business tools.',
      responsibilities: [
        'Develop responsive web pages using clean HTML5, CSS3, and JavaScript',
        'Fix cross-browser layout bugs and optimize image assets',
        'Assist in building custom WordPress and Tailwind UI themes',
        'Maintain version control with Git and collaborate on sprint tasks'
      ],
      skills: ['HTML5 / CSS3', 'JavaScript', 'Tailwind CSS', 'Git', 'PHP / MySQL Basics'],
      perks: ['Mentorship by Senior Leads', 'Friendly Local Work Environment', 'Performance Bonus', 'Rapid Skill Advancement'],
      aboutCompany: 'Surat InfoTech delivers customized web development, enterprise software, and cloud solutions to local and global businesses.'
    },
    {
      id: 10,
      title: 'Technical Product Manager',
      company: 'Meesho',
      location: 'Bengaluru',
      mode: 'Hybrid',
      type: 'Full-time',
      exp: '4 - 6 Years',
      expCategory: 'Senior',
      category: 'Product',
      salary: '₹22 - 35 LPA',
      numericSalary: 35,
      posted: '1 day ago',
      timestamp: 1,
      description: 'Own technical product roadmaps for logistics routing, supplier onboarding, and marketplace pricing algorithms democratizing e-commerce for Bharat.',
      responsibilities: [
        'Define clear product requirements, user stories, and acceptance criteria',
        'Analyze funnels, retention metrics, and A/B test experiment results',
        'Work closely with engineering squads to balance tech debt and feature velocity',
        'Conduct regular merchant interviews to uncover unmet user needs'
      ],
      skills: ['Product Strategy', 'SQL / Data Analytics', 'A/B Testing', 'Agile / Scrum', 'System Architecture'],
      perks: ['Industry-Leading Compensation', 'Quarterly Growth Reviews', 'Comprehensive Medical Cover', 'Hybrid Working Culture'],
      aboutCompany: 'Meesho is an e-commerce marketplace enabling small businesses, manufacturers, and consumers to transact across India.'
    }
  ];

  // --- LocalStorage State Management ---
  const SAVED_STORAGE_KEY = 'job_portal_saved_jobs_v1';
  const APPLIED_STORAGE_KEY = 'job_portal_applied_jobs_v1';

  function getStoredSet(key) {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        const arr = JSON.parse(data);
        if (Array.isArray(arr)) return new Set(arr);
      }
    } catch (e) {
      console.error('Storage read error:', e);
    }
    return new Set();
  }

  function saveStoredSet(key, set) {
    try {
      localStorage.setItem(key, JSON.stringify(Array.from(set)));
    } catch (e) {
      console.error('Storage write error:', e);
    }
  }

  let savedJobs = getStoredSet(SAVED_STORAGE_KEY);
  let appliedJobs = getStoredSet(APPLIED_STORAGE_KEY);

  // --- DOM Elements ---
  const statTotalJobs = document.getElementById('stat-total-jobs');
  const statSavedJobs = document.getElementById('stat-saved-jobs');
  const statAppliedJobs = document.getElementById('stat-applied-jobs');
  const pillSavedCount = document.getElementById('pill-saved-count');
  const resultsCount = document.getElementById('results-count');

  const searchKeyword = document.getElementById('search-keyword');
  const filterLocation = document.getElementById('filter-location');
  const filterType = document.getElementById('filter-type');
  const filterExp = document.getElementById('filter-exp');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const sortBySelect = document.getElementById('sort-by');

  const jobsGrid = document.getElementById('jobs-grid');
  const noJobsState = document.getElementById('no-jobs-state');

  const jobDetailsDialog = document.getElementById('job-details-dialog');
  const applyDialog = document.getElementById('apply-dialog');
  const applyJobForm = document.getElementById('apply-job-form');

  let activeCategoryPill = 'All';

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

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // --- Update Dashboard Counters ---
  function updateCounters() {
    if (statTotalJobs) statTotalJobs.textContent = `${jobsData.length} Jobs`;
    if (statSavedJobs) statSavedJobs.textContent = `${savedJobs.size} Saved`;
    if (statAppliedJobs) statAppliedJobs.textContent = `${appliedJobs.size} Applied`;
    if (pillSavedCount) pillSavedCount.textContent = savedJobs.size;
  }

  // --- Toggle Save / Bookmark ---
  function toggleSaveJob(id, e) {
    if (e) e.stopPropagation();

    if (savedJobs.has(id)) {
      savedJobs.delete(id);
      showToast('Job removed from saved list.');
    } else {
      savedJobs.add(id);
      showToast('Job saved to your bookmarks.');
    }

    saveStoredSet(SAVED_STORAGE_KEY, savedJobs);
    updateCounters();
    renderJobs();

    // If modal is open for this job, sync its button text
    const openJobId = parseInt(document.getElementById('apply-form-job-id')?.value, 10);
    if (openJobId === id) {
      updateModalBookmarkButton(id);
    }
  }

  window.toggleSaveJob = toggleSaveJob;

  function updateModalBookmarkButton(id) {
    const btn = document.getElementById('detail-bookmark-btn');
    const text = document.getElementById('detail-bookmark-text');
    if (!btn || !text) return;

    const isSaved = savedJobs.has(id);
    text.textContent = isSaved ? 'Saved in Bookmarks' : 'Save Job';
    if (isSaved) {
      btn.className = 'inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition border border-blue-200';
    } else {
      btn.className = 'inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition';
    }
  }

  // --- Filter and Sort Logic ---
  function getFilteredJobs() {
    const keyword = (searchKeyword?.value || '').trim().toLowerCase();
    const location = filterLocation?.value || 'All';
    const type = filterType?.value || 'All';
    const exp = filterExp?.value || 'All';
    const sortBy = sortBySelect?.value || 'recent';

    return jobsData.filter(job => {
      // Keyword matching (title, company, skills, description)
      const matchKeyword =
        !keyword ||
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.description.toLowerCase().includes(keyword) ||
        job.skills.some(s => s.toLowerCase().includes(keyword));

      // Location matching
      const matchLocation =
        location === 'All' ||
        (location === 'Remote' && (job.mode === 'Remote' || job.location === 'Remote')) ||
        job.location.toLowerCase() === location.toLowerCase();

      // Type matching
      const matchType = type === 'All' || job.type === type;

      // Experience matching
      const matchExp = exp === 'All' || job.expCategory === exp;

      // Quick Category Pill matching
      let matchPill = true;
      if (activeCategoryPill === 'Remote') {
        matchPill = job.mode === 'Remote';
      } else if (activeCategoryPill === 'Engineering') {
        matchPill = job.category === 'Engineering';
      } else if (activeCategoryPill === 'Design') {
        matchPill = job.category === 'Design';
      } else if (activeCategoryPill === 'Data') {
        matchPill = job.category === 'Data';
      } else if (activeCategoryPill === 'Saved') {
        matchPill = savedJobs.has(job.id);
      }

      return matchKeyword && matchLocation && matchType && matchExp && matchPill;
    }).sort((a, b) => {
      if (sortBy === 'salary-high') {
        return b.numericSalary - a.numericSalary;
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return a.timestamp - b.timestamp;
    });
  }

  // --- Render Job Cards ---
  function renderJobs() {
    if (!jobsGrid) return;

    const filtered = getFilteredJobs();

    if (resultsCount) resultsCount.textContent = filtered.length;

    if (filtered.length === 0) {
      jobsGrid.innerHTML = '';
      if (noJobsState) noJobsState.classList.remove('hidden');
      return;
    }

    if (noJobsState) noJobsState.classList.add('hidden');

    jobsGrid.innerHTML = filtered.map(job => {
      const isSaved = savedJobs.has(job.id);
      const isApplied = appliedJobs.has(job.id);

      return `
        <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between gap-4 group">
          <div class="space-y-3">
            
            <!-- Company & Save Action Header -->
            <div class="flex items-start justify-between gap-2">
              <div class="flex items-center gap-2.5">
                <div class="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-extrabold text-sm flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition">
                  ${job.company.charAt(0)}
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900 leading-tight">${job.company}</h4>
                  <p class="text-[11px] text-slate-500">${job.location} • <span class="font-medium ${job.mode === 'Remote' ? 'text-emerald-700' : 'text-slate-600'}">${job.mode}</span></p>
                </div>
              </div>

              <!-- Bookmark Button -->
              <button type="button" onclick="toggleSaveJob(${job.id}, event)" title="${isSaved ? 'Remove from saved' : 'Save job'}" class="w-8 h-8 rounded-lg flex items-center justify-center transition ${
                isSaved
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
              }">
                <svg class="w-4 h-4" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
              </button>
            </div>

            <!-- Job Title & Overview -->
            <div>
              <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug cursor-pointer" onclick="openJobDetails(${job.id})">
                ${job.title}
              </h3>
              <p class="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">${job.description}</p>
            </div>

            <!-- Key Badges Strip -->
            <div class="flex items-center gap-1.5 flex-wrap text-[11px] font-semibold pt-1">
              <span class="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold">${job.salary}</span>
              <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">${job.type}</span>
              <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">${job.exp}</span>
            </div>

            <!-- Skills List -->
            <div class="flex flex-wrap gap-1 pt-1">
              ${job.skills.slice(0, 3).map(s => `
                <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100">${s}</span>
              `).join('')}
              ${job.skills.length > 3 ? `<span class="text-[10px] font-medium px-1.5 py-0.5 rounded-md text-slate-400">+${job.skills.length - 3}</span>` : ''}
            </div>

          </div>

          <!-- Card Bottom & Buttons -->
          <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <span class="text-[11px] text-slate-400 font-medium">${job.posted}</span>

            <div class="flex items-center gap-1.5">
              <button type="button" onclick="openJobDetails(${job.id})" class="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition">
                Details
              </button>

              ${isApplied ? `
                <span class="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Applied ✓
                </span>
              ` : `
                <button type="button" onclick="openApplyModal(${job.id})" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm">
                  Apply Now
                </button>
              `}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Open Job Details Modal ---
  window.openJobDetails = function (id) {
    const job = jobsData.find(j => j.id === id);
    if (!job || !jobDetailsDialog) return;

    document.getElementById('dialog-job-title').textContent = job.title;
    document.getElementById('detail-company-location').textContent = `${job.company} • ${job.location}`;
    document.getElementById('detail-company-logo').textContent = job.company.charAt(0);
    document.getElementById('detail-badge-type').textContent = job.type;
    document.getElementById('detail-badge-mode').textContent = job.mode;
    document.getElementById('detail-salary').textContent = job.salary;
    document.getElementById('detail-experience').textContent = job.exp;
    document.getElementById('detail-posted').textContent = job.posted;
    document.getElementById('detail-desc').textContent = job.description;
    document.getElementById('detail-about-company').textContent = job.aboutCompany;

    const respList = document.getElementById('detail-responsibilities');
    if (respList) {
      respList.innerHTML = job.responsibilities.map(r => `<li>${r}</li>`).join('');
    }

    const skillsList = document.getElementById('detail-skills');
    if (skillsList) {
      skillsList.innerHTML = job.skills.map(s => `
        <span class="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 text-slate-700 rounded-lg">${s}</span>
      `).join('');
    }

    const perksList = document.getElementById('detail-perks');
    if (perksList) {
      perksList.innerHTML = job.perks.map(p => `<li>${p}</li>`).join('');
    }

    // Set hidden ID for context
    const formJobId = document.getElementById('apply-form-job-id');
    if (formJobId) formJobId.value = job.id;

    updateModalBookmarkButton(job.id);

    const bookmarkBtn = document.getElementById('detail-bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.onclick = () => toggleSaveJob(job.id);
    }

    const applyBtn = document.getElementById('detail-apply-btn');
    if (applyBtn) {
      const isApplied = appliedJobs.has(job.id);
      if (isApplied) {
        applyBtn.textContent = 'Already Applied ✓';
        applyBtn.className = 'px-5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg cursor-default';
        applyBtn.onclick = null;
      } else {
        applyBtn.textContent = 'Easy Apply';
        applyBtn.className = 'px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition shadow-sm';
        applyBtn.onclick = () => {
          jobDetailsDialog.close();
          openApplyModal(job.id);
        };
      }
    }

    jobDetailsDialog.showModal();
  };

  // --- Open Apply Modal ---
  window.openApplyModal = function (id) {
    const job = jobsData.find(j => j.id === id);
    if (!job || !applyDialog) return;

    const formId = document.getElementById('apply-form-job-id');
    const badge = document.getElementById('apply-job-badge');

    if (formId) formId.value = job.id;
    if (badge) badge.textContent = `${job.title} at ${job.company}`;

    applyDialog.showModal();
    document.getElementById('apply-name')?.focus();
  };

  // --- Application Form Submit ---
  if (applyJobForm) {
    applyJobForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const jobId = parseInt(document.getElementById('apply-form-job-id')?.value, 10);
      const job = jobsData.find(j => j.id === jobId);
      if (!job) return;

      if (appliedJobs.has(jobId)) {
        showToast('You have already applied for this role.', 'error');
        applyDialog.close();
        return;
      }

      appliedJobs.add(jobId);
      saveStoredSet(APPLIED_STORAGE_KEY, appliedJobs);

      updateCounters();
      renderJobs();

      applyDialog.close();
      applyJobForm.reset();

      showToast(`Application successfully sent to ${job.company}!`);
    });
  }

  // --- Filter Event Listeners ---
  if (searchKeyword) searchKeyword.addEventListener('input', renderJobs);
  if (filterLocation) filterLocation.addEventListener('change', renderJobs);
  if (filterType) filterType.addEventListener('change', renderJobs);
  if (filterExp) filterExp.addEventListener('change', renderJobs);
  if (sortBySelect) sortBySelect.addEventListener('change', renderJobs);

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchKeyword) searchKeyword.value = '';
      if (filterLocation) filterLocation.value = 'All';
      if (filterType) filterType.value = 'All';
      if (filterExp) filterExp.value = 'All';
      if (sortBySelect) sortBySelect.value = 'recent';

      activeCategoryPill = 'All';
      updatePillStyling();
      renderJobs();
    });
  }

  // Category Pills
  const pillButtons = document.querySelectorAll('.cat-pill');
  function updatePillStyling() {
    pillButtons.forEach(btn => {
      const cat = btn.getAttribute('data-category');
      if (cat === activeCategoryPill) {
        btn.className = 'cat-pill px-3 py-1.5 font-semibold rounded-lg bg-blue-600 text-white transition whitespace-nowrap shadow-sm';
      } else {
        btn.className = 'cat-pill px-3 py-1.5 font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition whitespace-nowrap';
      }
    });
  }

  pillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategoryPill = btn.getAttribute('data-category');
      updatePillStyling();
      renderJobs();
    });
  });

  // --- Progressive Light-Dismiss for Dialogs (Modern Web Guidance) ---
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const isClickOutside = (e, dlg) => {
      const r = dlg.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    [jobDetailsDialog, applyDialog].forEach(dlg => {
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

  // --- Initial Render ---
  updateCounters();
  renderJobs();

})();
