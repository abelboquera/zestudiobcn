"use client";

import { useState } from "react";

type Dict = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjects: string[];
  messageLabel: string;
  messagePlaceholder: string;
  sendBtn: string;
  sentMsg: string;
};

const CONTACT_EMAIL = "davidggmusic@gmail.com";

const inputClass =
  "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all";

type Ui = { mailName: string; mailEmail: string; mailInterest: string; mailSubject: string };

export default function ContactForm({ dict, ui }: { dict: Dict; ui: Ui }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subjectValue = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const subjectLabel = subjectValue;

    const subject = `${ui.mailSubject} / ${name} / ${subjectLabel}`;
    const body = [
      `${ui.mailName}: ${name}`,
      `${ui.mailEmail}: ${email}`,
      `${ui.mailInterest}: ${subjectLabel}`,
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
            {dict.nameLabel}
          </label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder={dict.namePlaceholder} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
            {dict.emailLabel}
          </label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder={dict.emailPlaceholder} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-400 mb-2">
          {dict.subjectLabel}
        </label>
        <select id="subject" name="subject" className={`${inputClass} appearance-none`}>
          {dict.subjects.map((s) => (
            <option key={s} value={s}>
              {s}
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
          {dict.sentMsg} {CONTACT_EMAIL}
        </p>
      )}
    </form>
  );
}
