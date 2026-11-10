import React, { useState } from "react";

export default function VocationalApplicationForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', location: '', age: '', motivation: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.location.trim()) newErrors.location = "State / location is required";
    if (!form.age.trim()) newErrors.age = "Age is required";
    if (!form.motivation.trim()) newErrors.motivation = "Motivation statement is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/mvzypywn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);

        // 🎯 FIRE GOOGLE ADS CONVERSION TAG FOR VOCATIONAL TRAINING SUBMISSION
        if (typeof window !== "undefined") {
          const win = window as unknown as { gtag?: (...args: unknown[]) => void };
          if (win.gtag) {
            win.gtag('event', 'conversion', {
              'send_to': 'AW-18051879035/Spp5CMqtyLUdEPug559D',
              'value': 1.0,
              'currency': 'USD'
            });
          }
        }
      } else {
        const errorData = await response.json();
        console.error("Formspree validation error:", errorData);
        alert('Formspree rejected the application. Check your browser console for structural issues.');
      }
    } catch (error) {
      console.error("Network connectivity crash:", error);
      alert('Something went wrong. Please check your network connection and try again.');
    }
    setLoading(false);
  };

  const s = {
    formCard: {
      background: "#f9f9f9",
      borderRadius: "12px",
      padding: "48px 40px",
    },
    formTitle: {
      fontSize: "24px",
      fontWeight: 700,
      marginBottom: "8px",
    },
    formSub: {
      fontSize: "15px",
      color: "#666",
      marginBottom: "32px",
      lineHeight: 1.6,
    },
    label: {
      display: "block",
      fontSize: "13px",
      fontWeight: 600,
      color: "#444",
      marginBottom: "6px",
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "15px",
      fontFamily: "Arial, sans-serif",
      outline: "none",
      marginBottom: "16px",
      boxSizing: "border-box" as const,
    },
    inputError: {
      borderColor: "#D32F2F",
      marginBottom: "4px",
    },
    textarea: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "15px",
      fontFamily: "Arial, sans-serif",
      outline: "none",
      minHeight: "100px",
      resize: "vertical" as const,
      marginBottom: "16px",
      boxSizing: "border-box" as const,
    },
    textareaError: {
      borderColor: "#D32F2F",
      marginBottom: "4px",
    },
    errorText: {
      display: "block",
      color: "#D32F2F",
      fontSize: "13px",
      fontWeight: 500,
      marginBottom: "16px",
    },
    btnRed: {
      background: "#7B1E1E",
      color: "#fff",
      border: "none",
      padding: "16px 40px",
      borderRadius: "100px",
      fontSize: "15px",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "8px",
    },
    successBox: {
      background: "#e8f5e9",
      borderRadius: "12px",
      padding: "32px",
      textAlign: "center" as const,
    },
  };

  return (
    <div style={s.formCard}>
      {submitted ? (
        <div style={s.successBox}>
          <div style={{ fontSize: "36px", marginBottom: "16px" }}>✓</div>
          <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>You are on the list.</h3>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
            Thank you for registering your interest. We will be in touch as soon as
            the programme is ready to launch.
          </p>
        </div>
      ) : (
        <div>
          <div style={s.formTitle}>Register your interest</div>
          <div style={s.formSub}>
            The programme is not yet open for enrolment, but you can register your
            interest now and we will contact you as soon as we are ready to launch.
          </div>

          <label style={s.label}>Full name</label>
          <input
            style={{ ...s.input, ...(errors.name ? s.inputError : {}) }}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.name && <span style={s.errorText}>{errors.name}</span>}

          <label style={s.label}>Email address</label>
          <input
            style={{ ...s.input, ...(errors.email ? s.inputError : {}) }}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
          {errors.email && <span style={s.errorText}>{errors.email}</span>}

          <label style={s.label}>Phone number</label>
          <input
            style={{ ...s.input, ...(errors.phone ? s.inputError : {}) }}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234..."
          />
          {errors.phone && <span style={s.errorText}>{errors.phone}</span>}

          <label style={s.label}>State / location in Nigeria</label>
          <input
            style={{ ...s.input, ...(errors.location ? s.inputError : {}) }}
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Lagos, Abuja, Port Harcourt"
          />
          {errors.location && <span style={s.errorText}>{errors.location}</span>}

          <label style={s.label}>Age</label>
          <input
            style={{ ...s.input, ...(errors.age ? s.inputError : {}) }}
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Your age"
          />
          {errors.age && <span style={s.errorText}>{errors.age}</span>}

          <label style={s.label}>Why do you want to join this programme?</label>
          <textarea
            style={{ ...s.textarea, ...(errors.motivation ? s.textareaError : {}) }}
            name="motivation"
            value={form.motivation}
            onChange={handleChange}
            placeholder="Tell us a little about yourself and why this matters to you"
          />
          {errors.motivation && <span style={s.errorText}>{errors.motivation}</span>}

          <button style={s.btnRed} onClick={handleSubmit} disabled={loading}>
            {loading ? 'Submitting...' : 'Register my interest'}
          </button>
        </div>
      )}
    </div>
  );
}