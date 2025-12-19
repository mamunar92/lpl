"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, Globe, Facebook } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.error("Form submit failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Reach out to Lawyer's Premier League BD
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:lawyerspremierleaguelpl@gmail.com"
                      className="text-primary hover:underline"
                    >
                      lawyerspremierleaguelpl@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-secondary-foreground">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/880130411555"
                      className="text-secondary hover:underline"
                    >
                      +880 1304115555
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                      <Globe className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Website
                    </h3>
                    <div className="space-y-1">
                      <a
                        href="http://lawyerspremierleaguebd.com"
                        className="block text-primary hover:underline"
                      >
                        lawyerspremierleaguebd.com
                      </a>
                      <a
                        href="http://lawyerspremierleaguebd.org"
                        className="block text-primary hover:underline"
                      >
                        lawyerspremierleaguebd.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                      <Facebook className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Facebook
                    </h3>
                    <a
                      href="https://www.facebook.com/lawyerspremierleaguebd"
                      className="text-primary hover:underline"
                    >
                      Lawyer's Premier League BD
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 bg-primary/5 border border-primary/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Business Hours
                </h3>
                <p className="text-foreground/70">
                  Available for inquiries during standard business hours. For
                  urgent matters, please reach out via WhatsApp.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Send us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Organization / Bar Association
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your organization"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors
                    ${
                      loading
                        ? "bg-primary/70 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90"
                    } text-primary-foreground`}
                >
                  {loading && (
                    <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "How can I register my team for the tournament?",
                answer:
                  "Please contact us via email or WhatsApp with your team details, including team name, member list, and organization. Our coordinators will guide you through the registration process.",
              },
              {
                question: "What are the eligibility criteria to participate?",
                answer:
                  "LPL is open to all District Bar Associations, private and public law firms, and law students from universities. Participants must be members of the legal community or pursuing legal education.",
              },
              {
                question: "When are the tournaments held?",
                answer:
                  "Tournament schedules are announced regularly. Check our website and Facebook page for the latest updates on upcoming T20 and T10 tournaments.",
              },
              {
                question: "How can I become a sponsor or partner?",
                answer:
                  "We welcome partnerships and sponsorships from organizations interested in supporting the legal community's wellness initiatives. Please reach out through our contact channels.",
              },
              {
                question: "Is there membership or participation fee?",
                answer:
                  "Details regarding fees and memberships vary by tournament and participation level. Please contact us directly for specific information about your interest.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  {item.question}
                </h3>
                <p className="text-foreground/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Whether you have questions, want to join, or seek partnership
            opportunities, we're here to help. Reach out today!
          </p>
          <a
            href="mailto:lawyerspremierleaguelpl@gmail.com"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Email Us Now
          </a>
        </div>
      </section>
    </main>
  );
}
