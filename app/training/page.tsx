"use client";



import React, { useState, useEffect, useRef } from "react";

import type { CSSProperties } from "react";



// ==========================================

// 1. DIGITAL EMPOWERMENT SECTION COMPONENT

// ==========================================

const pillars = [

    {

icon: "🌍",

            title: "Open to everyone",

                text: "No prior experience needed. If you have the drive, we have the course.",

                  },

                    {

                        icon: "👩‍💻",

                            title: "Built for real life",

                                text: "Practical skills that translate directly into income and opportunity.",

                                  },

                                    {

                                        icon: "🔒",

                                            title: "Always free",

                                                text: "No card. No catch. No hidden fees. Ever.",

                                                  },

                                                    {

                                                        icon: "🤝",

title: "You will not do this alone",

 text: "We guide you through every step. If you get stuck, we are here.",

},

{

    icon: "🏘️",

    title: "Built for your community",

    text: "Designed for people who have been overlooked by traditional education. If the system missed you, this was made for you.",

  },

  {

    icon: "🚪",

    title: "Skills that open doors",

    text: "Every course connects to a real pathway — employment, self-employment, or further training. You leave with more than knowledge.",

  },
];

function DigitalEmpowermentSection() {

  const sectionRef = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);



  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setVisible(true);

          observer.disconnect();

        }

      },

      { threshold: 0.15 }

    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();

  }, []);



  return (

    <section

      ref={sectionRef}

      style={{

        backgroundColor: "#faf8f5",

        padding: "80px 24px",

        fontFamily: "Arial, sans-serif",

      }}

    >

      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Label */}

        <p

          style={{

            fontFamily: "Arial, sans-serif",

            fontSize: "12px",

            fontWeight: "700",

            letterSpacing: "2.5px",

            textTransform: "uppercase",

            color: "#7B1E1E",

            marginBottom: "20px",

            opacity: visible ? 1 : 0,

            transform: visible ? "translateY(0)" : "translateY(16px)",

            transition: "opacity 0.6s ease, transform 0.6s ease",

          }}

        >

          Who this is for

        </p>



        {/* Headline */}

        <h2

          style={{

            fontFamily: "Georgia, serif",

            fontSize: "clamp(28px, 4vw, 42px)",

            fontWeight: "normal",

            color: "#1a1a1a",

            lineHeight: "1.25",

            marginBottom: "28px",

            maxWidth: "680px",

            opacity: visible ? 1 : 0,

            transform: visible ? "translateY(0)" : "translateY(20px)",

            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",

          }}

        >

          Relief gets someone through today.

          <br />

          <span style={{ color: "#7B1E1E" }}>Skills get them through the rest of their lives.</span>

        </h2>



        {/* Body text */}

        <p

          style={{

            fontSize: "17px",

            lineHeight: "1.75",

            color: "#444",

            marginBottom: "16px",

            maxWidth: "640px",

            opacity: visible ? 1 : 0,

            transform: visible ? "translateY(0)" : "translateY(20px)",

            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",

          }}

        >

          Alongside our emergency and humanitarian work, we equip people with

          digital skills that open real doors. People who never had access to

          formal education, technology, or career pathways.

        </p>



        <p

          style={{

            fontSize: "17px",

            lineHeight: "1.75",

            color: "#444",

            marginBottom: "56px",

            maxWidth: "640px",

            opacity: visible ? 1 : 0,

            transform: visible ? "translateY(0)" : "translateY(20px)",

            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",

          }}

        >

          Our learners are women returning to work, young adults who slipped

          through the system, and community members who simply never had the

          chance. Every course is free. Every skill is real. Every person who

          completes it leaves with something no one can take away.

        </p>



        {/* Pillars */}

        <div

          style={{

            display: "grid",

            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",

            gap: "24px",

          }}

        >

          {pillars.map((p, i) => (

            <div

              key={i}

              style={{

                backgroundColor: "#ffffff",

                borderTop: "3px solid #7B1E1E",

                borderRadius: "4px",

                padding: "28px 24px",

                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",

                opacity: visible ? 1 : 0,

                transform: visible ? "translateY(0)" : "translateY(24px)",

                transition: `opacity 0.6s ease ${0.35 + i * 0.1}s, transform 0.6s ease ${0.35 + i * 0.1}s`,

              }}

            >

              <div style={{ fontSize: "28px", marginBottom: "12px" }}>{p.icon}</div>

              <h3

                style={{

                  fontFamily: "Georgia, serif",

                  fontSize: "17px",

                  fontWeight: "normal",

                  color: "#1a1a1a",

                  marginBottom: "8px",

                }}

              >

                {p.title}

              </h3>

              <p

                style={{

                  fontSize: "15px",

                  lineHeight: "1.6",

                  color: "#666",

                  margin: 0,

                }}

              >

                {p.text}

              </p>

            </div>

          ))}

        </div>



        {/* Divider into next section */}

        <div

          style={{

            marginTop: "64px",

            borderBottom: "1px solid #e0d8d0",

            opacity: visible ? 1 : 0,

            transition: "opacity 0.6s ease 0.7s",

          }}

        />

      </div>

    </section>

  );

}



// ==========================================

// 2. MAIN TRAINING PAGE COMPONENT

// ==========================================

export default function TrainingPage() {

  const [form, setForm] = useState({

    name: "",

    email: "",

    course: "",

    background: "",

  });



  // State to hold validation error messages

  const [errors, setErrors] = useState({

    name: "",

    email: "",

    course: "",

    background: "",

  });



  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);



  const handleSubmit = async () => {

    // 1. Reset current errors

    const newErrors = { name: "", email: "", course: "", background: "" };

    let isValid = true;



    // 2. Validate fields

    if (!form.name.trim()) {

      newErrors.name = "name required";

      isValid = false;

    }

    if (!form.email.trim()) {

      newErrors.email = "email required";

      isValid = false;

    }

    if (!form.course) {

      newErrors.course = "please select a course";

      isValid = false;

    }

    if (!form.background.trim()) {

      newErrors.background = "please write a brief history about yourself";

      isValid = false;

    }



    // 3. Update error state

    setErrors(newErrors);



    // 4. Stop submission if not valid

    if (!isValid) return;

   

    setSending(true);



    try {

      const res = await fetch("https://formspree.io/f/mojpzkrb", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(form),

      });



      if (!res.ok) throw new Error("Failed");



      setSubmitted(true);

    } catch (err) {

      console.error(err);

      setSending(false);

    }

  };



  const s: Record<string, CSSProperties> = {

    page: {

      fontFamily: "Arial, sans-serif",

      background: "#fff",

      color: "#1a1a1a",

      margin: 0,

      padding: 0,

      scrollBehavior: "smooth",

    },

    hero: {

      background: "#1a1a1a",

      color: "#fff",

      padding: "72px 24px 56px",

      textAlign: "center",

    },

    tag: {

      display: "inline-block",

      background: "rgba(255,255,255,0.1)",

      color: "rgba(255,255,255,0.8)",

      fontSize: "12px",

      letterSpacing: "0.1em",

      textTransform: "uppercase",

      padding: "6px 16px",

      borderRadius: "100px",

      marginBottom: "20px",

    },

    h1: {

      fontSize: "clamp(26px, 4vw, 44px)",

      fontWeight: 400,

      lineHeight: 1.2,

      maxWidth: "680px",

      margin: "0 auto 20px",

      fontFamily: "Georgia, serif",

    },

    heroP: {

      fontSize: "17px",

      color: "rgba(255,255,255,0.75)",

      maxWidth: "560px",

      margin: "0 auto",

      lineHeight: 1.75,

    },

    freeTag: {

      display: "inline-block",

      background: "#7B1E1E",

      color: "#fff",

      fontSize: "13px",

      fontWeight: 600,

      padding: "12px 24px",

      borderRadius: "100px",

      marginTop: "24px",

      textDecoration: "none",

    },

    section: {

      maxWidth: "880px",

      margin: "0 auto",

      padding: "64px 24px",

    },

    sectionTitle: {

      fontSize: "26px",

      fontWeight: 400,

      fontFamily: "Georgia, serif",

      marginBottom: "12px",

    },

    sectionSub: {

      fontSize: "16px",

      color: "#555",

      lineHeight: 1.7,

      marginBottom: "40px",

      maxWidth: "620px",

    },

    courseGrid: {

      display: "grid",

      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",

      gap: "20px",

      margin: "32px 0 56px",

    },

    courseCardBase: {

      background: "#fff",

      borderRadius: "0 0 12px 12px",

      border: "1px solid #e5e5e5",

      padding: "28px 24px",

    },

    courseTitle: {

      fontSize: "17px",

      fontWeight: 600,

      marginBottom: "10px",

    },

    courseDesc: {

      fontSize: "14px",

      color: "#555",

      lineHeight: 1.65,

      marginBottom: "16px",

    },

    noCoding: {

      display: "inline-block",

      background: "#e8f5e9",

      color: "#2e7d32",

      fontSize: "12px",

      fontWeight: 600,

      padding: "4px 12px",

      borderRadius: "100px",

    },

    storyBlock: {

      background: "#1a1a1a",

      color: "#fff",

      borderRadius: "12px",

      padding: "48px 40px",

      margin: "48px 0",

    },

    storyQ: {

      fontSize: "22px",

      fontFamily: "Georgia, serif",

      fontStyle: "italic",

      lineHeight: 1.6,

      marginBottom: "20px",

      color: "rgba(255,255,255,0.9)",

    },

    storyP: {

      fontSize: "15px",

      color: "rgba(255,255,255,0.7)",

      lineHeight: 1.75,

    },

    storyBtn: {

      display: "inline-block",

      background: "#7B1E1E",

      color: "#fff",

      fontWeight: 600,

      fontSize: "14px",

      padding: "12px 28px",

      borderRadius: "100px",

      textDecoration: "none",

      marginTop: "24px",

    },

    formCard: {

      background: "#f9f9f9",

      borderRadius: "12px",

      padding: "48px 40px",

      marginTop: "48px",

    },

    formTitle: {

      fontSize: "22px",

      fontWeight: 400,

      fontFamily: "Georgia, serif",

      marginBottom: "8px",

    },

    formSub: {

      fontSize: "15px",

      color: "#666",

      marginBottom: "32px",

    },

    label: {

      display: "block",

      fontSize: "13px",

      fontWeight: 600,

      marginBottom: "6px",

    },

    input: {

      width: "100%",

      padding: "12px 14px",

      border: "1px solid #ddd",

      borderRadius: "8px",

      boxSizing: "border-box",

    },

    select: {

      width: "100%",

      padding: "12px 14px",

      border: "1px solid #ddd",

      borderRadius: "8px",

      background: "#fff",

      boxSizing: "border-box",

    },

    textarea: {

      width: "100%",

      padding: "12px 14px",

      border: "1px solid #ddd",

      borderRadius: "8px",

      minHeight: "100px",

      boxSizing: "border-box",

    },

    errorText: {

      color: "#d32f2f",

      fontSize: "13px",

      marginTop: "6px",

      marginBottom: "16px",

      display: "block",

      fontWeight: 500,

    },

    btnRed: {

      background: "#7B1E1E",

      color: "#fff",

      border: "none",

      padding: "16px 40px",

      borderRadius: "100px",

      cursor: "pointer",

      fontWeight: 600,

      fontSize: "15px",

    },

    successBox: {

      background: "#e8f5e9",

      borderRadius: "12px",

      padding: "32px",

      textAlign: "center",

    },

  };



  const courseCard = (color: string): CSSProperties => ({

    ...s.courseCardBase,

    borderTop: `4px solid ${color}`,

  });



  const courseTag = (color: string): CSSProperties => ({

    display: "inline-block",

    background: color + "15",

    color,

    fontSize: "11px",

    fontWeight: 600,

    textTransform: "uppercase",

    padding: "4px 12px",

    borderRadius: "100px",

    marginBottom: "12px",

  });



  const courses = [

    {

      color: "#185FA5",

      type: "IAM",

      title: "Identity and Access Management",

      desc: "Learn how organisations control access. No coding required.",

      noCoding: true,

    },

    {

      color: "#1D9E75",

      type: "GRC",

      title: "Governance, Risk and Compliance",

      desc: "Understand enterprise cybersecurity governance.",

      noCoding: true,

    },

    {

      color: "#533AB7",

      type: "Full Stack",

      title: "Full Stack Engineering",

      desc: "Frontend + backend development combined.",

    },

  ];



  return (

    <div style={s.page}>

      {/* HERO SECTION */}

      <div style={s.hero}>

        <div style={s.tag}>Free technology training</div>

        <h1 style={s.h1}>A digital skill can change the entire trajectory of a life.</h1>

        <p style={s.heroP}>

          Direct Impact offers free cybersecurity and technology courses. No card. No catch. No coding required to get started.

        </p>

        <a href="#apply-form" style={s.freeTag}>

          Apply for a funded place

        </a>

      </div>



      {/* DIGITAL EMPOWERMENT SECTION */}

      <DigitalEmpowermentSection />



      {/* CHOOSE YOUR PATHWAY / TRAINING SECTION */}

      <div style={s.section}>

        <h2 style={s.sectionTitle}>Choose your pathway</h2>

        <p style={s.sectionSub}>

          Cybersecurity is a mile wide. Not every path requires coding. Here are the pathways available to you right now.

        </p>



        <div style={s.courseGrid}>

          {courses.map((c) => (

            <div key={c.type} style={courseCard(c.color)}>

              <div style={courseTag(c.color)}>{c.type}</div>

              <div style={s.courseTitle}>{c.title}</div>

              <div style={s.courseDesc}>{c.desc}</div>

              {c.noCoding && <div style={s.noCoding}>No coding required</div>}

            </div>

          ))}

        </div>



        {/* STORY BLOCK */}

        <div style={s.storyBlock}>

          <div style={s.storyQ}>

            &quot;I started as a cleaner. Today I hold a CISSP qualification, one of the most respected certifications in global cybersecurity.&quot;

          </div>

          <p style={s.storyP}>

            The founder of Direct Impact built a career in technology from scratch. The training is built on the same belief: that where you start does not determine where you end up. You just need the right path and someone to show it to you.

          </p>

          <a href="#apply-form" style={s.storyBtn}>

            Apply for a funded place

          </a>

        </div>



        {/* VOCATIONAL CTA */}

        <div style={{ background: "#fdf6f6", borderRadius: "12px", padding: "40px", marginBottom: "40px", textAlign: "center" }}>

          <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#7B1E1E", marginBottom: "12px" }}>

            Also available

          </div>

          <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#1a1a1a" }}>

            Prefer hands-on skills?

          </h3>

          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>

            Our vocational sewing and tailoring programme is coming soon. Register your interest

            now and we will contact you as soon as we are ready to launch.

          </p>

          <a href="/vocational-training" style={{ display: "inline-block", background: "#7B1E1E", color: "#fff", padding: "14px 32px", borderRadius: "100px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>

            Explore vocational training

          </a>

        </div>



        {/* FORM BLOCK */}

        <div id="apply-form" style={s.formCard}>

          <h3 style={s.formTitle}>Apply for a funded place</h3>

          <p style={s.formSub}>

            Direct Impact has a limited number of fully funded training places available. If cost is a barrier, apply here and we will be in touch.

          </p>

          {submitted ? (

            <div style={s.successBox}>

              <p style={{ fontSize: "18px", fontWeight: 600, color: "#2e7d32", marginBottom: "8px" }}>Application received.</p>

              <p style={{ fontSize: "15px", color: "#444" }}>We will review your application and be in touch within five working days.</p>

            </div>

          ) : (

            <div>

              {/* NAME INPUT */}

              <label style={s.label}>Full name</label>

              <input

                style={{

                  ...s.input,

                  borderColor: errors.name ? "#d32f2f" : "#ddd",

                  marginBottom: errors.name ? "0" : "16px"

                }}

                value={form.name}

                onChange={(e) => {

                  setForm({ ...form, name: e.target.value });

                  if (errors.name) setErrors({ ...errors, name: "" }); // Clear error as they type

                }}

                placeholder="Your name"

              />

              {errors.name && <span style={s.errorText}>{errors.name}</span>}

             

              {/* EMAIL INPUT */}

              <label style={s.label}>Email address</label>

              <input

                style={{

                  ...s.input,

                  borderColor: errors.email ? "#d32f2f" : "#ddd",

                  marginBottom: errors.email ? "0" : "16px"

                }}

                value={form.email}

                onChange={(e) => {

                  setForm({ ...form, email: e.target.value });

                  if (errors.email) setErrors({ ...errors, email: "" });

                }}

                placeholder="your@email.com"

              />

              {errors.email && <span style={s.errorText}>{errors.email}</span>}

             

              {/* COURSE SELECT */}

              <label style={s.label}>Which course interests you?</label>

              <select

                style={{

                  ...s.select,

                  borderColor: errors.course ? "#d32f2f" : "#ddd",

                  marginBottom: errors.course ? "0" : "16px"

                }}

                value={form.course}

                onChange={(e) => {

                  setForm({ ...form, course: e.target.value });

                  if (errors.course) setErrors({ ...errors, course: "" });

                }}

              >

                <option value="">Select a course</option>

                <option>Identity and Access Management (IAM)</option>

                <option>Governance Risk and Compliance (GRC)</option>

                <option>Full Stack Engineering</option>

              </select>

              {errors.course && <span style={s.errorText}>{errors.course}</span>}

             

              {/* BACKGROUND TEXTAREA */}

              <label style={s.label}>Tell us briefly about your background</label>

              <textarea

                style={{

                  ...s.textarea,

                  borderColor: errors.background ? "#d32f2f" : "#ddd",

                  marginBottom: errors.background ? "0" : "16px"

                }}

                value={form.background}

                onChange={(e) => {

                  setForm({ ...form, background: e.target.value });

                  if (errors.background) setErrors({ ...errors, background: "" });

                }}

                placeholder="A few sentences about where you are now and why you want to learn"

              />

              {errors.background && <span style={s.errorText}>{errors.background}</span>}

             

              <button style={s.btnRed} onClick={handleSubmit} disabled={sending}>

                {sending ? "Sending..." : "Submit application"}

              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}