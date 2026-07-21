"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  honeypot: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    if (form.message.trim().length < 10) {
      setStatus("error");
      setMessage("Message must be at least 10 characters.");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setMessage("Message delivered. I will reply after reviewing the context.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("The API is not reachable yet. Check the backend server and try again.");
    }
  }

  return (
    <form onSubmit={submit} className="card space-y-5 p-6">
      <input type="text" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={(event) => update("honeypot", event.target.value)} className="hidden" aria-hidden="true" />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" value={form.name} onChange={(value) => update("name", value)} required />
        <Field label="Email" type="email" value={form.email} onChange={(value) => update("email", value)} required />
      </div>
      <Field label="Subject" value={form.subject} onChange={(value) => update("subject", value)} required />
      <label className="block">
        <span className="text-label-md text-on-surface">Message</span>
        <textarea
          required
          minLength={10}
          maxLength={2000}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="mt-2 min-h-40 w-full rounded-lg border border-outline-variant bg-surface-low p-4 text-body-md text-on-surface focus:border-primary-container focus:shadow-glow"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-caption text-on-surface-variant"></p>
        <Button type="submit" disabled={status === "loading"}>
          <Send className="h-4 w-4" /> {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </div>
      {message ? (
        <p className={status === "success" ? "text-label-md text-secondary" : "text-label-md text-error"} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}

function Field({ label, value, onChange, required, type = "text" }: FieldProps) {
  return (
    <label className="block">
      <span className="text-label-md text-on-surface">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-lg border border-outline-variant bg-surface-low px-4 text-body-md text-on-surface focus:border-primary-container focus:shadow-glow"
      />
    </label>
  );
}
