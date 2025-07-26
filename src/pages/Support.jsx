import React from "react";
import { Mail, Phone, LifeBuoy } from "lucide-react";

const Support = () => {
  return (
    <div className="section space-y-10">
      <h2 className="text-2xl font-semibold text-primary dark:text-white">Support Center</h2>

      {/* Quick Help */}
      <div className="bg-white dark:bg-[#1c1b25] rounded-2xl shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold text-primary dark:text-white">Need Help?</h3>
        <p className="text-muted text-sm dark:text-gray-400">
          If you're facing any issues or have questions, we're here to assist you. Use the options below to get in touch with our support team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF4D6] dark:bg-[#A38C58]">
            <Mail className="w-6 h-6 text-[#1f1629] dark:text-white" />
            <div>
              <h4 className="font-semibold dark:text-white">Email Support</h4>
              <p className="text-sm text-muted dark:text-gray-300">Reach us at support@freelancepanel.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#dcc9f0] dark:bg-[#44335d]">
            <Phone className="w-6 h-6 text-[#1f1629] dark:text-[#f3eaff]" />
            <div>
              <h4 className="font-semibold dark:text-white">Call Us</h4>
              <p className="text-sm text-muted dark:text-gray-300">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#ffd0c1] dark:bg-[#B86655]">
            <LifeBuoy className="w-6 h-6 text-[#1f1629] dark:text-[#ffe5dd]" />
            <div>
              <h4 className="font-semibold dark:text-white">Live Chat</h4>
              <p className="text-sm text-muted dark:text-gray-300">Chat with us between 10 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-[#1c1b25] rounded-2xl shadow p-6 space-y-6">
        <h3 className="text-lg font-semibold text-primary dark:text-white">Send Us a Message</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white rounded-md"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#db8a74] hover:bg-[#c37964] dark:bg-cardblueD dark:hover:bg-[#49356f] text-white px-6 py-2 rounded-md"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
