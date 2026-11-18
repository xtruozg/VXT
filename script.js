(() => {
  /* =======================================================
     I18N — bản tiếng Việt lấy trực tiếp từ HTML,
     bản tiếng Anh khai báo bên dưới.
     ======================================================= */
  const EN = {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'Process',
    'nav.contact': 'Contact',

    'hero.lead': 'Software engineer building websites, apps and business management systems — from sales and ERP to CRM. I combine design thinking in Figma with the power of AI to create products that look great and run efficiently.',
    'hero.cta1': 'View projects',
    'hero.cta2': 'Start a project',
    'hero.note': 'Hanoi, Vietnam — Available for new projects',

    'stats.1': 'Projects delivered',
    'stats.2': 'Business clients',
    'stats.3': 'Logos &amp; brand identities',
    'stats.4': 'On-time delivery',

    'about.eyebrow': '01 — About me',
    'about.title': 'Code with care, design with soul',
    'about.p1': 'I am a software engineer based in Hanoi, focused on digital solutions for small and medium businesses: e-commerce websites, mobile apps, ERP systems for inventory, HR and finance, and CRM for customer care.',
    'about.p2': 'Beyond coding, I design interfaces and logos in Figma and apply AI (chatbots, automation, data analysis) to help businesses save time and grow revenue.',

    'mission.eyebrow': 'Mission',
    'mission.quote': '“Turning complex <em>processes</em> into simple <em>software</em>.”',
    'mission.sub': 'Every line of code serves one goal: helping businesses run faster, leaner and smarter.',

    'services.eyebrow': '02 — Services',
    'services.title': 'What I offer',
    's1.title': 'Web &amp; App Development',
    's1.desc': 'Custom websites and mobile apps, optimized for speed, SEO and user experience.',
    's1.l1': 'E-commerce websites &amp; apps',
    's1.l2': 'Enterprise ERP systems',
    's1.l3': 'Customer CRM software',
    's2.title': 'Logo Design (Figma)',
    's2.desc': 'Minimal, modern logos and brand identities — delivered as Figma, SVG and PNG files.',
    's2.l1': 'Logo &amp; brand guidelines',
    's2.l2': 'UI/UX, wireframes, prototypes',
    's2.l3': 'Design systems in Figma',
    's3.title': 'AI Solutions',
    's3.desc': 'Integrating artificial intelligence into products and workflows to automate repetitive work.',
    's3.l1': '24/7 sales &amp; support chatbots',
    's3.l2': 'Workflow automation',
    's3.l3': 'AI assistants on internal data',

    'projects.eyebrow': 'Featured work',
    'p1.title': 'Sales &amp;<br />ERP System',
    'p1.desc': 'A retail chain management platform: point of sale (POS), e-commerce website, inventory, HR and real-time revenue reporting.',
    'p2.title': 'CRM &amp;<br />Mobile App',
    'p2.desc': 'CRM software for managing customers, sales opportunities and after-sales care, synced with a mobile app so the sales team can work anywhere.',
    'p3.title': 'Logos &amp;<br />Identity',
    'p3.desc': 'A collection of logos designed in Figma for tech, F&amp;B and retail brands — simple, memorable and crisp at every size.',
    'p4.title': 'Business<br />AI Assistant',
    'p4.desc': 'An AI chatbot answering customers on the website and Zalo, connected directly to product and order data — cutting customer support workload by 70%.',

    'process.eyebrow': '03 — Process',
    'process.title': 'From idea to product',
    'pr1.t': 'Requirement analysis',
    'pr1.d': 'Understand the business, its goals, and agree on scope and budget.',
    'pr2.t': 'UI/UX design',
    'pr2.d': 'Wireframes and prototypes in Figma, approved before any coding begins.',
    'pr3.t': 'Build &amp; test',
    'pr3.d': 'Development in sprints, regular demos and thorough testing of every feature.',
    'pr4.t': 'Launch &amp; support',
    'pr4.d': 'Deployment, user training and ongoing support after handover.',

    'contact.eyebrow': '04 — Contact',
    'contact.title': 'Get in<br />touch',
    'contact.lead': 'Have an idea for a website, app or AI solution? Give me a call or send an email — I will reply within 24 hours.',
    'contact.call': 'Call now',
    'contact.mail': 'Send email',
    'contact.address': 'Address',
    'contact.city': 'Hanoi, Vietnam',
    'contact.phone': 'Phone',


    'footer.text': 'Software Engineer · Hanoi.',
    'footer.top': 'Back to top ↑',
  };

  const META = {
    vi: {
      title: 'Vũ Xuân Trường — Kỹ sư phần mềm',
      desc: 'Vũ Xuân Trường — Kỹ sư phần mềm: thiết kế web & app (bán hàng, ERP, CRM), thiết kế logo trên Figma và giải pháp AI.',
    },
    en: {
      title: 'Vu Xuan Truong — Software Engineer',
      desc: 'Vu Xuan Truong — Software engineer: web & app development (sales, ERP, CRM), logo design in Figma and AI solutions.',
    },
  };

  const textEls = document.querySelectorAll('[data-i18n]');
  const phEls = document.querySelectorAll('[data-i18n-ph]');
  const VI = {};
  textEls.forEach((el) => { VI[el.dataset.i18n] = el.innerHTML.trim(); });
  phEls.forEach((el) => { VI[el.dataset.i18nPh] = el.getAttribute('placeholder'); });
  const DICT = { vi: VI, en: EN };

  const langBox = document.querySelector('.lang');
  const langBtns = document.querySelectorAll('.lang__btn');
  let current = 'vi';

  const applyLang = (lang, animate = true) => {
    if (!DICT[lang]) lang = 'vi';
    const render = () => {
      const d = DICT[lang];
      textEls.forEach((el) => { const v = d[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
      phEls.forEach((el) => { const v = d[el.dataset.i18nPh]; if (v != null) el.setAttribute('placeholder', v); });
      document.documentElement.lang = lang;
      document.title = META[lang].title;
      document.querySelector('meta[name="description"]').setAttribute('content', META[lang].desc);
      langBtns.forEach((b) => {
        const on = b.dataset.lang === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      langBox.dataset.active = lang;
      current = lang;
      try { localStorage.setItem('lang', lang); } catch (e) { /* bỏ qua */ }
    };
    if (!animate) return render();
    document.body.classList.add('is-switching');
    setTimeout(() => { render(); document.body.classList.remove('is-switching'); }, 220);
  };

  langBtns.forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.lang !== current) applyLang(b.dataset.lang);
  }));

  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* bỏ qua */ }
  applyLang(saved || 'vi', false);

  /* =======================================================
     UI
     ======================================================= */
  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const toggleMenu = (open) => {
    burger.classList.toggle('is-open', open);
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => toggleMenu(!nav.classList.contains('is-open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));
  window.addEventListener('keydown', (e) => e.key === 'Escape' && toggleMenu(false));

  /* Reveal */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
        el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 90}ms`;
        el.classList.add('is-visible');
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* Counters */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / 1600, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (p === 1 ? (el.dataset.suffix || '') : '');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

  /* Active nav link */
  const links = [...nav.querySelectorAll('a[href^="#"]:not(.btn)')];
  const sections = links.map((l) => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  const navIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => navIO.observe(s));


  document.getElementById('year').textContent = new Date().getFullYear();
})();
