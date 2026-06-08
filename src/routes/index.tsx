import { createFileRoute } from "@tanstack/react-router";
import {
  Megaphone,
  Users,
  Briefcase,
  TrendingUp,
  Sparkles,
  Target,
  Mic,
  PenTool,
  BarChart3,
  GraduationCap,
  ArrowRight,
  Mail,
  MapPin,
  CheckCircle2,
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
  {
    icon: Megaphone,
    title: "PR-менеджер",
    desc: "Формирование имиджа бренда, работа с медиа, антикризисные коммуникации.",
  },
  {
    icon: PenTool,
    title: "Копирайтер / Контент-стратег",
    desc: "Создание текстов, сценариев и контент-планов для брендов и медиа.",
  },
  {
    icon: Target,
    title: "Бренд-менеджер",
    desc: "Позиционирование, развитие и продвижение торговой марки на рынке.",
  },
  {
    icon: BarChart3,
    title: "SMM-специалист",
    desc: "Стратегия в социальных сетях, аналитика, работа с сообществами и блогерами.",
  },
  {
    icon: Mic,
    title: "Спикер / Пресс-секретарь",
    desc: "Публичные выступления, общение со СМИ, ведение пресс-конференций.",
  },
  {
    icon: TrendingUp,
    title: "Маркетолог-аналитик",
    desc: "Исследование рынка, поведения потребителей, эффективности кампаний.",
  },
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
  {
    year: "1–2 курс",
    title: "Фундамент",
    desc: "Основы коммуникаций, теория рекламы и PR, базовые инструменты дизайна и текста.",
  },
  {
    year: "2–3 курс",
    title: "Практика",
    desc: "Стажировки в агентствах, ведение проектов, первые публикации и кейсы в портфолио.",
  },
  {
    year: "3–4 курс",
    title: "Специализация",
    desc: "Выбор ниши: digital, бренд, GR, медиа. Участие в конкурсах и собственные кампании.",
  },
  {
    year: "После выпуска",
    title: "Карьера",
    desc: "Junior → Middle → Senior за 3–5 лет. Старт в агентстве, in-house или собственный бренд.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>Карьерный навигатор</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#professions" className="transition hover:text-foreground">Профессии</a>
            <a href="#skills" className="transition hover:text-foreground">Компетенции</a>
            <a href="#path" className="transition hover:text-foreground">Траектория</a>
            <a href="#about" className="transition hover:text-foreground">Об авторе</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 20%, oklch(0.85 0.18 60 / 0.35), transparent 70%), radial-gradient(50% 40% at 20% 80%, oklch(0.75 0.22 25 / 0.25), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <GraduationCap className="h-3.5 w-3.5" />
            Астраханский государственный университет
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Карьерный навигатор по направлению{" "}
            <span className="italic text-muted-foreground">«Реклама и связи с общественностью»</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Профессии, навыки и реальные траектории развития для студентов и абитуриентов
            направления 42.03.01.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#professions"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              Изучить профессии <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#path"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-accent"
            >
              Путь развития
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
            {[
              ["6+", "профессий"],
              ["4 года", "обучение"],
              ["8", "ключевых навыков"],
              ["100%", "практика"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-semibold md:text-4xl">{n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONS */}
      <section id="professions" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground">01 — Профессии</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Кем можно работать
              </h2>
            </div>
            <Briefcase className="hidden h-10 w-10 text-muted-foreground md:block" />
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
            {professions.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex flex-col gap-4 bg-background p-8 transition hover:bg-accent"
              >
                <Icon className="h-7 w-7 transition group-hover:scale-110" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-sm uppercase tracking-widest text-muted-foreground">02 — Компетенции</div>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Чему вы научитесь за время обучения
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {skills.map((s) => (
              <div
                key={s}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition hover:border-foreground/40"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span className="text-base font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATH */}
      <section id="path" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-sm uppercase tracking-widest text-muted-foreground">03 — Траектория</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            От первого курса до карьеры
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {path.map((p, i) => (
              <div
                key={p.year}
                className="relative flex flex-col gap-3 rounded-2xl border border-border p-6"
              >
                <div className="text-5xl font-semibold text-muted-foreground/40">
                  0{i + 1}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.year}
                </div>
                <div className="text-xl font-semibold">{p.title}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:py-32">
          <div>
            <div className="text-sm uppercase tracking-widest opacity-60">Об авторе</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Дмитрий Булич
            </h2>
            <p className="mt-4 text-lg opacity-80">
              Студент Астраханского государственного университета, направление «Реклама и связи с
              общественностью».
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed opacity-80">
              Этот лендинг создан как карьерный навигатор для будущих и нынешних студентов,
              чтобы помочь им увидеть полную картину профессии: от первых шагов в учёбе до
              реальных позиций на рынке коммуникаций.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-sm">
                <MapPin className="h-4 w-4" /> Астрахань, Россия
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-sm">
                <Users className="h-4 w-4" /> АГУ, направление 42.03.01
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-sm">
                <Mail className="h-4 w-4" /> Учебный проект 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
          <div>© 2026 Карьерный навигатор · АГУ</div>
          <div>Автор: Дмитрий Булич</div>
        </div>
      </footer>
    </div>
  );
}
