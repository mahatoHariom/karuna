/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_fsdk8pr",
        "template_v7elllt",
        formRef.current,
        "Wf0vmRAxWWI7KvO-C"
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative bg-blue-600 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-blue-900/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 slide-in">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 slide-in stagger-1">
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Section with Glassmorphism */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-3d bg-white p-8 rounded-xl shadow-lg slide-in">
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information with 3D Cards */}
            <div className="space-y-6">
              <div className="card-3d bg-white p-6 rounded-xl shadow-lg slide-in stagger-1">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 animate-float" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">Gongabu, Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="card-3d bg-white p-6 rounded-xl shadow-lg slide-in stagger-2">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 animate-float" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">9803882724</p>
                    <p className="text-gray-600">9761625523</p>
                  </div>
                </div>
              </div>

              <div className="card-3d bg-white p-6 rounded-xl shadow-lg slide-in stagger-3">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 animate-float" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@karunait.com</p>
                    <p className="text-gray-600">karunait.web@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card-3d bg-white p-6 rounded-xl shadow-lg slide-in stagger-4">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Sunday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
