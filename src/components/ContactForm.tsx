"use client";

import { useState } from "react";

type Dict = {
  messageLabel: string;
  messagePlaceholder: string;
  sendBtn: string;
};

const CONTACT_EMAIL = "davidggmusic@gmail.com";

const SUBJECTS = [
  { value: "produccion", label: "Producción" },
  { value: "grabacion", label: "Grabación / Mezcla / Mastering" },
  { value: "combos", label: "Escuela de Combos" },
  { value: "clases", label: "Clases particulares" },
  { value: "otro", label: "Otro" },
];

const inputClass =
  "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all";

export default function ContactForm({ dict }: { dict: Dict }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subjectValue = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const subjectLabel =
      SUBJECTS.find((s) => s.value === subjectValue)?.label ?? subjectValue;

    const subject = `[Web] ${subjectLabel} — ${name}`;
    const body = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Interesado en: ${subjectLabel}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
            Nombre
          </label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="tu@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-400 mb-2">
          ¿En qué estás interesado?
        </label>
        <select id="subject" name="subject" className={`${inputClass} appearance-none`}>
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
          {dict.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${inputClass} resize-none`}
          placeholder={dict.messagePlaceholder}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-4 px-8 rounded-lg transition-colors"
      >
        {dict.sendBtn}
      </button>

      {sent && (
        <p className="text-sm text-amber-500" role="status">
          Se abrirá tu aplicación de correo con el mensaje listo. Solo tienes que
          pulsar enviar. Si no se abre, escríbenos a {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
