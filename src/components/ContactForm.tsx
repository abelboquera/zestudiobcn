"use client";

import { useState } from "react";

type Dict = {
  messageLabel: string;
  messagePlaceholder: string;
  sendBtn: string;
};

const inputClass =
  "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all";

export default function ContactForm({ dict }: { dict: Dict }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contacto"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contacto" />
      <p className="hidden">
        <label>
          No rellenar: <input name="bot-field" />
        </label>
      </p>

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
          <option value="produccion">Producción</option>
          <option value="grabacion">Grabación / Mezcla / Mastering</option>
          <option value="combos">Escuela de Combos</option>
          <option value="clases">Clases particulares</option>
          <option value="otro">Otro</option>
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
        disabled={status === "sending"}
        className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-neutral-950 font-bold py-4 px-8 rounded-lg transition-colors"
      >
        {status === "sending" ? "Enviando…" : dict.sendBtn}
      </button>

      {status === "ok" && (
        <p className="text-sm text-amber-500" role="status">
          ¡Mensaje enviado! Te responderemos lo antes posible.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          No se ha podido enviar. Inténtalo de nuevo o escríbenos a hola@zestudiobcn.com.
        </p>
      )}
    </form>
  );
}
