"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./VitalDataForm.module.css";

interface VitalData {
  systolic: string;
  diastolic: string;
  heartRate: string;
  steps: string;
  duration: string;
  weight: string;
}

export default function VitalDataForm() {
  const [formData, setFormData] = useState<VitalData>({
    systolic: "",
    diastolic: "",
    heartRate: "",
    steps: "",
    duration: "",
    weight: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Logging data:", formData);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className="material-symbols-outlined">menu</span>
          <span className={styles.logoText}>PRECISION</span>
        </div>
        <div className={styles.headerRight}>
          <span className="material-symbols-outlined">lock</span>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.editorialHeader}>
          <span className={styles.headerLabel}>VITAL PRECISION</span>
          <h1 className={styles.mainTitle}>Log Vital Data</h1>
          <p className={styles.description}>
            Record your daily clinical metrics to maintain your longitudinal health profile.
          </p>
        </section>

        <form className={styles.formGroup} onSubmit={handleSubmit}>
          {/* Blood Pressure Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderLeft}>
                <span className={`material-symbols-outlined ${styles.primaryIcon}`}>monitor_heart</span>
                <h2 className={styles.cardTitle}>Blood Pressure</h2>
              </div>
              <span className={styles.unitLabel}>mmHg</span>
            </div>
            <div className={styles.cardGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Systolic</label>
                <input className={styles.inputField} name="systolic" value={formData.systolic} onChange={handleChange} placeholder="120" type="number" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Diastolic</label>
                <input className={styles.inputField} name="diastolic" value={formData.diastolic} onChange={handleChange} placeholder="80" type="number" />
              </div>
            </div>
          </div>

          {/* Heart Rate Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderLeft}>
                <span className={`material-symbols-outlined ${styles.primaryIcon}`}>ecg</span>
                <h2 className={styles.cardTitle}>Heart Rate</h2>
              </div>
              <span className={styles.unitLabel}>BPM</span>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Resting Pulse</label>
              <input className={styles.inputField} name="heartRate" value={formData.heartRate} onChange={handleChange} placeholder="72" type="number" />
            </div>
          </div>

          {/* Activity Bento Grid Section */}
          <div className={styles.bentoGrid}>
            <div className={styles.bentoCard}>
              <div className={styles.bentoHeader}>
                <span className={`material-symbols-outlined ${styles.primaryIconSmall}`}>steps</span>
                <span className={styles.bentoTitle}>Steps</span>
              </div>
              <input className={styles.bentoInput} name="steps" value={formData.steps} onChange={handleChange} placeholder="10,000" type="number" />
            </div>
            <div className={styles.bentoCard}>
              <div className={styles.bentoHeader}>
                <span className={`material-symbols-outlined ${styles.primaryIconSmall}`}>timer</span>
                <span className={styles.bentoTitle}>Duration</span>
              </div>
              <input className={styles.bentoInput} name="duration" value={formData.duration} onChange={handleChange} placeholder="Min" type="text" />
            </div>
          </div>

          {/* Optional Weight Card */}
          <div className={styles.cardOptional}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderLeft}>
                <span className={`material-symbols-outlined ${styles.secondaryIcon}`}>monitor_weight</span>
                <h2 className={styles.cardTitleSecondary}>
                  Weight <span className={styles.optionalText}>(Optional)</span>
                </h2>
              </div>
              <span className={styles.unitLabel}>KG</span>
            </div>
            <input className={styles.inputFieldOptional} name="weight" value={formData.weight} onChange={handleChange} placeholder="70.5" type="number" step="0.1" />
          </div>

          {/* Submission Area */}
          <div className={styles.submissionArea}>
            <button className={styles.submitButton} type="submit">
              Log Data Record
            </button>
            <p className={styles.securityLabel}>Encryption Active • Secure Link</p>
          </div>
        </form>

        {/* Decorative Image bleed */}
        <div className={styles.imageBleed}>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtuIX7Q3Ut3qa95_DSK2BSmvFyIioAVf5cw1nRxD3ZktMaiJlyMm-MUpDAz8OI92rr8J0k3sJ0S5cDDpQRu7IvCy9yuimKeA1nSa9p--1q8u7fK_v7xqOvdfggwFpGTXSTjzAi3sFfVJeO_dHqCJZ7MSSuNHv5Elm0IXyXAvdAWoSXjFQJhqp7w2i_7Hw8GThbR8iBUEJTDeAiG1aRbnh7JIb5zZrLxFKjSblxKYGvBZjEaAQHnjA4tT9WeSmM0VeExKOw71Hr4-w"
            alt="Modern medical laboratory with soft clinical lighting, clean white surfaces, and high-tech precision instruments in soft focus"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageVerificationLabel}>
            Precision Verification 098-X
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className={styles.bottomNav}>
        <a className={styles.navItem} href="#">
          <span className="material-symbols-outlined">home</span>
          <span className={styles.navLabel}>Home</span>
        </a>
        <a className={`${styles.navItem} ${styles.navItemActive}`} href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
          <span className={styles.navLabel}>Health</span>
        </a>
        <a className={styles.navItem} href="#">
          <span className="material-symbols-outlined">analytics</span>
          <span className={styles.navLabel}>Insights</span>
        </a>
        <a className={styles.navItem} href="#">
          <span className="material-symbols-outlined">person</span>
          <span className={styles.navLabel}>Profile</span>
        </a>
      </nav>
    </>
  );
}
