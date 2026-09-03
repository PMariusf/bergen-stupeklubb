"use client";

import { useState, type FormEvent } from "react";

type Errors = Partial<Record<
  "participantName" | "birthDate" | "email" | "phone" | "offer" | "terms",
  string
>>;

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[#06162d] outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="mt-2 text-sm font-semibold text-red-700" role="alert">
      {message}
    </p>
  );
}

export default function RegistrationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [isValid, setIsValid] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const participantName = String(form.get("participantName") ?? "").trim();
    const birthDate = String(form.get("birthDate") ?? "");
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").replace(/\D/g, "");
    const offer = String(form.get("offer") ?? "");
    const terms = form.get("terms");
    const nextErrors: Errors = {};

    if (participantName.length < 2) {
      nextErrors.participantName = "Skriv inn navnet på deltakeren.";
    }

    if (!birthDate) {
      nextErrors.birthDate = "Velg fødselsdato.";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Skriv inn en gyldig e-postadresse.";
    }

    if (phone.length < 8) {
      nextErrors.phone = "Skriv inn et gyldig telefonnummer.";
    }

    if (!offer) {
      nextErrors.offer = "Velg et treningstilbud.";
    }

    if (!terms) {
      nextErrors.terms = "Du må bekrefte at opplysningene kan behandles.";
    }

    setErrors(nextErrors);
    setIsValid(Object.keys(nextErrors).length === 0);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={() => setIsValid(false)}
      className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10 lg:p-12"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-7">
        <div>
          <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-800">
            Forhåndsvisning
          </span>
          <h3 className="mt-3 text-2xl font-black text-[#06162d]">
            Opplysninger om deltakeren
          </h3>
        </div>
        <p className="max-w-xs text-sm leading-6 text-slate-500">
          Innsending og lagring kobles til i et senere steg.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block font-bold text-[#06162d] sm:col-span-2">
          Fullt navn på deltaker <span className="text-cyan-700">*</span>
          <input
            name="participantName"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.participantName)}
            aria-describedby={errors.participantName ? "participantName-error" : undefined}
          />
          <FieldError id="participantName-error" message={errors.participantName} />
        </label>

        <label className="block font-bold text-[#06162d]">
          Fødselsdato <span className="text-cyan-700">*</span>
          <input
            name="birthDate"
            type="date"
            className={inputClass}
            aria-invalid={Boolean(errors.birthDate)}
            aria-describedby={errors.birthDate ? "birthDate-error" : undefined}
          />
          <FieldError id="birthDate-error" message={errors.birthDate} />
        </label>

        <label className="block font-bold text-[#06162d]">
          Foresatt
          <span className="ml-2 text-sm font-normal text-slate-500">
            hvis deltakeren er under 18 år
          </span>
          <input
            name="guardianName"
            autoComplete="name"
            className={inputClass}
          />
        </label>

        <label className="block font-bold text-[#06162d]">
          E-post <span className="text-cyan-700">*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <FieldError id="email-error" message={errors.email} />
        </label>

        <label className="block font-bold text-[#06162d]">
          Telefon <span className="text-cyan-700">*</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          <FieldError id="phone-error" message={errors.phone} />
        </label>

        <label className="block font-bold text-[#06162d] sm:col-span-2">
          Ønsket treningstilbud <span className="text-cyan-700">*</span>
          <select
            name="offer"
            defaultValue=""
            className={inputClass}
            aria-invalid={Boolean(errors.offer)}
            aria-describedby={errors.offer ? "offer-error" : undefined}
          >
            <option value="" disabled>Velg tilbud</option>
            <option value="stupskolen">Stupskolen</option>
            <option value="videregaende">Videregående</option>
            <option value="voksne">Voksengruppe</option>
            <option value="usikker">Jeg er usikker</option>
          </select>
          <FieldError id="offer-error" message={errors.offer} />
        </label>

        <label className="block font-bold text-[#06162d] sm:col-span-2">
          Erfaring
          <span className="ml-2 text-sm font-normal text-slate-500">valgfritt</span>
          <textarea
            name="experience"
            rows={4}
            placeholder="Fortell kort om tidligere erfaring med stup, turn eller svømming."
            className={inputClass}
          />
        </label>

        <label className="block font-bold text-[#06162d] sm:col-span-2">
          Tilrettelegging
          <span className="ml-2 text-sm font-normal text-slate-500">valgfritt</span>
          <textarea
            name="accommodation"
            rows={3}
            placeholder="Er det noe trenerne bør vite for å skape en trygg og god trening?"
            className={inputClass}
          />
        </label>

        <label className="block font-bold text-[#06162d] sm:col-span-2">
          Bildesamtykke
          <select name="photoConsent" defaultValue="later" className={inputClass}>
            <option value="yes">Ja, bilder kan publiseres</option>
            <option value="no">Nei, bilder skal ikke publiseres</option>
            <option value="later">Avklares senere</option>
          </select>
        </label>
      </div>

      <label className="mt-7 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
        <input
          name="terms"
          type="checkbox"
          className="mt-1 h-5 w-5 shrink-0 accent-cyan-500"
          aria-invalid={Boolean(errors.terms)}
          aria-describedby={errors.terms ? "terms-error" : undefined}
        />
        <span>
          Jeg bekrefter at opplysningene er riktige og kan behandles av Bergen
          Stupeklubb i forbindelse med påmelding.
          <span className="text-cyan-700"> *</span>
          <FieldError id="terms-error" message={errors.terms} />
        </span>
      </label>

      {isValid && (
        <div
          className="mt-7 rounded-2xl border border-cyan-300 bg-cyan-50 p-5 text-[#06162d]"
          role="status"
        >
          <p className="font-black">Skjemaet er fylt ut riktig.</p>
          <p className="mt-1 text-sm leading-6">
            Dette er bare en test. Opplysningene er ikke sendt eller lagret ennå.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
        >
          Kontroller skjemaet
        </button>
        <p className="text-sm text-slate-500">
          Felter merket med * må fylles ut.
        </p>
      </div>
    </form>
  );
}
