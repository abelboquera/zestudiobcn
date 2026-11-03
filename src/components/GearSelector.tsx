"use client";

/* eslint-disable @next/next/no-img-element -- el recorte tiene que medir lo mismo que el equipo */

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./gear-selector.css";
import type { SelectorCategory } from "@/data/gearSelector";

const ICONOS = {
  guitar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M11.9 12.1 19 5m0 0 1.5-1.5M19 5l-1.5-1.5M20.5 3.5 22 2m-1.5 1.5L22 5l-1.5 1.5M17.5 3.5 16 5l1.5 1.5" />
      <circle cx="8.5" cy="15.5" r="4.5" />
      <circle cx="8.5" cy="15.5" r="1.6" />
    </svg>
  ),
  acoustic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14.5 9.5 21 3M8.5 20a5 5 0 0 1-3.6-8.5c1.3-1.3 1-2.6 2-3.6a4.6 4.6 0 0 1 6.6 6.5c-1 1-2.3.8-3.6 2A4.9 4.9 0 0 1 8.5 20Z" />
      <circle cx="9" cy="15" r="1.8" />
    </svg>
  ),
  amp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="16" rx="1.5" />
      <circle cx="8" cy="14" r="3.2" />
      <circle cx="16" cy="14" r="3.2" />
      <path d="M5 7.5h2M9 7.5h2" />
    </svg>
  ),
  keys: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="1.5" />
      <path d="M7 6v7M11 6v7M15 6v7M19 6v7" />
    </svg>
  ),
} as const;

const dd = (n: number) => String(n).padStart(2, "0");

/** Alturas fijas de la onda del pie: al azar no cuadrarian con el HTML del servidor */
const ONDA = Array.from({ length: 46 }, (_, i) => ((i * 17) % 11) / 10);

export default function GearSelector({
  categorias,
  lang,
}: {
  categorias: SelectorCategory[];
  lang: string;
}) {
  const router = useRouter();
  const [cat, setCat] = useState(0);
  const [idx, setIdx] = useState(0);

  const categoria = categorias[cat];
  const items = categoria.items;
  const item = items[idx];

  const nombreCategoria = (c: SelectorCategory) =>
    lang === "en" ? c.labelEn : lang === "ca" ? c.labelCa : c.label;
  const unidad = lang === "en" ? categoria.unitEn : lang === "ca" ? categoria.unitCa : categoria.unit;

  const mueve = useCallback(
    (paso: number) => setIdx((i) => (i + paso + items.length) % items.length),
    [items.length]
  );

  const mueveCategoria = useCallback(
    (paso: number) => {
      setCat((c) => (c + paso + categorias.length) % categorias.length);
      setIdx(0);
    },
    [categorias.length]
  );

  useEffect(() => {
    const flechas = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"];
    const alPulsar = (e: KeyboardEvent) => {
      // sin esto las flechas ademas hacen scroll a la pagina
      if (flechas.includes(e.key)) e.preventDefault();
      if (e.key === "ArrowRight") mueve(1);
      if (e.key === "ArrowLeft") mueve(-1);
      if (e.key === "ArrowDown") mueveCategoria(1);
      if (e.key === "ArrowUp") mueveCategoria(-1);
      if (e.key === "Escape") router.push(`/${lang}`);
    };
    window.addEventListener("keydown", alPulsar);
    return () => window.removeEventListener("keydown", alPulsar);
  }, [mueve, mueveCategoria, router, lang]);

  // deja listos el anterior y el siguiente, para que no parpadeen al cambiar
  useEffect(() => {
    [-1, 1].forEach((paso) => {
      const vecino = items[(idx + paso + items.length) % items.length];
      if (vecino) new Image().src = vecino.img;
    });
  }, [items, idx]);

  const onda = useMemo(
    () => ONDA.map((d, i) => <i key={i} style={{ animationDelay: `-${d.toFixed(2)}s` }} />),
    []
  );

  return (
    <div className="gear-hud">
      <div className="gear-bg" />
      <div className="gear-tinte" />
      <div className="gear-scan" />
      <div className="gear-tono" />

      <header className="gear-topbar">
        <Link href={`/${lang}`} className="gear-marca">
          <span className="gear-marca-z">Z</span>
          <span className="gear-marca-barra" />
          <span className="gear-marca-lineas">
            <b>Z ESTUDIO BCN</b>
            <span className="gear-mono">AUDIO SYSTEM v.01</span>
          </span>
        </Link>
        <div className="gear-topbar-derecha gear-mono">
          <span>GEAR SELECTION</span>
          <span className="gear-cuenta">
            [ {dd(cat + 1)} / {dd(categorias.length)} ]
          </span>
        </div>
      </header>

      <h1 className="gear-titulo">
        CHOOSE YOUR GEAR <span className="gear-slash">{"///"}</span>
      </h1>

      <main className="gear-escena">
        <nav className="gear-rail">
          {categorias.map((c, i) => (
            <button
              key={c.id}
              type="button"
              className={`gear-cat${i === cat ? " is-active" : ""}`}
              aria-current={i === cat}
              onClick={() => {
                setCat(i);
                setIdx(0);
              }}
            >
              {ICONOS[c.icon]}
              <span>{nombreCategoria(c)}</span>
              {i === cat && (
                <svg className="gear-cat-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          ))}
        </nav>

        <section className="gear-visor">
          <div className="gear-marco">
            <div className="gear-aro" />
            <span className="gear-esq a" />
            <span className="gear-esq b" />
            <span className="gear-esq c" />
            <span className="gear-esq d" />

            <div className="gear-foto">
              <img key={item.img} src={item.img} alt={item.name} />
            </div>

            <button type="button" className="gear-flecha prev" onClick={() => mueve(-1)} aria-label="Anterior">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M15 18 9 12l6-6" />
              </svg>
            </button>
            <button type="button" className="gear-flecha next" onClick={() => mueve(1)} aria-label="Siguiente">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="gear-puntos">
            {items.map((it, i) => (
              <button
                key={it.img}
                type="button"
                className={`gear-punto${i === idx ? " is-active" : ""}`}
                aria-label={it.name}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </section>

        <aside className="gear-ficha">
          <div className="gear-datos">
            <p className="gear-kicker gear-mono">
              {unidad} {dd(idx + 1)} / {dd(items.length)}
            </p>
            <h2>{item.name}</h2>

            <dl className="gear-specs gear-mono">
              {item.specs.map(([k, v]) => (
                <div className="gear-spec" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </main>

      <footer className="gear-pie gear-mono">
        <div className="gear-ayudas">
          <span className="gear-ayuda">
            <span className="gear-tecla">&larr;</span>
            <span className="gear-tecla">&rarr;</span> BROWSE GEAR
          </span>
          <span className="gear-ayuda">
            <span className="gear-tecla">ESC</span> BACK
          </span>
        </div>
        <div className="gear-onda" aria-hidden="true">
          {onda}
        </div>
      </footer>
    </div>
  );
}
