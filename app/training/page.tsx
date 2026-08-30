'use client';

import React, { useState } from 'react';
import Head from 'next/head';

export default function ApplicationPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const consentData = formData.get('consent_data');
    const declaration = formData.get('declaration');

    if (!consentData || !declaration) {
      setShowError(true);
      const errBox = document.getElementById('errBox');
      if (errBox) {
        errBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setShowError(false);
    setSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzebzjdb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert(
          'There was a problem submitting your application. Please email femi@directimpactempowerment.org directly.'
        );
      }
    } catch {
      alert(
        'There was a problem submitting your application. Please email femi@directimpactempowerment.org directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>DIEF - Course Application &amp; Available Courses</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&amp;family=Source+Sans+3:wght@400;600;700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx>{`
        /* Hero Section Styles */
        .hero {
          font-family: 'Source Sans 3', sans-serif;
          background: #1e3a5f;
          color: #ffffff;
          padding: 64px 24px 56px;
          text-align: center;
        }
        .hero-label {
          color: #d1e4ff;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 38px;
          font-weight: 700;
          margin: 0 0 16px;
          line-height: 1.25;
        }
        .hero p {
          font-size: 18px;
          max-width: 680px;
          margin: 0 auto 28px;
          line-height: 1.5;
          color: #e2ebf5;
        }
        .badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .badge {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 999px;
        }

        /* Courses Section Styles */
        .courses-section {
          font-family: 'Source Sans 3', sans-serif;
          background: #f7f6f4;
          padding: 64px 24px 80px;
        }
        .courses-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .courses-eyebrow {
          color: #7a1f1f;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .courses-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 34px;
          color: #1e3a5f;
          margin: 0 0 20px;
        }
        .courses-intro {
          font-size: 17px;
          line-height: 1.6;
          color: #333;
          max-width: 780px;
          margin: 0 0 40px;
        }
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1150px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .courses-grid {
            grid-template-columns: 1fr;
          }
        }
        .course-card {
          background: #fff;
          border-radius: 6px;
          border: 1px solid #e5e2dc;
          border-top: 4px solid #7a1f1f;
          padding: 28px 26px 30px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
        }
        .course-card.coming-soon {
          border-top: 4px solid #c7c2b8;
        }
        .course-status {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #7a1f1f;
          margin-bottom: 10px;
        }
        .course-status.muted {
          color: #9a968c;
        }
        .course-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 22px;
          color: #1e3a5f;
          margin: 0 0 14px;
          line-height: 1.3;
        }
        .course-title.muted {
          color: #8a97a8;
        }
        .course-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #444;
          margin: 0 0 18px;
        }
        .course-desc.muted {
          color: #9a968c;
        }
        .course-features {
          list-style: none;
          margin: 0 0 20px;
          padding: 0;
        }
        .course-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          color: #333;
          margin-bottom: 10px;
          line-height: 1.4;
        }
        .course-features .check {
          flex: 0 0 18px;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #f3e6e0;
          color: #7a1f1f;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .funded-badge {
          display: inline-block;
          background: #e3f3ea;
          color: #1f7a4d;
          font-weight: 700;
          font-size: 13px;
          padding: 8px 16px;
          border-radius: 999px;
          margin-top: auto;
          text-align: center;
        }
        .not-open-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          color: #9a968c;
          margin-top: auto;
          padding-top: 8px;
        }

        /* Form Section Styles */
        .form-section {
          font-family: 'Source Sans 3', sans-serif;
          background: #ffffff;
          padding: 64px 24px 80px;
        }
        .form-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .fgrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 600px) {
          .fgrid {
            grid-template-columns: 1fr;
          }
        }
        .fg {
          margin-bottom: 24px;
        }
        .fg label {
          display: block;
          font-weight: 600;
          color: #1e3a5f;
          margin-bottom: 6px;
          font-size: 15px;
        }
        .fg input[type='text'],
        .fg input[type='email'],
        .fg input[type='tel'],
        .fg select,
        .fg textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #dcd7ce;
          border-radius: 4px;
          font-family: inherit;
          font-size: 15px;
          color: #333;
          box-sizing: border-box;
        }
        .fg textarea {
          min-height: 100px;
          resize: vertical;
        }
        .req {
          color: #7a1f1f;
        }
        .hint {
          display: block;
          font-weight: normal;
          font-size: 13px;
          color: #666;
          margin-top: 2px;
        }
        .fsec {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 22px;
          color: #1e3a5f;
          border-bottom: 2px solid #7a1f1f;
          padding-bottom: 8px;
          margin: 40px 0 24px;
        }
        .fsec.first {
          margin-top: 0;
        }
        .consent-box {
          background: #fdfbf7;
          border: 1px solid #e8e3d9;
          border-radius: 6px;
          padding: 20px;
          margin-bottom: 24px;
        }
        .cb-title {
          font-weight: 700;
          color: #1e3a5f;
          margin-top: 0;
          margin-bottom: 16px;
        }
        .ci {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }
        .ci input[type='checkbox'] {
          margin-top: 4px;
        }
        .ci-label {
          font-size: 14px;
          line-height: 1.5;
          color: #444;
        }
        .ci-strong {
          display: block;
          color: #1e3a5f;
          margin-bottom: 2px;
        }
        .ci-em {
          display: block;
          font-style: italic;
          color: #777;
          font-size: 13px;
          margin-top: 2px;
        }
        .cn {
          font-size: 13px;
          color: #555;
          background: #efeae1;
          padding: 12px;
          border-radius: 4px;
          margin-top: 16px;
        }
        .priv {
          background: #f0f4f8;
          border-left: 4px solid #1e3a5f;
          padding: 16px;
          margin-bottom: 24px;
          font-size: 14px;
          line-height: 1.5;
        }
        .err {
          color: #7a1f1f;
          background: #fdf2f2;
          border: 1px solid #f8cece;
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .sub-wrap {
          text-align: center;
          margin-top: 32px;
        }
        .sub-btn {
          background: #7a1f1f;
          color: #fff;
          border: none;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .sub-btn:hover {
          background: #5c1717;
        }
        .sub-btn:disabled {
          background: #a37575;
          cursor: not-allowed;
        }
        .sub-note {
          font-size: 13px;
          color: #666;
          margin-top: 10px;
        }
        .success {
          background: #e3f3ea;
          border: 1px solid #b3e2c7;
          padding: 24px;
          border-radius: 6px;
          text-align: center;
        }
        .success h3 {
          color: #1f7a4d;
          margin-top: 0;
        }
        .footer-note {
          font-family: 'Source Sans 3', sans-serif;
          background: #1e3a5f;
          color: #ffffff;
          padding: 32px 24px;
          text-align: center;
          font-size: 14px;
          line-height: 1.6;
        }
        .footer-note a {
          color: #d1e4ff;
          text-decoration: underline;
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero">
        <p className="hero-label">Dignity to Independence Programme</p>
        <h1>Apply for a Fully Funded Tech Career Training Place</h1>
        <p>No fees. No conditions. Open across Africa. Just the training, support, and pathway you deserve.</p>
        <div className="badges">
          <span className="badge">&#10003; Vetted Organisation</span>
          <span className="badge">&#9733; Top-Ranked</span>
          <span className="badge">&#10003; Effective Organisation 2026</span>
          <span className="badge">GlobalGiving Certified</span>
        </div>
      </div>

      {/* Available Courses Section */}
      <section className="courses-section">
        <div className="courses-inner">
          <div className="courses-eyebrow">Available Courses</div>
          <h2 className="courses-heading">Three sponsored pathways currently open</h2>
          <p className="courses-intro">
            Self-paced online, delivered by Betapersin, DIEF&apos;s sister commercial training
            partner, led by a CISSP and Microsoft Identity and Access Administrator{' '}
            <span style={{ whiteSpace: 'nowrap' }}>(SC-300)</span> certified instructor with
            fifteen years in identity and security.
          </p>

          <div className="courses-grid">
            {/* CARD 1: IAM Analyst */}
            <div className="course-card">
              <div className="course-status">Now Open</div>
              <h3 className="course-title">Identity and Access Management (IAM)</h3>
              <p className="course-desc">
                A complete foundation in IAM covering concepts, tools, and real-world
                application. Leads to employability in one of the fastest-growing areas of
                cybersecurity.
              </p>
              <ul className="course-features">
                <li><span className="check">&#10003;</span> Full curriculum access included</li>
                <li><span className="check">&#10003;</span> Fortnightly live support sessions</li>
                <li><span className="check">&#10003;</span> CV rewritten by hand</li>
                <li><span className="check">&#10003;</span> Unlimited mock interviews until first job secured</li>
                <li><span className="check">&#10003;</span> Market value: over $1,300</li>
              </ul>
              <span className="funded-badge">&#10003; Fully Funded by DIEF</span>
            </div>

            {/* CARD 2: IAM Engineering */}
            <div className="course-card">
              <div className="course-status">Now Open</div>
              <h3 className="course-title">Identity and Access Management (IAM) Engineering</h3>
              <p className="course-desc">
                A hands-on build, not theory and portal clicks. You engineer a live identity
                estate in Microsoft Entra ID and Okta: the directory, authentication protocols,
                Conditional Access, privileged access, entitlements, and the automation layer
                that ties it together. By the capstone, these labs add up to a portfolio project
                you can show an employer.
              </p>
              <ul className="course-features">
                <li><span className="check">&#10003;</span> Full curriculum access included</li>
                <li><span className="check">&#10003;</span> Fortnightly live support sessions</li>
                <li><span className="check">&#10003;</span> CV rewritten by hand</li>
                <li><span className="check">&#10003;</span> Unlimited mock interviews until first job secured</li>
                <li><span className="check">&#10003;</span> Market value: over $1,300</li>
              </ul>
              <span className="funded-badge">&#10003; Fully Funded by DIEF</span>
            </div>

            {/* CARD 3: GRC */}
            <div className="course-card">
              <div className="course-status">Now Open</div>
              <h3 className="course-title">Governance, Risk and Compliance (GRC)</h3>
              <p className="course-desc">
                A structured GRC programme covering frameworks, risk assessment, and compliance
                operations. Prepares you for roles in risk management and organisational
                governance.
              </p>
              <ul className="course-features">
                <li><span className="check">&#10003;</span> Full curriculum access included</li>
                <li><span className="check">&#10003;</span> Fortnightly live support sessions</li>
                <li><span className="check">&#10003;</span> CV rewritten by hand</li>
                <li><span className="check">&#10003;</span> Unlimited mock interviews until first job secured</li>
                <li><span className="check">&#10003;</span> Market value: over $1,300</li>
              </ul>
              <span className="funded-badge">&#10003; Fully Funded by DIEF</span>
            </div>

            {/* CARD 4: Full Stack Engineering (Coming Soon) */}
            <div className="course-card coming-soon">
              <div className="course-status muted">Coming Soon</div>
              <h3 className="course-title muted">Full Stack Engineering</h3>
              <p className="course-desc muted">
                End-to-end web development. Applications will open once funding is secured for
                this track.
              </p>
              <div className="not-open-note">&#128274; Applications not yet open</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="form-container" id="formContainer">
          {submitted ? (
            <div className="success">
              <h3>Application received</h3>
              <p>
                Thank you for applying. We have received your application and will be in touch
                within 14 days. We read every application personally.
              </p>
            </div>
          ) : (
            <form id="appForm" onSubmit={handleSubmit}>
              <p className="fsec first">Personal Details</p>

              <div className="fgrid">
                <div className="fg">
                  <label htmlFor="firstName">
                    First Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Your first name"
                  />
                </div>

                <div className="fg">
                  <label htmlFor="lastName">
                    Last Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="fg">
                <label htmlFor="email">
                  Email Address <span className="req">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="fg">
                <label htmlFor="phone">
                  Phone Number <span className="req">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Include your country code e.g. +234"
                />
              </div>

              <div className="fg">
                <label htmlFor="country">
                  Country of Residence <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  defaultValue="Nigeria"
                  readOnly
                />
              </div>

              <div className="fg">
                <label htmlFor="city">
                  City <span className="req">*</span>
                </label>
                <select id="city" name="city" required defaultValue="">
                  <option value="">Select your city</option>
                  <option>Abuja</option>
                  <option>Abeokuta</option>
                  <option>Ado-Ekiti</option>
                  <option>Akure</option>
                  <option>Asaba</option>
                  <option>Awka</option>
                  <option>Bauchi</option>
                  <option>Benin City</option>
                  <option>Birnin Kebbi</option>
                  <option>Calabar</option>
                  <option>Damaturu</option>
                  <option>Dutse</option>
                  <option>Enugu</option>
                  <option>Gombe</option>
                  <option>Gusau</option>
                  <option>Ibadan</option>
                  <option>Ilorin</option>
                  <option>Jalingo</option>
                  <option>Jos</option>
                  <option>Kaduna</option>
                  <option>Kano</option>
                  <option>Katsina</option>
                  <option>Kebbi</option>
                  <option>Lagos</option>
                  <option>Lafia</option>
                  <option>Lokoja</option>
                  <option>Maiduguri</option>
                  <option>Makurdi</option>
                  <option>Minna</option>
                  <option>Nnewi</option>
                  <option>Onitsha</option>
                  <option>Osogbo</option>
                  <option>Owerri</option>
                  <option>Port Harcourt</option>
                  <option>Sokoto</option>
                  <option>Umuahia</option>
                  <option>Uyo</option>
                  <option>Warri</option>
                  <option>Yenagoa</option>
                  <option>Yola</option>
                  <option>Zaria</option>
                  <option>Other</option>
                </select>
              </div>

              <p className="fsec">Course Selection</p>

              <div className="fg">
                <label htmlFor="course">
                  Which course are you applying for? <span className="req">*</span>
                </label>
                <select id="course" name="course" required defaultValue="">
                  <option value="">Select a course</option>
                  <option>Identity and Access Management (IAM)</option>
                  <option>Identity and Access Management (IAM) Engineering</option>
                  <option>Governance, Risk and Compliance (GRC)</option>
                  <option>Bundle &mdash; IAM and GRC combined</option>
                </select>
              </div>

              <div className="fg">
                <label htmlFor="digitalLevel">
                  How would you describe your current digital skills level? <span className="req">*</span>
                </label>
                <select id="digitalLevel" name="digitalLevel" required defaultValue="">
                  <option value="">Select one</option>
                  <option>Beginner &mdash; I use a phone and basic apps</option>
                  <option>Intermediate &mdash; I am comfortable with computers and the internet</option>
                  <option>Advanced &mdash; I have some technical background</option>
                </select>
              </div>

              <p className="fsec">Your Background</p>

              <div className="fg">
                <label htmlFor="situation">
                  Tell us briefly about your current situation <span className="req">*</span>
                  <span className="hint">What is your life like right now? Are you employed, studying, or neither?</span>
                </label>
                <textarea
                  id="situation"
                  name="situation"
                  required
                  placeholder="Tell us a little about where you are right now..."
                ></textarea>
              </div>

              <div className="fg">
                <label htmlFor="motivation">
                  Why do you want to train in this field? <span className="req">*</span>
                  <span className="hint">Tell us what this opportunity means to you. Be honest &mdash; there are no wrong answers.</span>
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  placeholder="What would this change for you and your family?"
                ></textarea>
              </div>

              <div className="fg">
                <label htmlFor="commitment">
                  How many hours per week can you dedicate to training?
                  <span className="hint">We want to make sure you can complete the programme successfully.</span>
                </label>
                <select id="commitment" name="commitment" defaultValue="">
                  <option value="">Select one</option>
                  <option>Less than 5 hours</option>
                  <option>5 to 10 hours</option>
                  <option>10 to 15 hours</option>
                  <option>More than 15 hours</option>
                </select>
              </div>

              <div className="fg">
                <label htmlFor="laptop">
                  Do you have access to a laptop or desktop computer? <span className="req">*</span>
                </label>
                <select id="laptop" name="laptop" required defaultValue="">
                  <option value="">Select one</option>
                  <option>Yes &mdash; I have my own laptop or desktop</option>
                  <option>Yes &mdash; I have shared access to a laptop or desktop</option>
                  <option>No &mdash; I do not currently have access to a laptop or desktop</option>
                </select>
              </div>

              <div className="fg">
                <label htmlFor="internet">
                  Do you have reliable internet access? <span className="req">*</span>
                </label>
                <select id="internet" name="internet" required defaultValue="">
                  <option value="">Select one</option>
                  <option>Yes &mdash; I have reliable home or office internet</option>
                  <option>Yes &mdash; I use mobile data and it is generally stable</option>
                  <option>Partial &mdash; my connection is sometimes unreliable</option>
                  <option>No &mdash; I do not currently have reliable access</option>
                </select>
              </div>

              <p className="fsec">Consent and Permissions</p>

              <div className="consent-box">
                <p className="cb-title">&#128203; Please read and confirm each item below</p>

                <div className="ci">
                  <input type="checkbox" id="consent_data" name="consent_data" required />
                  <label className="ci-label" htmlFor="consent_data">
                    <strong className="ci-strong">
                      Use of personal data for programme delivery <span className="req">*</span>
                    </strong>
                    I give Direct Impact Empowerment Foundation permission to store and use the
                    information I have provided in this application for the purposes of assessing
                    my application, contacting me about my place, and delivering the training
                    programme.
                    <em className="ci-em">Required to process your application.</em>
                  </label>
                </div>

                <div className="ci">
                  <input type="checkbox" id="consent_gg" name="consent_globalgiving" />
                  <label className="ci-label" htmlFor="consent_gg">
                    <strong className="ci-strong">Use of photo and data in GlobalGiving reports</strong>
                    I give Direct Impact Empowerment Foundation permission to use my name,
                    photograph, and anonymised progress data in reports submitted to GlobalGiving as
                    evidence of programme delivery and impact. This may include project reports
                    visible to donors on the GlobalGiving platform.
                    <em className="ci-em">
                      Optional &mdash; but helps us demonstrate impact to the donors who fund your
                      place.
                    </em>
                  </label>
                </div>

                <div className="ci">
                  <input type="checkbox" id="consent_media" name="consent_media" />
                  <label className="ci-label" htmlFor="consent_media">
                    <strong className="ci-strong">
                      Use of story and image in fundraising and social media
                    </strong>
                    I give Direct Impact Empowerment Foundation permission to share my story and
                    photograph on social media, the DIEF website, and in fundraising materials. DIEF
                    will always ask for approval before using any specific content about me.
                    <em className="ci-em">Optional &mdash; your story helps us fund more places like yours.</em>
                  </label>
                </div>

                <div className="ci">
                  <input type="checkbox" id="consent_shoutout" name="consent_shoutout" />
                  <label className="ci-label" htmlFor="consent_shoutout">
                    <strong className="ci-strong">Public celebration and shout-out</strong>
                    I am happy for DIEF to publicly celebrate my progress and achievements on social
                    media when milestones are reached &mdash; such as completing the course or securing
                    employment.
                    <em className="ci-em">Optional &mdash; we love celebrating our students!</em>
                  </label>
                </div>

                <div className="cn">
                  <strong>Your privacy matters to us.</strong> DIEF will never sell or share your
                  personal data with third parties. You can withdraw any consent at any time by
                  emailing <strong>femi@directimpactempowerment.org</strong>. Only the first consent
                  item is required to process your application.
                </div>
              </div>

              <p className="fsec">Declaration</p>

              <div className="consent-box decl">
                <div className="ci">
                  <input type="checkbox" id="declaration" name="declaration" required />
                  <label className="ci-label" htmlFor="declaration">
                    <strong className="ci-strong">
                      I confirm that the information I have provided is accurate and truthful.{' '}
                      <span className="req">*</span>
                    </strong>
                    I understand that providing false information may result in my application being
                    withdrawn. I commit to engaging fully with the programme if I am offered a
                    funded place.
                  </label>
                </div>
              </div>

              <div className="priv">
                <p>
                  <strong style={{ color: '#1a3a5c' }}>How we process applications:</strong> Every
                  application is read personally by Olufemi Adeyemo. We do not use automated
                  screening. We prioritise applicants who demonstrate genuine need, commitment, and
                  the potential to benefit fully from the training. You will receive a response
                  within 14 days.
                </p>
              </div>

              {showError && (
                <div id="errBox" className="err">
                  Please confirm the required consent items before submitting.
                </div>
              )}

              <div className="sub-wrap">
                <button type="submit" className="sub-btn" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit My Application'}
                </button>
                <p className="sub-note">
                  You will receive a confirmation email once your application is received.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer Note */}
      <footer className="footer-note">
        <p>
          This programme is part of DIEF&rsquo;s{' '}
          <strong>Dignity to Independence Programme (DIP)</strong>. Direct Impact Empowerment
          Foundation is a dual-registered NGO in Nigeria (CAC/IT/7420254) and Switzerland
          (CHE-415.427.651), independently vetted and Top-Ranked by{' '}
          <a href="https://www.globalgiving.org/projects/76936" target="_blank" rel="noreferrer">
            GlobalGiving
          </a>
          .
        </p>
      </footer>
    </>
  );
}