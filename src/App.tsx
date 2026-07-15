/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import SuccessStories from "./components/SuccessStories";
import LaunchOffers from "./components/LaunchOffers";
import AppointmentForm from "./components/AppointmentForm";
import AboutClinic from "./components/AboutClinic";
import MapAndSchedule from "./components/MapAndSchedule";
import FaqSection from "./components/FaqSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-brand-purple-600 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <Hero />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Success Stories (Before & After, Savings Calculator) */}
      <SuccessStories />

      {/* Launch Offers / Packages */}
      <LaunchOffers />

      {/* Onboarding Booking Form */}
      <AppointmentForm />

      {/* About Dr. Andrés and the Clinic */}
      <AboutClinic />

      {/* Location / Google Maps and Schedules */}
      <MapAndSchedule />

      {/* Frequently Asked Questions */}
      <FaqSection />
    </div>
  );
}
