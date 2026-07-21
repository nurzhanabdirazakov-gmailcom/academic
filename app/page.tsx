"use client";

import { useMemo, useState } from "react";

const KASPI_URL = "https://pay.kaspi.kz/pay/acrk2oxt";

type Course = {
  id: number;
  title: string;
  short: string;
  lessons: string;
  price: string;
  tag?: string;
  topics: string[];
};

const courses: Course[] = [
  {
    id: 1,
    title: "Антиплагиат, ЖИ және библиометриялық талдау",
    short: "Академиялық мәтінді тексеру мен деректерді сауатты талдауға арналған жинақы курс.",
    lessons: "3 видеосабақ · 120 минуттан",
    price: "30 000 ₸",
    topics: ["Антиплагиат", "Жасанды интеллект", "Библиометриялық талдау"],
  },
  {
    id: 2,
    title: "Зерттеу әдістері және SPSS негіздері",
    short: "Ғылыми мақаладан статистикалық анализге дейінгі толық практикалық бағдарлама.",
    lessons: "20 видеосабақ · 50 минуттан",
    price: "40 000 ₸",
    tag: "Ең толық",
    topics: ["APA Style және IMRAD", "Mendeley", "T-test және Pearson Correlation", "Сапалық және сандық зерттеу", "SPSS негіздері"],
  },
  {
    id: 3,
    title: "Зерттеу және білім берудегі жасанды интеллект",
    short: "Ғалым мен оқытушыға қажет 15 түрлі ЖИ құралын бір курста меңгеріңіз.",
    lessons: "4 видеосабақ · 2 сағаттан",
    price: "33 000 ₸",
    topics: ["15 түрлі ЖИ платформасы", "PDF және әдебиетке шолу", "Гипотеза іздеу", "Дизайн, видео, аудио және сайт"],
  },
  {
    id: 4,
    title: "Талдау, ЖИ және промпт-инжиниринг",
    short: "ЖИ-ге нақты тапсырма беру, деректерді талдау және шолу мақаласын жазу тәсілдері.",
    lessons: "8 видеосабақ · 35 минуттан",
    price: "33 000 ₸",
    topics: ["Промпт-инжиниринг", "ЖИ арқылы дерек талдау", "Theoretical framework және Mindmap", "Scopus деректерімен шолу жасау"],
  },
  {
    id: 5,
    title: "«Scopus-қа мақала» методологиялық курсы",
    short: "Мақала, статистикалық талдау және ЖИ технологияларын біріктіретін терең бағдарлама.",
    lessons: "8 видеосабақ · 120 минуттан",
    price: "60 000 ₸",
    tag: "Pro деңгей",
    topics: ["Scopus-та жариялау", "Excel регрессиясы және Jamovi", "Гипотеза тесттері, t-тест, χ²", "Деректерді тазалау және интерпретация", "Сапалық зерттеу және сұхбат"],
  },
  {
    id: 6,
    title: "Жасанды интеллект және зерттеу",
    short: "ЖИ құралдарымен зерттеуді жоспарлау, визуалдау және ғылыми шолу жасау.",
    lessons: "6 видеосабақ · 120 минуттан",
    price: "33 000 ₸",
    topics: ["ЖИ платформалары", "Деректерді автоматты талдау", "Идеялар картасы", "Scopus бойынша шолу мақаласы"],
  },
  {
    id: 7,
    title: "Мақала және SmartPLS",
    short: "Ғылыми мақала жазу мен SmartPLS құралын практикада қолдануға бағытталған курс.",
    lessons: "5 видеосабақ · 120 минуттан",
    price: "40 000 ₸",
    topics: ["Ғылыми мақала", "SmartPLS", "Практикалық талдау", "Дайын үлгілер"],
  },
  {
    id: 8,
    title: "Bibliometrix талдауы және ЖИ",
    short: "Bibliometrix пен жасанды интеллектті зерттеуде қолдануға арналған ең жаңа курс.",
    lessons: "3 видеосабақ · 120 минуттан",
    price: "33 000 ₸",
    tag: "Ең жаңа курс",
    topics: ["Bibliometrix талдауы", "ЖИ көмегімен зерттеу", "Практикалық видеосабақтар", "Қосымша материалдар"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function PayLink({ course, compact = false }: { course?: Course; compact?: boolean }) {
  const label = course ? `№${course.id} курсқа жазылу` : "Kaspi арқылы төлеу";
  return (
    <a
      className={compact ? "pay-button compact" : "pay-button"}
      href={KASPI_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}. Kaspi төлем беті жаңа терезеде ашылады`}
    >
      <span>{label}</span><Arrow />
    </a>
  );
}

function CourseCard({ course, compact = false }: { course: Course; compact?: boolean }) {
  return (
    <article className={`course-card ${compact ? "course-card--compact" : ""}`}>
      <div className="course-topline">
        <span className="course-number">0{course.id}</span>
        {course.tag && <span className="tag">{course.tag}</span>}
      </div>
      <h3>{course.title}</h3>
      {!compact && <p className="course-short">{course.short}</p>}
      {!compact && (
        <ul className="topic-list">
          {course.topics.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
      )}
      <div className="course-meta">
        <span>{course.lessons}</span>
        <strong>{course.price}</strong>
      </div>
      <PayLink course={course} compact={compact} />
    </article>
  );
}

function Header({ view, setView }: { view: "lead" | "sale"; setView: (view: "lead" | "sale") => void }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Zertteu Lab — басты бет">
        <span className="brand-mark">Z</span>
        <span>ZERTTEU<small>LAB</small></span>
      </a>
      <nav className="main-nav" aria-label="Негізгі мәзір">
        <a href="#courses">Курстар</a>
        <a href="#how">Қалай өтеді?</a>
        <a href="#faq">Сұрақтар</a>
      </nav>
      <div className="view-switch" aria-label="Сайт нұсқасын таңдау">
        <button className={view === "lead" ? "active" : ""} onClick={() => setView("lead")}>Танысу</button>
        <button className={view === "sale" ? "active" : ""} onClick={() => setView("sale")}>Сатып алу</button>
      </div>
    </header>
  );
}

function LeadPage({ setView }: { setView: (view: "sale") => void }) {
  const [goal, setGoal] = useState("article");
  const recommended = useMemo(() => {
    if (goal === "stats") return courses[1];
    if (goal === "ai") return courses[2];
    if (goal === "scopus") return courses[4];
    return courses[7];
  }, [goal]);

  return (
    <>
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Зерттеушілер мен оқытушыларға арналған</p>
            <h1>Зерттеуіңізді<br/><em>жаңа деңгейге</em><br/>шығарыңыз.</h1>
            <p className="hero-lede">Ғылыми мақала, статистикалық талдау, Scopus, SPSS, Bibliometrix және жасанды интеллект — күрделіні қарапайым тілмен түсіндіретін 8 практикалық курс.</p>
            <div className="hero-actions">
              <a className="primary-link" href="#courses">Курсты таңдау <span>↓</span></a>
              <button className="text-link" onClick={() => setView("sale")}>Жылдам сатып алу <Arrow /></button>
            </div>
            <div className="hero-stats">
              <div><strong>57</strong><span>видеосабақ</span></div>
              <div><strong>79+</strong><span>сағат практика</span></div>
              <div><strong>∞</strong><span>қолжетімділік</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Зерттеу бағыттарының визуалды картасы">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="core"><span>СІЗДІҢ</span><strong>ЗЕРТТЕУ</strong><span>ЖОЛЫҢЫЗ</span></div>
            <span className="float-label label-one">SCOPUS</span>
            <span className="float-label label-two">ЖАСАНДЫ ИНТЕЛЛЕКТ</span>
            <span className="float-label label-three">SPSS · SMARTPLS</span>
            <span className="float-label label-four">BIBLIOMETRIX</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Курс артықшылықтары">
          <span>✦ Өз қарқыныңызбен оқу</span><span>✦ Дәрістер мен мақалалар</span><span>✦ Дайын үлгілер</span><span>✦ Шектеусіз уақыт</span>
        </section>

        <section className="finder section-pad">
          <div className="section-heading">
            <p className="kicker">Курс навигаторы</p>
            <h2>Неден бастарыңызды<br/>білмей тұрсыз ба?</h2>
          </div>
          <div className="finder-box">
            <p>Қазір сіз үшін ең маңызды мақсат қайсы?</p>
            <div className="goal-grid">
              {[
                ["article", "Мақала жазу"], ["stats", "Статистика және SPSS"],
                ["ai", "ЖИ құралдары"], ["scopus", "Scopus-қа жариялау"],
              ].map(([value, label]) => (
                <button key={value} className={goal === value ? "selected" : ""} onClick={() => setGoal(value)}>{label}</button>
              ))}
            </div>
            <div className="recommendation">
              <span>Сізге лайық ұсыныс</span>
              <strong>№{recommended.id}. {recommended.title}</strong>
              <p>{recommended.short}</p>
              <PayLink course={recommended} compact />
            </div>
          </div>
        </section>

        <section id="courses" className="courses section-pad">
          <div className="section-heading horizontal">
            <div><p className="kicker">8 бағыт · Бір мақсат</p><h2>Нәтижеге апаратын<br/>курсты таңдаңыз.</h2></div>
            <p>Әр курста видеосабақтармен бірге дәрістер, мақалалар, дайын үлгілер және қосымша материалдар беріледі.</p>
          </div>
          <div className="course-grid">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
        </section>

        <section id="how" className="steps section-pad">
          <div className="steps-intro"><p className="kicker light">Қалай бастайсыз?</p><h2>Үш қадам.<br/>Бір жаңа дағды.</h2><p>Drive материалдары ашық жарияланбайды. Жеке қолжетімділік тек төлем расталғаннан кейін беріледі.</p></div>
          <ol className="step-list">
            <li><span>01</span><div><h3>Курсты таңдаңыз</h3><p>Мақсатыңызға сай бағдарламаны анықтаңыз.</p></div></li>
            <li><span>02</span><div><h3>Kaspi арқылы төлеңіз</h3><p>Батырма сізді қауіпсіз Kaspi төлем бетіне апарады.</p></div></li>
            <li><span>03</span><div><h3>Жеке рұқсат алыңыз</h3><p>Төлем расталған соң Google Drive материалдарына қолжетімділік беріледі. Чекті сақтап қойыңыз.</p></div></li>
          </ol>
        </section>

        <section id="faq" className="faq section-pad">
          <div className="section-heading"><p className="kicker">Маңызды ақпарат</p><h2>Жиі қойылатын<br/>сұрақтар.</h2></div>
          <div className="faq-list">
            <details open><summary>Курсты қанша уақыт көре аламын?<span>+</span></summary><p>Бейнедәрістер мен қосымша материалдарға қолжетімділік шектеусіз уақытқа беріледі.</p></details>
            <details><summary>Google Drive сілтемесі қашан беріледі?<span>+</span></summary><p>Сілтеме сайтта ашық көрсетілмейді. Kaspi төлемі расталған соң таңдаған курсыңызға жеке рұқсат аласыз.</p></details>
            <details><summary>Қосымша материалдар бар ма?<span>+</span></summary><p>Иә. Бағдарламаға қарай дәрістер, ғылыми мақалалар, үлгілер және басқа практикалық материалдар қосылған.</p></details>
            <details><summary>Төлем жасағанда нені көрсету керек?<span>+</span></summary><p>Алдымен қажетті курсты белгілеңіз, Kaspi арқылы төлем жасаңыз және төлем чегін сақтаңыз.</p></details>
          </div>
        </section>
      </main>
    </>
  );
}

function SalePage() {
  return (
    <main id="top" className="sale-page">
      <section className="sale-hero">
        <p className="eyebrow"><span /> Бір рет төлеңіз · Шектеусіз оқыңыз</p>
        <h1>Курсты бүгін бастаңыз.</h1>
        <p>Қажетті бағытты таңдаңыз. Kaspi арқылы төлем жасағаннан кейін Google Drive материалдарына жеке қолжетімділік аласыз.</p>
        <div className="sale-points"><span>✓ Видеосабақтар</span><span>✓ Қосымша материалдар</span><span>✓ Шектеусіз уақыт</span></div>
        <a className="primary-link lime" href="#buy">Курсты таңдау <span>↓</span></a>
      </section>
      <section id="buy" className="quick-buy section-pad">
        <div className="quick-head"><p className="kicker">Жылдам таңдау</p><h2>8 практикалық курс</h2><p>Курс батырмасы тек Kaspi төлем бетіне апарады. Drive рұқсаты төлем расталған соң беріледі.</p></div>
        <div className="compact-grid">{courses.map((course) => <CourseCard key={course.id} course={course} compact />)}</div>
      </section>
      <section className="payment-note">
        <div><span className="note-icon">₸</span><div><strong>Төлемге дайынсыз ба?</strong><p>Kaspi бетінде соманы таңдап, төлем жасаңыз. Қолжетімділік алу үшін чекті сақтап қойыңыз.</p></div></div>
        <PayLink />
      </section>
    </main>
  );
}

export default function Home() {
  const [view, setView] = useState<"lead" | "sale">("lead");
  return (
    <div className="site-shell">
      <Header view={view} setView={setView} />
      {view === "lead" ? <LeadPage setView={setView} /> : <SalePage />}
      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">Z</span><span>ZERTTEU<small>LAB</small></span></a>
        <p>Ғылымға сенім. Зерттеуге жүйе. Нәтижеге нақты қадам.</p>
        <span>© 2026 · Онлайн курстар</span>
      </footer>
    </div>
  );
}
