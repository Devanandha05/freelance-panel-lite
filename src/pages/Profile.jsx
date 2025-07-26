import React from "react";
import { Mail, Phone, MapPin, Edit3 } from "lucide-react";

const Profile = () => {
  return (
    <div className="section space-y-8">
      <h2 className="text-2xl font-semibold text-primary dark:text-white">Your Profile</h2>

      {/* Profile Card */}
      <div className="bg-warning dark:bg-darkcard shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#2f243a]">
          <img
          src="https://api.dicebear.com/7.x/lorelei/svg?seed=freelancer"
          alt="User Avatar"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold dark:text-white text-[#2f243a]">John Doe</h3>
            <button className="flex items-center px-4 py-2 text-sm font-medium bg-accent hover:bg-[#c37964] dark:bg-cardblueD dark:hover:bg-[#473272] text-white rounded-md shadow transition">
              <Edit3 className="w-4 h-4 mr-2" /> Edit Profile
            </button>
          </div>

          <p className="text-muted dark:text-white">Freelance Web Developer</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm text-[#444054] dark:text-white">
              <Mail className="w-4 h-4" /> johndoe@example.com
            </div>
            <div className="flex items-center gap-2 text-sm text-[#444054] dark:text-white">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </div>
            <div className="flex items-center gap-2 text-sm text-[#444054] dark:text-white">
              <MapPin className="w-4 h-4" /> Chennai, India
            </div>
            <div className="text-sm text-[#444054] dark:text-white">
              <strong>Member since:</strong> Jan 2024
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-secondary dark:bg-darkcard p-6 rounded-2xl shadow space-y-4">
        <h4 className="text-lg font-semibold text-primary dark:text-white">About</h4>
        <p className="text-sm text-[#333] dark:text-white">
          Hi, I'm JohnDoe — a passionate freelance developer who loves creating beautiful and
          performant web experiences. I specialize in building React dashboards, landing pages, and
          interactive UIs. Let’s work together!
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-warning dark:bg-darkcard p-6 rounded-2xl shadow space-y-4">
        <h4 className="text-lg font-semibold dark:text-white text-primary">Skills</h4>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "React",
            "Tailwind CSS",
            "Flask",
            "JavaScript",
            "Python",
            "MongoDB",
            "C++",
            "MySQL",
            "Responsive Design",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-[#FFF4D6] dark:bg-cardblueD text-[#2f243a] dark:text-[#f8f8f8] font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
