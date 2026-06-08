import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Megaphone,
  PenTool,
  Target,
  BarChart3,
  Mic,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Карьерный навигатор — Реклама и связи с общественностью | АГУ" },
      {
        name: "description",
        content:
          "Карьерный навигатор по направлению «Реклама и связи с общественностью» Астраханского государственного университета. Профессии, компетенции и траектории развития.",
      },
      { property: "og:title", content: "Карьерный навигатор — Реклама и СО | АГУ" },
      {
        property: "og:description",
        content:
          "Куда пойти работать после направления «Реклама и связи с общественностью» в АГУ. Автор: студент Дмитрий Булич.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const professions = [
  { n: "01", icon: Megaphone, title: "PR-менеджер", desc: "Формирование имиджа бренда, работа с медиа, антикризисные коммуникации.", salary: "от 70 000 ₽" },
  { n: "02", icon: PenTool, title: "Копирайтер", desc: "Тексты, сценарии и контент-планы для брендов, медиа и агентств.", salary: "от 50 000 ₽" },
  { n: "03", icon: Target, title: "Бренд-менеджер", desc: "Позиционирование, развитие и продвижение торговой марки.", salary: "от 90 000 ₽" },
  { n: "04", icon: BarChart3, title: "SMM-специалист", desc: "Стратегия в соцсетях, аналитика, работа с сообществами и блогерами.", salary: "от 60 000 ₽" },
  { n: "05", icon: Mic, title: "Пресс-секретарь", desc: "Публичные выступления, общение со СМИ, пресс-конференции.", salary: "от 80 000 ₽" },
  { n: "06", icon: TrendingUp, title: "Маркетолог-аналитик", desc: "Исследование рынка, поведения потребителей, метрики кампаний.", salary: "от 75 000 ₽" },
];

const skills = [
  "Стратегические коммуникации",
  "Медиапланирование",
  "Копирайтинг и сторителлинг",
  "Брендинг и айдентика",
  "Digital и SMM",
  "Event-менеджмент",
  "Аналитика и метрики",
  "Кризисные коммуникации",
];

const path = [
  { year: "1–2 курс", title: "Фундамент", desc: "Основы коммуникаций, теория рекламы и PR, базовые инструменты дизайна и текста." },
  { year: "2–3 курс", title: "Практика", desc: "Стажировки в агентствах, ведение проектов, первые публикации в портфолио." },
  { year: "3–4 курс", title: "Специализация", desc: "Выбор ниши: digital, бренд, GR, медиа. Конкурсы и собственные кампании." },
  { year: "После выпуска", title: "Карьера", desc: "Junior → Middle → Senior за 3–5 лет. Агентство, in-house или свой бренд." },
];

const faq = [
  {
    q: "Сложно ли учиться на этом направлении?",
    a: "Учёба сочетает теорию (коммуникации, маркетинг, психология) и много практики — кейсы, проекты, защиты. Главное — интерес к людям, текстам и трендам. Технических сложностей нет.",
  },
  {
    q: "Нужно ли уметь рисовать или программировать?",
    a: "Нет. Базовые навыки работы с Figma, Canva и нейросетями вы получите на парах. Программировать не нужно, но знание Excel и аналитических инструментов даст преимущество.",
  },
  {
    q: "Где можно проходить практику в Астрахани?",
    a: "Локальные рекламные агентства, пресс-службы вузов, министерств и крупных компаний региона, редакции СМИ, event-команды, отделы маркетинга торговых сетей.",
  },
  {
    q: "Можно ли работать уже во время учёбы?",
    a: "Да и нужно. С 2 курса студенты берут фриланс-заказы на копирайтинг, ведение соцсетей, дизайн макетов. К выпуску формируется портфолио из 10–20 реальных кейсов.",
  },
  {
    q: "Какие предметы ЕГЭ нужны для поступления?",
    a: "Русский язык, обществознание и история (или иностранный язык — зависит от набора года). Уточняйте актуальный список на сайте приёмной комиссии АГУ.",
  },
  {
    q: "Какие зарплаты у выпускников?",
    a: "Старт: 40–60 тыс. в регионе, 70–100 тыс. в Москве. Через 3 года: 100–180 тыс. На уровне руководителя — от 200 тыс. и собственные проекты.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground paper-grain">
      <Nav />
      <Hero />
      <Marquee />
      <Professions />
      <Skills />
      <Path />
      <FAQ />
      <About />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl italic">Карьерный</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">навигатор</span>
        </a>
        <div className="hidden gap-10 text-sm md:flex">
          {[
            ["Профессии", "#professions"],
            ["Навыки", "#skills"],
            ["Путь", "#path"],
            ["FAQ", "#faq"],
            ["Автор", "#about"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="text-muted-foreground transition hover:text-foreground">
              {l}
            </a>
          ))}
        </div>
        <a
          href="#about"
          className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:opacity-90 md:inline-flex"
        >
          АГУ · 42.03.01 <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-10 bg-foreground/30" />
              Астраханский государственный университет
            </div>
            <h1 className="font-display mt-8 text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-tight">
              Карьерный<br />
              навигатор <span className="italic text-[color:var(--accent-warm)]">по&nbsp;направлению</span>
            </h1>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">направление</span>
              <span className="font-display text-2xl italic md:text-3xl">
                Реклама и связи с общественностью
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium">
                42.03.01
              </span>
            </div>
          </div>
          <aside className="flex flex-col justify-end gap-6 md:col-span-4">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
              Профессии, компетенции и реальные траектории развития для студентов
              и абитуриентов направления.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#professions"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                Смотреть профессии
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-sm font-medium transition hover:bg-foreground hover:text-background"
              >
                FAQ
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-y-8 border-t border-border pt-10 md:mt-32 md:grid-cols-4">
          {[
            ["6+", "профессий"],
            ["4 года", "обучения"],
            ["8", "ключевых навыков"],
            ["2026", "выпуск"],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col gap-1">
              <div className="font-display text-5xl md:text-6xl">{n}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Стратегия", "Бренд", "Сторителлинг", "Кампании", "Медиа", "Аналитика", "Креатив", "Репутация"];
  return (
    <div className="overflow-hidden border-y border-border bg-foreground py-6 text-background">
      <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap will-change-transform">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="font-display mx-8 text-3xl italic md:text-5xl">
            {w} <span className="mx-6 text-[color:var(--accent-warm)]">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from {transform:translateX(0)} to {transform:translateX(-33.333%)} }`}</style>
    </div>
  );
}

function Professions() {
  return (
    <section id="professions" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              § 01 — Профессии
            </div>
            <h2 className="font-display mt-4 text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Кем вы можете <span className="italic">работать</span>
            </h2>
          </div>
          <p className="text-muted-foreground md:col-span-5 md:text-lg">
            Шесть актуальных карьерных треков, открытых выпускникам направления —
            от агентств до собственных проектов.
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {professions.map(({ n, icon: Icon, title, desc, salary }) => (
            <article
              key={title}
              className="group relative flex flex-col gap-6 bg-background p-8 transition hover:bg-foreground hover:text-background md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-xl italic opacity-50">{n}</span>
                <Icon className="h-6 w-6 opacity-70 transition group-hover:rotate-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-3xl leading-tight md:text-4xl">{title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{desc}</p>
              <div className="mt-auto flex items-center justify-between border-t border-current/15 pt-5 text-xs uppercase tracking-wider">
                <span className="opacity-60">зарплата</span>
                <span className="font-medium">{salary}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:grid md:grid-cols-12 md:gap-12 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              § 02 — Компетенции
            </div>
            <h2 className="font-display mt-4 text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Чему вы<br /><span className="italic">научитесь</span>
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground md:text-lg">
              Восемь ключевых блоков навыков, которые формируются за 4 года обучения.
            </p>
          </div>
        </div>
        <ul className="mt-12 md:col-span-7 md:mt-0">
          {skills.map((s, i) => (
            <li
              key={s}
              className="group flex items-baseline justify-between border-b border-foreground/15 py-7 transition hover:border-foreground"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl md:text-4xl">{s}</span>
              </div>
              <ArrowUpRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Path() {
  return (
    <section id="path" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          § 03 — Траектория
        </div>
        <h2 className="font-display mt-4 max-w-4xl text-5xl leading-[0.95] tracking-tight md:text-7xl">
          От первого курса <span className="italic">до карьеры</span>
        </h2>

        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-4">
          {path.map((p, i) => (
            <div
              key={p.year}
              className="flex flex-col gap-6 bg-background p-8 md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-7xl italic text-[color:var(--accent-warm)]">
                  0{i + 1}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  этап
                </span>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {p.year}
              </div>
              <h3 className="font-display text-3xl leading-tight">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:grid md:grid-cols-12 md:gap-16 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              § 04 — FAQ
            </div>
            <h2 className="font-display mt-4 text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Частые<br /><span className="italic">вопросы</span>
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground md:text-lg">
              Всё, что хотят знать абитуриенты и первокурсники о направлении.
            </p>
          </div>
        </div>
        <div className="mt-12 md:col-span-7 md:mt-0">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-foreground/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left transition hover:opacity-70"
                >
                  <span className="font-display text-2xl leading-tight md:text-3xl">
                    {f.q}
                  </span>
                  <span className="mt-2 flex-shrink-0">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-12 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.25em] opacity-60">
            § 05 — Автор
          </div>
          <h2 className="font-display mt-4 text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Дмитрий<br /><span className="italic text-[color:var(--accent-warm)]">Булич</span>
          </h2>
        </div>
        <div className="space-y-8 md:col-span-7">
          <p className="font-display text-3xl leading-snug md:text-4xl">
            Студент Астраханского государственного университета, направление
            <span className="italic"> «Реклама и связи с общественностью»</span>.
          </p>
          <p className="text-base leading-relaxed opacity-75 md:text-lg">
            Этот лендинг создан как карьерный навигатор для будущих и нынешних студентов —
            чтобы помочь им увидеть полную картину профессии: от первых шагов в учёбе
            до реальных позиций на рынке коммуникаций.
          </p>
          <dl className="grid gap-px border border-background/15 bg-background/15 md:grid-cols-3">
            {[
              ["Город", "Астрахань"],
              ["Вуз", "АГУ"],
              ["Год", "2026"],
            ].map(([k, v]) => (
              <div key={k} className="bg-foreground p-6">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-60">{k}</dt>
                <dd className="font-display mt-2 text-2xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex flex-col items-start justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center">
          <div>© 2026 · Карьерный навигатор · АГУ</div>
          <div className="font-display text-base normal-case tracking-normal italic">
            Учебный проект Дмитрия Булича
          </div>
        </div>
      </div>
    </footer>
  );
}
