/**
 * Universal UPSC Exam Preparation Command Center JS Engine
 * Complete Syllabuses for APFC, EPFO EO/AO, CSE/IAS, CAPF AC, CDS + Dynamic Goal Selector
 */

const EXAM_PACKS = {
  crt2026: {
    id: 'crt2026', title: 'UPSC Combined APFC + EPFO EO/AO Joint Exam 2026', subtitle: 'Combined Recruitment Test (CRT) for both APFC & EO/AO in EPFO', category: 'COMBINED RECRUITMENT TEST', formDate: '2026-08-22T00:00:00', examDate: '2026-12-19T09:30:00', defaultTargetHours: 8,
    syllabus: [
      { id: 'crt_ir', title: 'Industrial Relations & Labour Laws', isCore: true, topics: [ { id: 'c_ir1', name: 'Trade Unions Act 1926 & Registration' }, { id: 'c_ir2', name: 'Industrial Disputes Act 1947 & Retrenchment' }, { id: 'c_ir3', name: 'Factories Act 1948 & Worker Safety' }, { id: 'c_ir4', name: 'The 4 New Labour Codes 2020 Provisions' } ] },
      { id: 'crt_ss', title: 'Social Security in India', isCore: true, topics: [ { id: 'c_ss1', name: 'EPF & MP Act 1952 (EPF, EPS Pension, EDLI)' }, { id: 'c_ss2', name: 'ESI Act 1948 & Payment of Gratuity Act 1972' }, { id: 'c_ss3', name: 'Maternity Benefit Act 1961 & Central Schemes' } ] },
      { id: 'crt_acc', title: 'General Accounting Principles and Auditing', isCore: true, topics: [ { id: 'c_acc1', name: 'Double Entry System, Journal & Ledger' }, { id: 'c_acc2', name: 'Trial Balance, Depreciation & Financial Statements' }, { id: 'c_acc3', name: 'Auditing Standards & Principles' } ] },
      { id: 'crt_pop', title: 'Population, Development and Globalization', isCore: false, topics: [ { id: 'c_pop1', name: 'Demographic Trends, Urbanization & Migration' }, { id: 'c_pop2', name: 'Impact of Globalization on Labour & Economy' } ] },
      { id: 'crt_pol', title: 'Governance and Constitution of India', isCore: false, topics: [ { id: 'c_pol1', name: 'Fundamental Rights, DPSP, Parliament & Statutory Bodies' }, { id: 'c_pol2', name: 'Quasi-Judicial Powers & APFC Sec 7A Inquiry' } ] },
      { id: 'crt_econ', title: 'Present Trends in Indian Economy', isCore: false, topics: [ { id: 'c_ec1', name: 'Inflation, GDP Growth & RBI Monetary Policy' }, { id: 'c_ec2', name: 'Union Budget 2026 & Economic Survey Key Highlights' } ] },
      { id: 'crt_hist', title: 'Indian Freedom Struggle, Culture & Heritage', isCore: false, topics: [ { id: 'c_h1', name: '1857 Revolt, Freedom Movements & Gandhian Era (1857-1947)' }, { id: 'c_h2', name: 'Indian Art, Architecture & Classical Heritage' } ] },
      { id: 'crt_sci', title: 'General Science & Computer Applications', isCore: false, topics: [ { id: 'c_sc1', name: 'Everyday Physics, Chemistry & Life Sciences' }, { id: 'c_sc2', name: 'Computer Hardware, Software, Networking & MS Office' } ] },
      { id: 'crt_math', title: 'Elementary Mathematics, Statistics & Mental Ability', isCore: false, topics: [ { id: 'c_q1', name: 'Number System, DI, Percentages, Ratio, Profit & Loss' }, { id: 'c_q2', name: 'Statistics: Central Tendency & Dispersion' } ] },
      { id: 'crt_eng', title: 'General English', isCore: false, topics: [ { id: 'c_e1', name: 'Vocabulary, Grammar Rules, Error Spotting & Comprehension' } ] }
    ],
    flashcards: [ { tag: 'CRT Combined', title: 'Combined CRT Pattern', items: ['Single Combined Exam for APFC + EO/AO', '120 MCQs (300 Marks - 2 Hours)', '1/3 Negative Marking'] } ]
  },

  apfc2026: {
    id: 'apfc2026', title: 'UPSC APFC 2026 (Official Notification)', subtitle: 'Ministry of Labour & Employment', category: 'UPSC RECRUITMENT', formDate: '2026-08-22T00:00:00', examDate: '2026-12-19T09:30:00', defaultTargetHours: 8,
    syllabus: [
      { id: 'apfc_ir_ll', title: 'Industrial Relations & Labour Laws', isCore: true, topics: [ { id: 'a_ir1', name: 'Trade Unions Act 1926 & Registration' }, { id: 'a_ir2', name: 'Industrial Disputes Act 1947 & Retrenchment' }, { id: 'a_ir3', name: 'Factories Act 1948 & Worker Safety' }, { id: 'a_ir4', name: 'The 4 New Labour Codes 2020' } ] },
      { id: 'apfc_ss', title: 'Social Security in India', isCore: true, topics: [ { id: 'a_ss1', name: 'EPF & MP Act 1952 (EPF, EPS, EDLI)' }, { id: 'a_ss2', name: 'ESI Act 1948 & Payment of Gratuity Act 1972' }, { id: 'a_ss3', name: 'Maternity Benefit Act & Schemes' } ] },
      { id: 'apfc_acc', title: 'Accounting and Auditing', isCore: true, topics: [ { id: 'a_acc1', name: 'Double Entry System, Journal & Ledger' }, { id: 'a_acc2', name: 'Trial Balance, Depreciation & Financial Statements' }, { id: 'a_acc3', name: 'Auditing Standards & Principles' } ] },
      { id: 'apfc_pop', title: 'Population, Development and Globalization', isCore: false, topics: [ { id: 'a_pop1', name: 'Demographic Trends & Urbanization' }, { id: 'a_pop2', name: 'Globalization & Labour Market' } ] },
      { id: 'apfc_pol', title: 'Governance and Constitution of India', isCore: false, topics: [ { id: 'a_pol1', name: 'Preamble, Fundamental Rights & DPSP' }, { id: 'a_pol2', name: 'APFC Sec 7A Quasi-Judicial Powers' } ] },
      { id: 'apfc_econ', title: 'Present Trends in Indian Economy', isCore: false, topics: [ { id: 'a_ec1', name: 'Inflation, GDP & RBI Monetary Policy' }, { id: 'a_ec2', name: 'Union Budget 2026 Highlights' } ] },
      { id: 'apfc_hist', title: 'Indian Culture, Heritage & Freedom Movement', isCore: false, topics: [ { id: 'a_h1', name: '1857 Revolt & Freedom Struggle (1857-1947)' }, { id: 'a_h2', name: 'Indian Art & Architecture' } ] },
      { id: 'apfc_sci', title: 'Basic Computer Applications & General Science', isCore: false, topics: [ { id: 'a_sc1', name: 'Everyday Science Fundamentals' }, { id: 'a_sc2', name: 'Computer Hardware, Software & Cyber Security' } ] },
      { id: 'apfc_math', title: 'Elementary Mathematics, Statistics & GMA', isCore: false, topics: [ { id: 'a_q1', name: 'Number System, DI, Percentages & Ratio' }, { id: 'a_q2', name: 'Statistics: Central Tendency & Dispersion' } ] },
      { id: 'apfc_eng', title: 'General English', isCore: false, topics: [ { id: 'a_e1', name: 'Workmanlike Use of Words & Error Spotting' } ] }
    ], flashcards: []
  },

  epfo2026: {
    id: 'epfo2026', title: 'UPSC EPFO EO/AO 2026 (Official Notification)', subtitle: 'Enforcement & Accounts Officer Cadre', category: 'UPSC RECRUITMENT', formDate: '2026-08-22T00:00:00', examDate: '2026-12-19T09:30:00', defaultTargetHours: 8,
    syllabus: [
      { id: 'epfo_eng', title: 'General English', isCore: false, topics: [ { id: 'e_eng1', name: 'Grammar Rules, Error Spotting & Vocabulary' } ] },
      { id: 'epfo_hist', title: 'Indian Freedom Struggle', isCore: false, topics: [ { id: 'e_h1', name: '1857 Revolt, INC & Gandhian Era' } ] },
      { id: 'epfo_dev', title: 'Current Events and Development Issues', isCore: false, topics: [ { id: 'e_d1', name: 'National/Intl Events & Welfare Schemes' } ] },
      { id: 'epfo_pol', title: 'Indian Polity & Economy', isCore: false, topics: [ { id: 'e_p1', name: 'Constitution, Rights, Inflation & Budget' } ] },
      { id: 'epfo_acc', title: 'General Accounting Principles', isCore: true, topics: [ { id: 'e_a1', name: 'Accounting Concepts, Journal, Ledger & Trial Balance' } ] },
      { id: 'epfo_ir', title: 'Industrial Relations & Labour Laws', isCore: true, topics: [ { id: 'e_ir1', name: 'Industrial Disputes, Trade Unions & 4 Labour Codes' } ] },
      { id: 'epfo_sci', title: 'General Science & Knowledge of Computer Applications', isCore: false, topics: [ { id: 'e_s1', name: 'Everyday Science, Computer Hardware & Software' } ] },
      { id: 'epfo_quant', title: 'General Mental Ability & Quantitative Aptitude', isCore: false, topics: [ { id: 'e_q1', name: 'Arithmetic, Data Interpretation & Reasoning' } ] },
      { id: 'epfo_ss', title: 'Social Security in India', isCore: true, topics: [ { id: 'e_ss1', name: 'EPFO Acts, Gratuity Act & Pension Schemes' } ] }
    ], flashcards: []
  },

  cse2027: {
    id: 'cse2027', title: 'UPSC CSE / IAS 2027 (Official Syllabus)', subtitle: 'IAS, IPS, IFS & Central Services', category: 'UPSC CIVIL SERVICES', formDate: '2027-02-10T00:00:00', examDate: '2027-05-23T09:30:00', defaultTargetHours: 10,
    syllabus: [
      { id: 'cse_pol', title: 'GS 1: Indian Polity & Governance', isCore: true, topics: [ { id: 'cs_p1', name: 'Constitutional Framework & Fundamental Rights' }, { id: 'cs_p2', name: 'Parliament, Judiciary & Statutory Bodies' } ] },
      { id: 'cse_hist', title: 'GS 1: History, Art & Culture', isCore: true, topics: [ { id: 'cs_h1', name: 'Ancient/Medieval Art & Architecture' }, { id: 'cs_h2', name: 'Modern Freedom Movement (1757-1947)' } ] },
      { id: 'cse_geo', title: 'GS 1: Indian & World Geography', isCore: true, topics: [ { id: 'cs_g1', name: 'Physical Geography & Climate' }, { id: 'cs_g2', name: 'Indian Rivers, Resources & Agriculture' } ] },
      { id: 'cse_eco', title: 'GS 3: Indian Economy & Development', isCore: true, topics: [ { id: 'cs_e1', name: 'Macroeconomics, Banking & Inflation' }, { id: 'cs_e2', name: 'Union Budget & Economic Survey' } ] },
      { id: 'cse_env', title: 'GS 3: Environment, Ecology & Science', isCore: true, topics: [ { id: 'cs_env1', name: 'Biodiversity, Climate Change & Science Tech' } ] },
      { id: 'cse_csat', title: 'CSAT Paper 2 (Qualifying 33%)', isCore: false, topics: [ { id: 'cs_c1', name: 'Quantitative Aptitude, Reasoning & Comprehension' } ] }
    ], flashcards: []
  },

  capf2027: {
    id: 'capf2027', title: 'UPSC CAPF AC 2027 (Official Syllabus)', subtitle: 'BSF, CRPF, CISF, ITBP, SSB Assistant Commandant', category: 'UPSC ARMED FORCES', formDate: '2027-04-21T00:00:00', examDate: '2027-08-01T10:00:00', defaultTargetHours: 8,
    syllabus: [
      { id: 'capf_p1', title: 'Paper 1: General Ability & Intelligence', isCore: true, topics: [ { id: 'ca_p1', name: 'General Mental Ability & Quant' }, { id: 'ca_p2', name: 'Everyday Science & Technology' }, { id: 'ca_p3', name: 'National/Intl Current Affairs' }, { id: 'ca_p4', name: 'Indian Polity, Economy & Geography' } ] },
      { id: 'capf_p2', title: 'Paper 2: General Studies, Essay & Comprehension', isCore: true, topics: [ { id: 'ca_e1', name: 'Essay Writing (80 Marks)' }, { id: 'ca_e2', name: 'Precise Writing, Report Writing & Comprehension' } ] }
    ], flashcards: []
  },

  cds2027: {
    id: 'cds2027', title: 'UPSC CDS 2027 (Official Syllabus)', subtitle: 'IMA, INA, AFA & OTA Entry', category: 'UPSC DEFENCE', formDate: '2026-12-20T00:00:00', examDate: '2027-04-18T09:00:00', defaultTargetHours: 6,
    syllabus: [
      { id: 'cds_eng', title: 'English Language', isCore: true, topics: [ { id: 'cd_e1', name: 'Spotting Errors & Sentence Correction' }, { id: 'cd_e2', name: 'Vocabulary (Synonyms/Antonyms)' }, { id: 'cd_e3', name: 'Ordering of Words & Reading Comprehension' } ] },
      { id: 'cds_gk', title: 'General Knowledge', isCore: true, topics: [ { id: 'cd_gk1', name: 'Physics, Chemistry & Life Sciences' }, { id: 'cd_gk2', name: 'Indian History, Polity & World Geography' }, { id: 'cd_gk3', name: 'Current Affairs & Defense Updates' } ] },
      { id: 'cds_math', title: 'Elementary Mathematics (IMA/INA/AFA)', isCore: true, topics: [ { id: 'cd_m1', name: 'Arithmetic, Number System & Algebra' }, { id: 'cd_m2', name: 'Trigonometry, Geometry & Mensuration' }, { id: 'cd_m3', name: 'Statistics & Data Representation' } ] }
    ], flashcards: []
  }
};

class UniversalAppState {
  constructor() {
    this.activeExamId = localStorage.getItem('upsc_universal_active_exam') || 'crt2026';
    this.customExams = JSON.parse(localStorage.getItem('upsc_universal_custom_exams') || '{}');
    this.studyLogs = JSON.parse(localStorage.getItem('upsc_universal_study_logs') || '[]');
    this.pomoSessionsToday = parseInt(localStorage.getItem('upsc_universal_pomo_today') || '0', 10);
    this.initActiveExamData();
  }
  getActivePack() { return EXAM_PACKS[this.activeExamId] || this.customExams[this.activeExamId] || EXAM_PACKS.crt2026; }
  initActiveExamData() {
    const pack = this.getActivePack();
    this.formReleaseDate = new Date(pack.formDate);
    this.examDate = new Date(pack.examDate);
    const savedHours = localStorage.getItem(`upsc_target_hours_${this.activeExamId}`);
    this.dailyTargetHours = savedHours ? parseInt(savedHours, 10) : (pack.defaultTargetHours || 8);
    this.syllabusData = JSON.parse(localStorage.getItem(`upsc_syllabus_${this.activeExamId}`) || '{}');
  }
  saveSyllabus() { localStorage.setItem(`upsc_syllabus_${this.activeExamId}`, JSON.stringify(this.syllabusData)); }
  saveLogs() { localStorage.setItem('upsc_universal_study_logs', JSON.stringify(this.studyLogs)); }
  saveCustomExams() { localStorage.setItem('upsc_universal_custom_exams', JSON.stringify(this.customExams)); }
  saveSettings(h) {
    this.dailyTargetHours = parseInt(h, 10);
    localStorage.setItem(`upsc_target_hours_${this.activeExamId}`, this.dailyTargetHours);
  }
  switchExam(id) { this.activeExamId = id; localStorage.setItem('upsc_universal_active_exam', id); this.initActiveExamData(); }
}

const appState = new UniversalAppState();

document.addEventListener('DOMContentLoaded', () => {
  initTabs(); initExamSelector(); initCountdowns(); renderActiveExamBanner(); renderSyllabus(); renderDashboardWidget(); renderStudyLogs(); renderFlashcards(); initPomodoro(); initSettingsModal(); initCustomExamModal(); initQuickLogForm(); initShareActions();
});

function initTabs() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active'); document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
  });
}

function initExamSelector() {
  const select = document.getElementById('activeExamSelect');
  Object.keys(appState.customExams).forEach(id => {
    const option = document.createElement('option'); option.value = id; option.textContent = `✏️ ${appState.customExams[id].title}`;
    select.insertBefore(option, select.querySelector('option[value="custom"]'));
  });
  select.value = appState.activeExamId;
  select.addEventListener('change', (e) => {
    if (e.target.value === 'custom') { document.getElementById('customExamModal').classList.add('active'); select.value = appState.activeExamId; return; }
    appState.switchExam(e.target.value); renderActiveExamBanner(); renderSyllabus(); renderDashboardWidget(); renderStudyLogs(); renderFlashcards(); updateTimerDisplays();
  });
}

function renderActiveExamBanner() {
  const pack = appState.getActivePack();
  document.getElementById('activeExamTitle').textContent = pack.title;
  document.getElementById('activeExamSubtitle').textContent = pack.subtitle;
  document.getElementById('activeExamCategoryBadge').textContent = pack.category || 'UPSC EXAM';
  document.getElementById('formTargetDateText').textContent = `Target: ${new Date(pack.formDate).toDateString()}`;
  document.getElementById('examTargetDateText').textContent = `Target: ${new Date(pack.examDate).toDateString()}`;

  const logSelect = document.getElementById('logSubjectSelect'); logSelect.innerHTML = '';
  if (pack.syllabus) pack.syllabus.forEach(mod => { const opt = document.createElement('option'); opt.value = mod.title; opt.textContent = mod.title; logSelect.appendChild(opt); });
}

function initCountdowns() { updateTimerDisplays(); setInterval(updateTimerDisplays, 1000); }
function updateTimerDisplays() {
  const now = new Date();
  const formDiff = appState.formReleaseDate - now;
  if (formDiff > 0) {
    document.getElementById('formDays').textContent = String(Math.floor(formDiff / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById('formHours').textContent = String(Math.floor((formDiff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    document.getElementById('formMinutes').textContent = String(Math.floor((formDiff / (1000 * 60)) % 60)).padStart(2, '0');
    document.getElementById('formSeconds').textContent = String(Math.floor((formDiff / 1000) % 60)).padStart(2, '0');
  } else { document.getElementById('formCountdown').innerHTML = `<div style="font-weight:700; color:#10b981;">FORM IS LIVE NOW!</div>`; }

  const examDiff = appState.examDate - now;
  if (examDiff > 0) {
    const eDays = Math.floor(examDiff / (1000 * 60 * 60 * 24));
    document.getElementById('examDays').textContent = String(eDays).padStart(3, '0');
    document.getElementById('examHours').textContent = String(Math.floor((examDiff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    document.getElementById('examMinutes').textContent = String(Math.floor((examDiff / (1000 * 60)) % 60)).padStart(2, '0');
    document.getElementById('examSeconds').textContent = String(Math.floor((examDiff / 1000) % 60)).padStart(2, '0');
    document.getElementById('estStudyHoursLeft').textContent = Math.floor(eDays * appState.dailyTargetHours).toLocaleString();
    document.getElementById('targetHoursRateDisplay').textContent = appState.dailyTargetHours;
    document.getElementById('currentDailyTargetDisplay').textContent = `${appState.dailyTargetHours} Hours/Day`;
  } else { document.getElementById('examCountdown').innerHTML = `<div style="font-weight:700; color:#ef4444;">EXAM DAY IS HERE!</div>`; }
}

function renderSyllabus() {
  const container = document.getElementById('syllabusContainer'); container.innerHTML = '';
  const pack = appState.getActivePack();
  let totalTopics = 0, completedTopics = 0, revisedTopicsCount = 0, coreCompleted = 0;
  if (!pack.syllabus || pack.syllabus.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:40px;">No syllabus topics defined for this module yet.</p>`;
    return;
  }

  pack.syllabus.forEach(module => {
    const card = document.createElement('div'); card.className = 'module-card';
    let modTotal = module.topics.length, modDone = 0;
    const topicItemsHTML = module.topics.map(topic => {
      totalTopics++;
      const p = appState.syllabusData[topic.id] || { concept: false, rev1: false, rev2: false, pyq: false };
      if (p.concept && (p.pyq || p.rev1)) modDone++;
      if (p.concept && p.rev1 && p.rev2) revisedTopicsCount++;
      return `
        <div class="topic-item">
          <div class="topic-name"><span>${topic.name}</span></div>
          <div class="topic-stages">
            <label class="stage-check"><input type="checkbox" data-topic="${topic.id}" data-stage="concept" ${p.concept ? 'checked' : ''}> Concepts</label>
            <label class="stage-check"><input type="checkbox" data-topic="${topic.id}" data-stage="rev1" ${p.rev1 ? 'checked' : ''}> Rev 1</label>
            <label class="stage-check"><input type="checkbox" data-topic="${topic.id}" data-stage="rev2" ${p.rev2 ? 'checked' : ''}> Rev 2</label>
            <label class="stage-check"><input type="checkbox" data-topic="${topic.id}" data-stage="pyq" ${p.pyq ? 'checked' : ''}> PYQs</label>
          </div>
        </div>
      `;
    }).join('');
    if (module.isCore && (modDone / modTotal >= 0.5)) coreCompleted++;
    completedTopics += (modDone === modTotal) ? modTotal : modDone;
    const percent = Math.round((modDone / modTotal) * 100) || 0;
    card.innerHTML = `<div class="module-card-header"><div class="module-title-area"><h3>${module.title}</h3></div><div style="font-weight:700; color:var(--accent-primary);">${percent}% (${modDone}/${modTotal})</div></div><div class="topic-list">${topicItemsHTML}</div>`;
    container.appendChild(card);
  });

  container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const topicId = e.target.getAttribute('data-topic'); const stage = e.target.getAttribute('data-stage');
      if (!appState.syllabusData[topicId]) appState.syllabusData[topicId] = { concept: false, rev1: false, rev2: false, pyq: false };
      appState.syllabusData[topicId][stage] = e.target.checked;
      appState.saveSyllabus(); renderSyllabus(); renderDashboardWidget();
    });
  });

  const overallPercent = Math.round((completedTopics / totalTopics) * 100) || 0;
  document.getElementById('syllabusPercentDisplay').textContent = `${overallPercent}%`;
  document.getElementById('syllabusProgressFill').style.width = `${overallPercent}%`;
  document.getElementById('highWeightageProgressDisplay').textContent = `${coreCompleted} Modules`;
  document.getElementById('revisionCompletedDisplay').textContent = `${revisedTopicsCount} Topics`;
}

function renderDashboardWidget() {
  const widgetList = document.getElementById('subjectDashboardList'); widgetList.innerHTML = '';
  const pack = appState.getActivePack(); if (!pack.syllabus) return;
  pack.syllabus.forEach(mod => {
    let modTotal = mod.topics.length, modDone = 0;
    mod.topics.forEach(t => { const p = appState.syllabusData[t.id]; if (p && p.concept && (p.pyq || p.rev1)) modDone++; });
    const percent = Math.round((modDone / modTotal) * 100) || 0;
    const item = document.createElement('div'); item.className = 'subject-progress-item';
    item.innerHTML = `<div class="subject-progress-meta"><strong>${mod.title}</strong><span>${percent}%</span></div><div class="subject-progress-bar"><div class="subject-progress-bar-fill" style="width: ${percent}%; background: var(--accent-primary);"></div></div>`;
    widgetList.appendChild(item);
  });
}

function initQuickLogForm() {
  document.getElementById('quickLogForm').addEventListener('submit', (e) => {
    e.preventDefault();
    appState.studyLogs.unshift({ id: Date.now(), examId: appState.activeExamId, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), subject: document.getElementById('logSubjectSelect').value, hours: parseFloat(document.getElementById('logHoursInput').value), note: document.getElementById('logTopicNote').value || 'Study Session' });
    appState.saveLogs(); renderStudyLogs(); alert('Log saved!');
  });
}

function renderStudyLogs() {
  const tableBody = document.getElementById('logHistoryTableBody'); tableBody.innerHTML = '';
  let totalHours = 0, todayHours = 0;
  const todayStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  appState.studyLogs.forEach(log => {
    totalHours += log.hours; if (log.date === todayStr) todayHours += log.hours;
    const row = document.createElement('tr');
    row.innerHTML = `<td>${log.date}</td><td><strong>${log.subject}</strong></td><td><span class="badge badge-warning">${log.hours} hrs</span></td><td>${log.note}</td><td><button class="btn btn-secondary" onclick="deleteLogEntry(${log.id})"><i class="fa-solid fa-trash"></i></button></td>`;
    tableBody.appendChild(row);
  });
  document.getElementById('totalHoursStudiedDisplay').textContent = `${totalHours.toFixed(1)} hrs`;
  document.getElementById('todayHoursSubtext').textContent = `Today: ${todayHours.toFixed(1)} hrs`;
}

function deleteLogEntry(id) { appState.studyLogs = appState.studyLogs.filter(l => l.id !== id); appState.saveLogs(); renderStudyLogs(); }

function renderFlashcards() {
  const container = document.getElementById('flashcardsContainer'); container.innerHTML = '';
  const pack = appState.getActivePack(); if (!pack.flashcards) return;
  pack.flashcards.forEach(card => {
    const item = document.createElement('div'); item.className = 'card flashcard';
    item.innerHTML = `<div class="flashcard-tag">${card.tag}</div><h3>${card.title}</h3><ul>${card.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    container.appendChild(item);
  });
}

let pomoTimerInterval = null, pomoSecondsLeft = 50 * 60, currentPomoMode = 'work';
function initPomodoro() {
  document.querySelectorAll('.pomo-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pomo-mode-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
      currentPomoMode = btn.getAttribute('data-mode');
      if (currentPomoMode === 'work') pomoSecondsLeft = 50 * 60; else if (currentPomoMode === 'shortBreak') pomoSecondsLeft = 10 * 60; else pomoSecondsLeft = 20 * 60;
      pausePomoTimer(); updatePomoDisplay();
    });
  });
  document.getElementById('pomoStartBtn').addEventListener('click', startPomoTimer);
  document.getElementById('pomoPauseBtn').addEventListener('click', pausePomoTimer);
  document.getElementById('pomoResetBtn').addEventListener('click', resetPomoTimer);
}
function startPomoTimer() {
  document.getElementById('pomoStartBtn').style.display = 'none'; document.getElementById('pomoPauseBtn').style.display = 'inline-flex';
  if (pomoTimerInterval) clearInterval(pomoTimerInterval);
  pomoTimerInterval = setInterval(() => { pomoSecondsLeft--; updatePomoDisplay(); if (pomoSecondsLeft <= 0) { clearInterval(pomoTimerInterval); alert('Session complete!'); resetPomoTimer(); } }, 1000);
}
function pausePomoTimer() { clearInterval(pomoTimerInterval); document.getElementById('pomoStartBtn').style.display = 'inline-flex'; document.getElementById('pomoPauseBtn').style.display = 'none'; }
function resetPomoTimer() { pausePomoTimer(); pomoSecondsLeft = 50 * 60; updatePomoDisplay(); }
function updatePomoDisplay() { document.getElementById('pomoMinutes').textContent = String(Math.floor(pomoSecondsLeft / 60)).padStart(2, '0'); document.getElementById('pomoSeconds').textContent = String(pomoSecondsLeft % 60).padStart(2, '0'); }

function initSettingsModal() {
  const modal = document.getElementById('settingsModal');
  const select = document.getElementById('targetHoursSelect');
  select.value = String(appState.dailyTargetHours);

  const badgeBtn = document.getElementById('dailyHoursBadgeBtn');
  if (badgeBtn) badgeBtn.addEventListener('click', () => modal.classList.add('active'));
  document.getElementById('settingsBtn').addEventListener('click', () => modal.classList.add('active'));
  document.getElementById('closeSettingsBtn').addEventListener('click', () => modal.classList.remove('active'));

  document.querySelectorAll('.hour-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.hour-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      select.value = pill.getAttribute('data-hrs');
    });
  });

  document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    appState.saveSettings(select.value);
    updateTimerDisplays();
    modal.classList.remove('active');
  });
}

function initCustomExamModal() {
  const modal = document.getElementById('customExamModal');
  document.getElementById('customExamModalBtn').addEventListener('click', () => modal.classList.add('active'));
  document.getElementById('closeCustomExamBtn').addEventListener('click', () => modal.classList.remove('active'));
  document.getElementById('saveCustomExamBtn').addEventListener('click', () => {
    const name = document.getElementById('customExamNameInput').value;
    const examD = document.getElementById('customExamDateInput').value;
    const formD = document.getElementById('customFormDateInput').value;
    const subStr = document.getElementById('customSubjectsInput').value;
    if (!name || !examD || !formD) return;
    const customId = `custom_${Date.now()}`;
    const subjects = subStr ? subStr.split(',').map(s => s.trim()) : ['General Studies'];
    const syllabus = subjects.map((subj, idx) => ({ id: `${customId}_s_${idx}`, title: subj, isCore: idx < 2, topics: [{ id: `${customId}_t_${idx}_1`, name: `${subj} Concepts` }] }));
    appState.customExams[customId] = { id: customId, title: name, subtitle: 'Custom Aspirant Plan', category: 'CUSTOM EXAM', formDate: `${formD}T00:00:00`, examDate: `${examD}T09:30:00`, defaultTargetHours: 8, syllabus, flashcards: [] };
    appState.saveCustomExams(); modal.classList.remove('active');
    const select = document.getElementById('activeExamSelect'); const opt = document.createElement('option'); opt.value = customId; opt.textContent = `✏️ ${name}`;
    select.insertBefore(opt, select.querySelector('option[value="custom"]'));
    appState.switchExam(customId); select.value = customId; renderActiveExamBanner(); renderSyllabus(); renderDashboardWidget(); renderStudyLogs(); updateTimerDisplays();
  });
}

function initShareActions() {
  document.getElementById('exportPlanBtn').addEventListener('click', () => {
    const data = { activeExam: appState.activeExamId, customExams: appState.customExams, syllabusProgress: appState.syllabusData, studyLogs: appState.studyLogs };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `UPSC_Study_Plan_${appState.activeExamId}.json`; a.click();
  });
  const fileInput = document.getElementById('importFileInput');
  document.getElementById('importPlanBtn').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const imp = JSON.parse(evt.target.result);
        if (imp.customExams) appState.customExams = { ...appState.customExams, ...imp.customExams };
        if (imp.syllabusProgress) appState.syllabusData = { ...appState.syllabusData, ...imp.syllabusProgress };
        appState.saveCustomExams(); appState.saveLogs(); renderSyllabus(); alert('Plan imported!');
      } catch (err) { alert('Invalid backup file'); }
    }; reader.readAsText(file);
  });
}
