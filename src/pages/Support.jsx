import React from "react";
import { Mail, Phone, LifeBuoy } from "lucide-react";

const Support = () => {
  return (
    <div className="section space-y-10">
      <h2 className="text-2xl font-semibold text-primary">Support Center</h2>

      {/* Quick Help */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold text-primary">Need Help?</h3>
        <p className="text-muted text-sm">
          If you're facing any issues or have questions, we're here to assist you. Use the options below to get in touch with our support team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF4D6]">
            <Mail className="w-6 h-6 text-[#1f1629]" />
            <div>
              <h4 className="font-semibold">Email Support</h4>
              <p className="text-sm text-muted">Reach us at support@freelancepanel.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#dcc9f0]">
            <Phone className="w-6 h-6 text-[#1f1629]" />
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <p className="text-sm text-muted">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#ffd0c1]">
            <LifeBuoy className="w-6 h-6 text-[#1f1629]" />
            <div>
              <h4 className="font-semibold">Live Chat</h4>
              <p className="text-sm text-muted">Chat with us between 10 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-6">
        <h3 className="text-lg font-semibold text-primary">Send Us a Message</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 bg-white text-black rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 bg-white text-black rounded-md"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border border-gray-300 bg-white text-black rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-2 border border-gray-300 bg-white text-black rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#db8a74] hover:bg-[#c37964] text-white px-6 py-2 rounded-md"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
