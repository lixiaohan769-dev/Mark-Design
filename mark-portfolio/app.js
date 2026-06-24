const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

let currentLang = localStorage.getItem("mark-design-lang") || "cn";

const projectDetails = {
  cn: {
    anniversary: {
      title: "快手十二周年司庆",
      kicker: "品牌设计 / 视觉设计",
      desc: "围绕公司级品牌活动建立主视觉和延展系统，在统一情绪与传播节奏的同时，兼顾多场景物料落地。",
      visual: "visual-brand"
    },
    summer: {
      title: "Fun肆购一夏",
      kicker: "运营设计 / 视觉设计",
      desc: "达人营销业务S+级运营活动。通过高记忆度视觉语言承接活动玩法、传播物料与增长目标。",
      visual: "visual-operation"
    },
    jinniu: {
      title: "磁力金牛官网",
      kicker: "网页设计 / UI设计",
      desc: "商业化产品官网升级项目，重点优化信息层级、页面节奏、产品卖点呈现与转化链路。",
      visual: "visual-web"
    },
    "618": {
      title: "618广告样式",
      kicker: "广告设计 / 视觉设计",
      desc: "面向商业投放场景的广告样式设计，在平台规格、内容效率和创意表现之间建立稳定方案。",
      visual: "visual-ad"
    }
  },
  en: {
    anniversary: {
      title: "Kuaishou 12th Anniversary",
      kicker: "Brand Design / Visual Design",
      desc: "Built the key visual and extension system for a company-level brand event, balancing emotional consistency, communication rhythm, and multi-scenario delivery.",
      visual: "visual-brand"
    },
    summer: {
      title: "Fun Summer Shopping",
      kicker: "Campaign Design / Visual Design",
      desc: "An S+ creator marketing campaign that used a memorable visual system to connect campaign mechanics, communication assets, and growth goals.",
      visual: "visual-operation"
    },
    jinniu: {
      title: "Magnetic Taurus Website",
      kicker: "Web Design / UI Design",
      desc: "A commercial product website upgrade focused on information hierarchy, page rhythm, product value presentation, and conversion paths.",
      visual: "visual-web"
    },
    "618": {
      title: "618 Ad Formats",
      kicker: "Advertising Design / Visual Design",
      desc: "A design system for commercial ad placements, balancing platform constraints, creative expression, and conversion efficiency.",
      visual: "visual-ad"
    }
  }
};

const translations = {
  cn: {
    htmlLang: "zh-CN",
    title: "Mark design",
    selectors: {
      ".desktop-nav a[href='#experience']": "工作履历",
      ".desktop-nav a[href='#work']": "设计项目",
      ".desktop-nav a[href='#capabilities']": "横向能力",
      ".desktop-nav a[href='#contact']": "联系方式",
      ".contact-pill": "联系我",
      ".mobile-menu .menu-close": "关闭",
      ".mobile-menu a[href='#experience']": "工作履历",
      ".mobile-menu a[href='#work']": "设计项目",
      ".mobile-menu a[href='#capabilities']": "横向能力",
      ".mobile-menu a[href='#contact']": "联系方式",
      ".hero h1": "做点好的商业设计",
      ".hero p": "设计赋能业务，创意撬动增长",
      ".hero-chip": "设计项目",
      ".intro-rail h2": "李霄汉",
      ".intro-rail .section-chip": "设计项目",
      ".years-number span": "年",
      ".years-block p": "创意设计领域工作经验\n全栈设计师",
      ".resume-content > .content-block:nth-of-type(2) .black-label": "工作履历",
      ".resume-content > .content-block:nth-of-type(3) .black-label": "擅长领域",
      ".resume-item:nth-child(1) .company-row h3": "快手商业化设计中心",
      ".resume-item:nth-child(1) time": "2022.06-至今",
      ".resume-item:nth-child(1) .performance-tags span:nth-child(1)": "S级绩效*2",
      ".resume-item:nth-child(1) .performance-tags span:nth-child(2)": "A级绩效*5",
      ".resume-item:nth-child(1) .resume-copy p": "担任快手品牌广告业务的设计接口人，曾担任达人营销业务的设计接口，负责需求承接和团队成员的设计质量把控，核心负责重点项目的主R工作；主导达人业务S+级运营活动「fun肆购一夏」，负责公司级品牌活动「十二周年」和「十三周年」，深度参与S+级运营活动「巴黎奥运」。",
      ".resume-item:nth-child(2) .company-row h3": "快手运营设计中台",
      ".resume-item:nth-child(2) time": "2021.06-2022.06",
      ".resume-item:nth-child(2) .performance-tags span": "A级绩效*1",
      ".resume-item:nth-child(2) .resume-copy p": "负责快手汽车业务的日常运营设计工作，并为团队提供品牌设计支撑；曾参与虎年春节S+级运营活动。",
      ".expertise-grid article:nth-child(1) h3": "运营设计",
      ".expertise-grid article:nth-child(1) b": "Fun肆购一下",
      ".expertise-grid article:nth-child(1) p": "围绕业务目标，用视觉驱动转化与留存。擅长大促、活动页、信息流素材设计。",
      ".expertise-grid article:nth-child(2) h3": "品牌设计",
      ".expertise-grid article:nth-child(2) b": "快手十二周年　喜番视觉改版",
      ".expertise-grid article:nth-child(2) p": "从策略到落地，构建具有辨识度的品牌视觉系统，覆盖 Logo、VI 到物料全链。",
      ".expertise-grid article:nth-child(3) h3": "网页设计",
      ".expertise-grid article:nth-child(3) b": "磁力金牛官网升级　品牌视界官网",
      ".expertise-grid article:nth-child(3) p": "兼顾视觉表现与交互逻辑，构建信息清晰、体验流畅的数字端设计。",
      ".expertise-grid article:nth-child(4) h3": "广告设计",
      ".expertise-grid article:nth-child(4) b": "26年618　综平年货节",
      ".expertise-grid article:nth-child(4) p": "在商业约束内创造最大化的创意张力。熟悉各平台广告规格与投放逻辑。",
      ".expertise-grid article:nth-child(5) h3": "AI工具搭建",
      ".expertise-grid article:nth-child(5) b": "创意灵感库",
      ".expertise-grid article:nth-child(5) p": "通过AI工具，为团队打造共享灵感库，实现创意灵感的共享化收集和使用，提升团队创意效率。",
      ".work h2": "我的工作，从品牌至运营",
      "#show-all-work": "查看全部",
      ".project-row[data-project='anniversary'] h3": "快手十二周年司庆",
      ".project-row[data-project='anniversary'] p": "浪潮中思考与判断力愈发不可替代，无比的想象力和执行力才是AI时代的人的核心。",
      ".project-row[data-project='summer'] h3": "Fun肆购一夏",
      ".project-row[data-project='summer'] p": "面向达人营销业务的S+级运营活动设计，用强识别视觉系统承接活动传播与转化目标。",
      ".project-row[data-project='jinniu'] h3": "磁力金牛官网",
      ".project-row[data-project='jinniu'] p": "围绕商业化产品定位升级官网体验，梳理信息结构、视觉层级与关键转化路径。",
      ".project-row[data-project='618'] h3": "618广告样式",
      ".project-row[data-project='618'] p": "在投放规格与商业目标约束内建立广告样式系统，平衡创意表现与转化效率。",
      ".capabilities h2": "关于团队，我的横向能力",
      ".capability-grid article:nth-child(1) h3": "策略",
      ".capability-grid article:nth-child(1) p": "不止于执行，从业务目标出发定义设计方向。擅长拆解增长诉求，将抽象的商业命题转化为可落地的视觉策略与设计优先级。",
      ".capability-grid article:nth-child(2) h3": "协同",
      ".capability-grid article:nth-child(2) p": "长期在产品、运营、商业化的交叉地带工作，习惯用设计语言与非设计团队对齐目标，推动跨职能项目高效落地。",
      ".capability-grid article:nth-child(3) h3": "提效",
      ".capability-grid article:nth-child(3) p": "主导建立过设计规范与组件库，沉淀可复用的设计资产，缩短从需求到交付的周期。",
      ".capability-grid article:nth-child(4) h3": "培养",
      ".capability-grid article:nth-child(4) p": "带过初级设计师，关注方法论的传递而非单点纠错。目标是让他们学会自己判断。",
      ".contact h2": "联系我",
      ".profile h3": "李霄汉（Mark Li）",
      ".profile p": "一起做点好的商业设计",
      ".qr-stack div:nth-child(1) span": "微信",
      ".qr-stack div:nth-child(2) span": "小红书",
      "address span:nth-of-type(1)": "电话",
      "address span:nth-of-type(2)": "邮箱"
    },
    tagRows: [
      ["品牌设计", "视觉设计"],
      ["运营设计", "视觉设计"],
      ["网页设计", "视觉设计", "UI设计"],
      ["广告设计", "视觉设计"]
    ]
  },
  en: {
    htmlLang: "en",
    title: "Mark design",
    selectors: {
      ".desktop-nav a[href='#experience']": "Experience",
      ".desktop-nav a[href='#work']": "Work",
      ".desktop-nav a[href='#capabilities']": "Capabilities",
      ".desktop-nav a[href='#contact']": "Contact",
      ".contact-pill": "Contact",
      ".mobile-menu .menu-close": "Close",
      ".mobile-menu a[href='#experience']": "Experience",
      ".mobile-menu a[href='#work']": "Work",
      ".mobile-menu a[href='#capabilities']": "Capabilities",
      ".mobile-menu a[href='#contact']": "Contact",
      ".hero h1": "Design Good Business",
      ".hero p": "Design empowers business. Creativity drives growth.",
      ".hero-chip": "Work",
      ".intro-rail h2": "Li Xiaohan",
      ".intro-rail .section-chip": "Work",
      ".years-number span": "yrs",
      ".years-block p": "Creative design experience\nFull-stack designer",
      ".resume-content > .content-block:nth-of-type(2) .black-label": "Experience",
      ".resume-content > .content-block:nth-of-type(3) .black-label": "Expertise",
      ".resume-item:nth-child(1) .company-row h3": "Kuaishou Commercial Design Center",
      ".resume-item:nth-child(1) time": "2022.06-Present",
      ".resume-item:nth-child(1) .performance-tags span:nth-child(1)": "S Rating x2",
      ".resume-item:nth-child(1) .performance-tags span:nth-child(2)": "A Rating x5",
      ".resume-item:nth-child(1) .resume-copy p": "Design owner for Kuaishou brand advertising, previously supporting creator marketing. Responsible for request intake, design quality review, and key project ownership. Led the S+ creator campaign Fun Summer Shopping, company-level 12th and 13th anniversary events, and contributed deeply to the Paris Olympics S+ campaign.",
      ".resume-item:nth-child(2) .company-row h3": "Kuaishou Operations Design Platform",
      ".resume-item:nth-child(2) time": "2021.06-2022.06",
      ".resume-item:nth-child(2) .performance-tags span": "A Rating x1",
      ".resume-item:nth-child(2) .resume-copy p": "Handled daily operations design for Kuaishou Auto and provided brand design support for the team. Participated in the Year of the Tiger Spring Festival S+ campaign.",
      ".expertise-grid article:nth-child(1) h3": "Campaign Design",
      ".expertise-grid article:nth-child(1) b": "Fun Summer Shopping",
      ".expertise-grid article:nth-child(1) p": "Driven by business goals, using visual systems to improve conversion and retention. Experienced in promotion campaigns, landing pages, and feed materials.",
      ".expertise-grid article:nth-child(2) h3": "Brand Design",
      ".expertise-grid article:nth-child(2) b": "Kuaishou 12th Anniversary / Xifan Visual Refresh",
      ".expertise-grid article:nth-child(2) p": "From strategy to delivery, building distinctive brand visual systems across logos, VI, and campaign materials.",
      ".expertise-grid article:nth-child(3) h3": "Web Design",
      ".expertise-grid article:nth-child(3) b": "Magnetic Taurus Website / Brand Vision Website",
      ".expertise-grid article:nth-child(3) p": "Balancing visual expression and interaction logic to create clear, smooth digital experiences.",
      ".expertise-grid article:nth-child(4) h3": "Advertising Design",
      ".expertise-grid article:nth-child(4) b": "2026 618 / New Year Goods Festival",
      ".expertise-grid article:nth-child(4) p": "Creating maximum creative impact within commercial constraints, with strong knowledge of platform specs and ad delivery logic.",
      ".expertise-grid article:nth-child(5) h3": "AI Tool Building",
      ".expertise-grid article:nth-child(5) b": "Creative Inspiration Library",
      ".expertise-grid article:nth-child(5) p": "Built an AI-assisted inspiration library for the team, enabling shared collection and use of creative references to improve ideation efficiency.",
      ".work h2": "My Work, From Brand to Operations",
      "#show-all-work": "View All",
      ".project-row[data-project='anniversary'] h3": "Kuaishou 12th Anniversary",
      ".project-row[data-project='anniversary'] p": "In a changing tide, judgment and imagination become core strengths for designers in the AI era.",
      ".project-row[data-project='summer'] h3": "Fun Summer Shopping",
      ".project-row[data-project='summer'] p": "An S+ creator marketing campaign using a high-recognition visual system to support communication and conversion goals.",
      ".project-row[data-project='jinniu'] h3": "Magnetic Taurus Website",
      ".project-row[data-project='jinniu'] p": "A commercial product website upgrade around positioning, information hierarchy, visual structure, and conversion paths.",
      ".project-row[data-project='618'] h3": "618 Ad Formats",
      ".project-row[data-project='618'] p": "A system of ad formats built within delivery constraints, balancing creative expression and conversion efficiency.",
      ".capabilities h2": "For Teams, My Cross-functional Capabilities",
      ".capability-grid article:nth-child(1) h3": "Strategy",
      ".capability-grid article:nth-child(1) p": "More than execution: I define design direction from business goals and translate growth needs into practical visual strategies and priorities.",
      ".capability-grid article:nth-child(2) h3": "Collaboration",
      ".capability-grid article:nth-child(2) p": "Experienced at the intersection of product, operations, and commercialization, aligning non-design teams through design language.",
      ".capability-grid article:nth-child(3) h3": "Efficiency",
      ".capability-grid article:nth-child(3) p": "Led the creation of design guidelines and component libraries, turning reusable assets into shorter delivery cycles.",
      ".capability-grid article:nth-child(4) h3": "Mentoring",
      ".capability-grid article:nth-child(4) p": "Mentored junior designers with a focus on transferable methods, helping them build independent judgment.",
      ".contact h2": "Contact",
      ".profile h3": "Li Xiaohan (Mark Li)",
      ".profile p": "Let’s build good commercial design together",
      ".qr-stack div:nth-child(1) span": "WeChat",
      ".qr-stack div:nth-child(2) span": "Xiaohongshu",
      "address span:nth-of-type(1)": "Phone",
      "address span:nth-of-type(2)": "Email"
    },
    tagRows: [
      ["Brand Design", "Visual Design"],
      ["Campaign Design", "Visual Design"],
      ["Web Design", "Visual Design", "UI Design"],
      ["Ad Design", "Visual Design"]
    ]
  }
};

function setupHeader() {
  const header = $("#site-header");
  const links = $$(".desktop-nav a");
  const sections = $$("[data-section]");

  function updateHeaderTone() {
    const hero = $("#hero");
    const switchPoint = hero ? hero.offsetHeight * 0.62 : 420;
    header.classList.toggle("scrolled", window.scrollY > 24);
    header.classList.toggle("light-bg", window.scrollY > switchPoint);
  }

  updateHeaderTone();
  window.addEventListener("scroll", updateHeaderTone, { passive: true });
  window.addEventListener("resize", updateHeaderTone);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.dataset.section === entry.target.id);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

function setupMobileMenu() {
  const menu = $("#mobile-menu");
  const open = $(".menu-button");
  const close = $(".menu-close");

  open.addEventListener("click", () => {
    menu.classList.add("open");
    menu.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  });

  close.addEventListener("click", closeMenu);
  $$("#mobile-menu a").forEach((link) => link.addEventListener("click", closeMenu));

  function closeMenu() {
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }
}

function setupLanguageToggle() {
  $$("[data-lang-option]").forEach((item) => {
    item.addEventListener("click", () => {
      applyLanguage(item.dataset.langOption);
    });
  });

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const nextLang = translations[lang] ? lang : "cn";
  const copy = translations[nextLang];
  currentLang = nextLang;
  localStorage.setItem("mark-design-lang", nextLang);
  document.documentElement.lang = copy.htmlLang;
  document.title = copy.title;

  $$("[data-lang-option]").forEach((option) => {
    option.classList.toggle("active", option.dataset.langOption === nextLang);
  });

  Object.entries(copy.selectors).forEach(([selector, text]) => {
    const element = $(selector);
    if (!element) return;
    if (text.includes("\n")) {
      element.innerHTML = text.split("\n").map(escapeHtml).join("<br>");
    } else {
      element.textContent = text;
    }
  });

  $$(".project-row").forEach((row, index) => {
    const tags = copy.tagRows[index];
    if (!tags) return;
    const tagRow = $(".tag-row", row);
    if (!tagRow) return;
    tagRow.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join("");
  });
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function setupProjects() {
  const dialog = $("#project-modal");
  const modalMedia = $("#modal-media");
  const modalTitle = $("#modal-title");
  const modalKicker = $("#modal-kicker");
  const modalDesc = $("#modal-desc");

  $$(".project-row").forEach((row) => {
    row.addEventListener("click", () => {
      const detail = projectDetails[currentLang][row.dataset.project];
      if (!detail) return;
      modalMedia.className = `modal-media ${detail.visual}`;
      modalTitle.textContent = detail.title;
      modalKicker.textContent = detail.kicker;
      modalDesc.textContent = detail.desc;
      dialog.showModal();
      document.body.classList.add("no-scroll");
    });
  });

  $("#show-all-work").addEventListener("click", () => {
    $("#work").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $(".modal-close").addEventListener("click", closeModal);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeModal();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("no-scroll"));

  function closeModal() {
    if (dialog.open) dialog.close();
  }
}

function setupReveal() {
  const items = $$(".resume-item, .expertise-grid article, .project-row, .capability-grid article, .contact-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  items.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}

function setupCapabilityRail() {
  const rail = $(".capability-grid");
  if (!rail) return;

  let offset = 0;
  let minOffset = 0;

  function getContentWidth() {
    const heading = $("#capabilities h2");
    return heading ? heading.getBoundingClientRect().width : window.innerWidth;
  }

  function updateBounds() {
    minOffset = Math.min(0, getContentWidth() - rail.scrollWidth);
    offset = clampOffset(offset);
    applyOffset(false);
  }

  function clampOffset(value) {
    return Math.max(minOffset, Math.min(0, value));
  }

  function applyOffset(animate = true) {
    rail.style.transitionDuration = animate ? "" : "0ms";
    rail.style.setProperty("--rail-offset", `${offset}px`);
    if (!animate) {
      requestAnimationFrame(() => {
        rail.style.transitionDuration = "";
      });
    }
  }

  rail.addEventListener("wheel", (event) => {
    updateBounds();
    if (minOffset === 0) return;

    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    const nextOffset = clampOffset(offset - delta);
    if (nextOffset === offset) return;

    event.preventDefault();
    offset = nextOffset;
    applyOffset();
  }, { passive: false });

  let isDragging = false;
  let dragStartX = 0;
  let offsetStart = 0;

  rail.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    updateBounds();
    if (minOffset === 0) return;

    isDragging = true;
    dragStartX = event.clientX;
    offsetStart = offset;
    rail.classList.add("is-dragging");
    rail.style.transitionDuration = "0ms";
    rail.setPointerCapture(event.pointerId);
  });

  rail.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    offset = clampOffset(offsetStart + event.clientX - dragStartX);
    applyOffset(false);
  });

  function stopDragging(event) {
    if (!isDragging) return;
    isDragging = false;
    rail.classList.remove("is-dragging");
    if (rail.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
    rail.style.transitionDuration = "";
    applyOffset();
  }

  rail.addEventListener("pointerup", stopDragging);
  rail.addEventListener("pointercancel", stopDragging);
  rail.addEventListener("lostpointercapture", () => {
    isDragging = false;
    rail.classList.remove("is-dragging");
    rail.style.transitionDuration = "";
  });

  window.addEventListener("resize", () => {
    updateBounds();
  });

  updateBounds();
}

setupHeader();
setupMobileMenu();
setupLanguageToggle();
setupProjects();
setupReveal();
setupCapabilityRail();
