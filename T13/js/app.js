// City Science College - Management Portal Logic

(function () {
  'use strict';

  // --- Data Store ---
  const departmentsData = [
    {
      id: 'cs',
      name: 'Computer Science',
      code: 'DCS',
      hod: 'Dr. Rajesh Sharma',
      facultyCount: 8,
      studentsCount: 240,
      labs: 3,
      description: 'Focuses on algorithms, software architecture, artificial intelligence, and scalable systems.',
      programs: [
        { name: 'B.Sc. Computer Science', duration: '3 Years', intake: '60 Seats', level: 'Undergraduate' },
        { name: 'M.Sc. Computer Science', duration: '2 Years', intake: '30 Seats', level: 'Postgraduate' }
      ]
    },
    {
      id: 'it',
      name: 'Information Technology',
      code: 'DIT',
      hod: 'Prof. Meera Patel',
      facultyCount: 6,
      studentsCount: 210,
      labs: 2,
      description: 'Hands-on training in network engineering, cloud infrastructure, web development, and cyber security.',
      programs: [
        { name: 'B.Sc. Information Technology', duration: '3 Years', intake: '60 Seats', level: 'Undergraduate' },
        { name: 'PGDIT (Post Graduate Diploma)', duration: '1 Year', intake: '40 Seats', level: 'Diploma' }
      ]
    },
    {
      id: 'elec',
      name: 'Electronics',
      code: 'DELE',
      hod: 'Dr. Arvind Joshi',
      facultyCount: 5,
      studentsCount: 140,
      labs: 2,
      description: 'Specializes in embedded systems, microcontrollers, VLSI design, and modern IoT applications.',
      programs: [
        { name: 'B.Sc. Electronics', duration: '3 Years', intake: '40 Seats', level: 'Undergraduate' }
      ]
    },
    {
      id: 'math',
      name: 'Mathematics',
      code: 'DMATH',
      hod: 'Dr. Sneha Kulkarni',
      facultyCount: 5,
      studentsCount: 140,
      labs: 1,
      description: 'Pure and applied mathematics covering discrete structures, numerical analysis, statistics, and cryptography.',
      programs: [
        { name: 'B.Sc. Mathematics', duration: '3 Years', intake: '50 Seats', level: 'Undergraduate' },
        { name: 'M.Sc. Mathematics', duration: '2 Years', intake: '25 Seats', level: 'Postgraduate' }
      ]
    }
  ];

  const facultyData = [
    {
      name: 'Dr. Rajesh Sharma',
      dept: 'Computer Science',
      role: 'Professor & HOD',
      qual: 'Ph.D. in Computer Science',
      exp: '16 Years Exp',
      specialization: 'Artificial Intelligence & Data Algorithms',
      email: 'r.sharma@citycollege.edu'
    },
    {
      name: 'Prof. Meera Patel',
      dept: 'Information Technology',
      role: 'Associate Professor & HOD',
      qual: 'M.Tech in Information Technology',
      exp: '12 Years Exp',
      specialization: 'Cloud Computing & Web Systems',
      email: 'm.patel@citycollege.edu'
    },
    {
      name: 'Dr. Arvind Joshi',
      dept: 'Electronics',
      role: 'Associate Professor & HOD',
      qual: 'Ph.D. in Microelectronics',
      exp: '14 Years Exp',
      specialization: 'Embedded Systems, IoT & VLSI',
      email: 'a.joshi@citycollege.edu'
    },
    {
      name: 'Dr. Sneha Kulkarni',
      dept: 'Mathematics',
      role: 'Professor & HOD',
      qual: 'Ph.D. in Applied Mathematics',
      exp: '18 Years Exp',
      specialization: 'Discrete Structures & Cryptography',
      email: 's.kulkarni@citycollege.edu'
    },
    {
      name: 'Prof. Amit Trivedi',
      dept: 'Computer Science',
      role: 'Assistant Professor',
      qual: 'M.C.A., NET Qualified',
      exp: '7 Years Exp',
      specialization: 'Database Management & Python',
      email: 'a.trivedi@citycollege.edu'
    },
    {
      name: 'Prof. Pooja Shah',
      dept: 'Information Technology',
      role: 'Assistant Professor',
      qual: 'M.Tech in Cyber Security',
      exp: '5 Years Exp',
      specialization: 'Network Defense & Frontend Systems',
      email: 'p.shah@citycollege.edu'
    }
  ];

  const defaultStudents = [
    { roll: 'CS-2401', name: 'Aarav Patel', dept: 'Computer Science', program: 'B.Sc. CS', sem: 'Sem 4', status: 'Active' },
    { roll: 'CS-2402', name: 'Diya Shah', dept: 'Computer Science', program: 'B.Sc. CS', sem: 'Sem 4', status: 'Active' },
    { roll: 'IT-2311', name: 'Rohan Mehta', dept: 'Information Technology', program: 'B.Sc. IT', sem: 'Sem 6', status: 'Active' },
    { roll: 'IT-2312', name: 'Ananya Desai', dept: 'Information Technology', program: 'B.Sc. IT', sem: 'Sem 6', status: 'Active' },
    { roll: 'EL-2501', name: 'Harsh Verma', dept: 'Electronics', program: 'B.Sc. Electronics', sem: 'Sem 2', status: 'Active' },
    { roll: 'MA-2405', name: 'Priya Joshi', dept: 'Mathematics', program: 'B.Sc. Mathematics', sem: 'Sem 4', status: 'Active' }
  ];

  const eventsData = [
    {
      id: 1,
      title: "TechnoVision 2026 - Annual Tech Symposium",
      type: "Event",
      date: "Dec 12, 2026",
      dept: "Computer Science & IT",
      venue: "Central Auditorium",
      description: "Inter-collegiate technical symposium with hackathons, project displays, coding sprints, and industry keynote speakers."
    },
    {
      id: 2,
      title: "Odd Semester University Examination Circular",
      type: "Academic",
      date: "Nov 28, 2026",
      dept: "Exam Cell",
      venue: "Main Examination Block",
      description: "Release of hall tickets and final schedule circular for 1st, 3rd, and 5th semester degree examinations."
    },
    {
      id: 3,
      title: "Seminar on Modern Cloud Architectures & DevOps",
      type: "Seminar",
      date: "Dec 05, 2026",
      dept: "Computer Science",
      venue: "Seminar Hall B",
      description: "Interactive session by senior engineering leads on containerization, microservices, and serverless workflows."
    },
    {
      id: 4,
      title: "Inter-Department Cricket & Badminton Tournament",
      type: "Sports",
      date: "Dec 18, 2026",
      dept: "Sports Committee",
      venue: "College Sports Pavilion",
      description: "Departmental league stage matches begin next Friday. Captains are instructed to submit team rosters by Wednesday."
    },
    {
      id: 5,
      title: "National Mathematics Day Quiz & Paper Contest",
      type: "Academic",
      date: "Dec 22, 2026",
      dept: "Mathematics",
      venue: "Lecture Hall 102",
      description: "Celebrating Srinivasa Ramanujan's anniversary with numerical analysis quizzes and student paper presentations."
    },
    {
      id: 6,
      title: "Hands-on Workshop on Embedded Systems & IoT",
      type: "Seminar",
      date: "Jan 08, 2027",
      dept: "Electronics",
      venue: "Hardware Lab 1",
      description: "Practical two-day workshop on microcontroller interfacing, sensor integration, and firmware testing."
    }
  ];

  // --- LocalStorage Setup for Students ---
  const STORAGE_KEY = 'college_portal_students_v1';

  function getStoredStudents() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading stored students:', e);
    }
    return defaultStudents;
  }

  function saveStudents(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Error saving students:', e);
    }
  }

  let studentsList = getStoredStudents();

  // --- Tab Navigation ---
  const tabs = ['overview', 'departments', 'faculty', 'students', 'events'];

  function switchTab(targetTab) {
    tabs.forEach(tab => {
      const btn = document.getElementById(`tab-btn-${tab}`);
      const panel = document.getElementById(`panel-${tab}`);

      const isActive = tab === targetTab;

      if (btn) {
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        if (isActive) {
          btn.className = 'tab-btn flex-1 min-w-[110px] py-2 px-3 text-xs font-semibold rounded-lg bg-blue-600 text-white transition text-center whitespace-nowrap shadow-sm';
        } else {
          btn.className = 'tab-btn flex-1 min-w-[110px] py-2 px-3 text-xs font-semibold rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition text-center whitespace-nowrap';
        }
      }

      if (panel) {
        if (isActive) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash !== `#${targetTab}`) {
      try {
        history.replaceState(null, '', `#${targetTab}`);
      } catch (e) {}
    }
  }

  window.switchTab = switchTab;

  tabs.forEach(tab => {
    const btn = document.getElementById(`tab-btn-${tab}`);
    if (btn) {
      btn.addEventListener('click', () => switchTab(tab));
    }
  });

  // --- Render Overview Notices ---
  function renderOverviewNotices() {
    const container = document.getElementById('overview-notices');
    if (!container) return;

    const recent = eventsData.slice(0, 4);
    container.innerHTML = recent.map(item => `
      <div class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition">
        <div class="flex-shrink-0 w-12 text-center py-1.5 px-1 rounded-lg bg-slate-100 text-slate-700">
          <span class="block text-[10px] uppercase font-bold text-slate-400">${item.date.split(' ')[0]}</span>
          <span class="block text-sm font-extrabold text-slate-800 leading-tight">${item.date.split(' ')[1].replace(',', '')}</span>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              item.type === 'Academic' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
              item.type === 'Seminar' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
              item.type === 'Sports' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
              'bg-blue-50 text-blue-700 border border-blue-200'
            }">${item.type}</span>
            <span class="text-[11px] text-slate-400 font-medium">${item.dept}</span>
          </div>
          <h3 class="text-xs font-bold text-slate-900 truncate">${item.title}</h3>
          <p class="text-[11px] text-slate-500 line-clamp-1 mt-0.5">${item.description}</p>
        </div>
      </div>
    `).join('');
  }

  // --- Render Departments & Courses ---
  function renderDepartments() {
    const container = document.getElementById('departments-container');
    if (!container) return;

    container.innerHTML = departmentsData.map(dept => `
      <div class="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex items-start justify-between">
            <div>
              <span class="text-[10px] font-bold tracking-wider text-blue-600 uppercase">${dept.code}</span>
              <h3 class="text-base font-bold text-slate-900">${dept.name}</h3>
            </div>
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600">
              ${dept.labs} Labs
            </span>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed">${dept.description}</p>

          <div class="flex items-center gap-4 text-xs text-slate-500 pt-1 border-t border-slate-100">
            <div>
              <span class="text-slate-400 text-[11px]">HOD:</span>
              <span class="font-semibold text-slate-800 ml-1">${dept.hod}</span>
            </div>
            <div>
              <span class="text-slate-400 text-[11px]">Faculty:</span>
              <span class="font-semibold text-slate-800 ml-1">${dept.facultyCount}</span>
            </div>
          </div>
        </div>

        <div class="space-y-2 pt-2 border-t border-slate-100">
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Programs Offered</span>
          <div class="space-y-1.5">
            ${dept.programs.map(prog => `
              <div class="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-xs">
                <div>
                  <span class="font-semibold text-slate-800 block">${prog.name}</span>
                  <span class="text-[10px] text-slate-500">${prog.level}</span>
                </div>
                <div class="text-right">
                  <span class="font-bold text-slate-700 block">${prog.duration}</span>
                  <span class="text-[10px] text-blue-600 font-medium">${prog.intake}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- Render Faculty Directory ---
  let selectedFacultyDept = 'All';

  function renderFaculty() {
    const container = document.getElementById('faculty-container');
    if (!container) return;

    const filtered = selectedFacultyDept === 'All'
      ? facultyData
      : facultyData.filter(f => f.dept === selectedFacultyDept);

    if (filtered.length === 0) {
      container.innerHTML = `<div class="col-span-full py-8 text-center text-xs text-slate-400">No faculty members found for this department.</div>`;
      return;
    }

    container.innerHTML = filtered.map(f => `
      <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-start justify-between gap-2">
            <div>
              <h3 class="text-sm font-bold text-slate-900">${f.name}</h3>
              <p class="text-xs font-semibold text-blue-600">${f.role}</p>
            </div>
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap">
              ${f.exp}
            </span>
          </div>

          <div class="text-xs text-slate-500 space-y-1 pt-1">
            <p><span class="text-slate-400">Dept:</span> <span class="font-medium text-slate-700">${f.dept}</span></p>
            <p><span class="text-slate-400">Degree:</span> <span class="font-medium text-slate-700">${f.qual}</span></p>
            <p><span class="text-slate-400">Area:</span> <span class="font-medium text-slate-700">${f.specialization}</span></p>
          </div>
        </div>

        <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
          <span class="text-slate-400 truncate">${f.email}</span>
          <a href="mailto:${f.email}" class="text-blue-600 font-semibold hover:underline flex-shrink-0">Contact</a>
        </div>
      </div>
    `).join('');
  }

  // Faculty filter buttons
  const facultyFilterBar = document.getElementById('faculty-filter-bar');
  if (facultyFilterBar) {
    const buttons = facultyFilterBar.querySelectorAll('.faculty-filter');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        selectedFacultyDept = btn.getAttribute('data-dept');
        buttons.forEach(b => {
          if (b === btn) {
            b.className = 'faculty-filter px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white transition whitespace-nowrap';
          } else {
            b.className = 'faculty-filter px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition whitespace-nowrap';
          }
        });
        renderFaculty();
      });
    });
  }

  // --- Render Students Roster ---
  const studentSearchInput = document.getElementById('student-search');
  const studentDeptSelect = document.getElementById('student-dept-filter');
  const studentCountBadge = document.getElementById('student-count-badge');
  const headerStudentCount = document.getElementById('header-student-count');

  function renderStudents() {
    const tbody = document.getElementById('students-tbody');
    if (!tbody) return;

    const query = (studentSearchInput?.value || '').trim().toLowerCase();
    const deptFilter = studentDeptSelect?.value || 'All';

    const filtered = studentsList.filter(s => {
      const matchQuery = s.name.toLowerCase().includes(query) || s.roll.toLowerCase().includes(query);
      const matchDept = deptFilter === 'All' || s.dept === deptFilter;
      return matchQuery && matchDept;
    });

    if (studentCountBadge) {
      studentCountBadge.textContent = `${filtered.length} Student${filtered.length === 1 ? '' : 's'}`;
    }
    if (headerStudentCount) {
      headerStudentCount.textContent = `${724 + studentsList.length}+`;
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="py-8 text-center text-xs text-slate-400">
            No student records match the search criteria.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(s => `
      <tr class="hover:bg-slate-50/70 transition">
        <td class="py-3 px-4 font-mono font-semibold text-slate-800">${s.roll}</td>
        <td class="py-3 px-4 font-semibold text-slate-900">${s.name}</td>
        <td class="py-3 px-4 text-slate-600">${s.dept}</td>
        <td class="py-3 px-4 text-slate-600">${s.program || 'Degree'}</td>
        <td class="py-3 px-4 text-slate-600">${s.sem}</td>
        <td class="py-3 px-4 text-center">
          <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            ${s.status || 'Active'}
          </span>
        </td>
        <td class="py-3 px-4 text-right">
          <button type="button" onclick="deleteStudent('${s.roll}')" class="text-rose-600 hover:text-rose-800 font-semibold text-[11px] hover:underline">
            Remove
          </button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteStudent = function (roll) {
    if (confirm(`Remove student ${roll} from database?`)) {
      studentsList = studentsList.filter(s => s.roll !== roll);
      saveStudents(studentsList);
      renderStudents();
    }
  };

  if (studentSearchInput) {
    studentSearchInput.addEventListener('input', renderStudents);
  }
  if (studentDeptSelect) {
    studentDeptSelect.addEventListener('change', renderStudents);
  }

  // Add Student Toggle & Form
  const toggleBtn = document.getElementById('toggle-add-student-btn');
  const addCard = document.getElementById('add-student-card');
  const closeBtn = document.getElementById('close-add-student');
  const addForm = document.getElementById('add-student-form');

  if (toggleBtn && addCard) {
    toggleBtn.addEventListener('click', () => {
      addCard.classList.toggle('hidden');
      if (!addCard.classList.contains('hidden')) {
        document.getElementById('new-roll')?.focus();
      }
    });
  }

  if (closeBtn && addCard) {
    closeBtn.addEventListener('click', () => {
      addCard.classList.add('hidden');
    });
  }

  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const roll = document.getElementById('new-roll').value.trim();
      const name = document.getElementById('new-name').value.trim();
      const dept = document.getElementById('new-dept').value;
      const sem = document.getElementById('new-sem').value.trim();

      if (!roll || !name) return;

      // Determine program based on department
      let progName = 'B.Sc. ' + (dept === 'Computer Science' ? 'CS' : dept === 'Information Technology' ? 'IT' : dept);

      const exists = studentsList.some(s => s.roll.toLowerCase() === roll.toLowerCase());
      if (exists) {
        alert('A student with this Roll Number already exists.');
        return;
      }

      studentsList.unshift({
        roll,
        name,
        dept,
        program: progName,
        sem,
        status: 'Active'
      });

      saveStudents(studentsList);
      renderStudents();

      addForm.reset();
      addCard.classList.add('hidden');
    });
  }

  // --- Render Events & Notices ---
  let selectedEventType = 'All';

  function renderEvents() {
    const container = document.getElementById('events-container');
    if (!container) return;

    const filtered = selectedEventType === 'All'
      ? eventsData
      : eventsData.filter(ev => ev.type === selectedEventType);

    if (filtered.length === 0) {
      container.innerHTML = `<div class="col-span-full py-8 text-center text-xs text-slate-400">No events found in this category.</div>`;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${
              item.type === 'Academic' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
              item.type === 'Seminar' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
              item.type === 'Sports' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
              'bg-blue-50 text-blue-700 border border-blue-200'
            }">${item.type}</span>
            <span class="text-xs font-semibold text-slate-500">${item.date}</span>
          </div>

          <h3 class="text-sm font-bold text-slate-900 leading-snug">${item.title}</h3>
          <p class="text-xs text-slate-600 leading-relaxed">${item.description}</p>
        </div>

        <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div>
            <span class="text-slate-400">Host:</span>
            <span class="font-medium text-slate-700 ml-1">${item.dept}</span>
          </div>
          <div>
            <span class="text-slate-400">Venue:</span>
            <span class="font-medium text-slate-700 ml-1">${item.venue}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Event filter buttons
  const eventsFilterBar = document.getElementById('events-filter-bar');
  if (eventsFilterBar) {
    const buttons = eventsFilterBar.querySelectorAll('.event-filter');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        selectedEventType = btn.getAttribute('data-type');
        buttons.forEach(b => {
          if (b === btn) {
            b.className = 'event-filter px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white transition whitespace-nowrap';
          } else {
            b.className = 'event-filter px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition whitespace-nowrap';
          }
        });
        renderEvents();
      });
    });
  }

  // --- Initial Render ---
  renderOverviewNotices();
  renderDepartments();
  renderFaculty();
  renderStudents();
  renderEvents();

  // Support direct hash tab linking (e.g., #departments, #faculty, #students, #events)
  const initialHash = window.location.hash.replace('#', '') || (new URLSearchParams(window.location.search)).get('tab');
  if (initialHash && tabs.includes(initialHash)) {
    switchTab(initialHash);
  }

})();
