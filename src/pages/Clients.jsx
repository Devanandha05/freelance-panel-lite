import React from "react";
import {
  MailIcon,
  FolderIcon,
  MessageSquareIcon,
  PlusIcon,
  BadgeCheckIcon,
} from "lucide-react";

const clients = [
  { id: 1, name: "Acme Corp", email: "contact@acme.com", projects: 3, status: "Active", industry: "E-commerce" },
  { id: 2, name: "Beta Ltd", email: "beta@email.com", projects: 2, status: "Onboarding", industry: "FinTech" },
  { id: 3, name: "Gamma Inc", email: "hello@gamma.io", projects: 5, status: "Completed", industry: "HealthTech" },
  { id: 4, name: "Quetra Inc", email: "contact@que.com", projects: 3, status: "Active", industry: "E-commerce" },
  { id: 5, name: "Darc Corp", email: "contact@dark.com", projects: 4, status: "Active", industry: "E-commerce" },
];

const Clients = () => {
  return (
    <div className="space-y-8 section">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary dark:text-white">Clients</h2>
          <p className="text-muted mt-1 dark:text-mutedlight">List of all clients you’ve worked with</p>
        </div>
        <button className="flex items-center gap-2 bg-accent dark:bg-cardblueD text-white px-4 py-2 rounded-md hover:bg-accent/90 transition">
          <PlusIcon className="w-4 h-4" /> New Client
        </button>
      </div>

      {/* Client Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white dark:bg-darkcard border border-muted/20 dark:border-muted/40 rounded-2xl p-6 shadow space-y-4 flex flex-col justify-between"
          >
            {/* Avatar + Info */}
            <div className="flex items-center space-x-4">
              <div className="bg-primary text-white font-semibold rounded-full h-12 w-12 flex items-center justify-center text-lg">
                {client.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-white">{client.name}</h3>
                <div className="flex items-center text-muted text-sm dark:text-mutedlight space-x-2">
                  <MailIcon className="h-4 w-4" />
                  <span>{client.email}</span>
                </div>
              </div>
            </div>

            {/* Project & Industry Info */}
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <div>
                <FolderIcon className="inline-block h-4 w-4 mr-1 text-secondary" />
                {client.projects} project{client.projects > 1 && "s"} in progress
              </div>
              <div>
                <BadgeCheckIcon className="inline-block h-4 w-4 mr-1 text-accent" />
                Industry: {client.industry}
              </div>
              <div
                className={`text-xs mt-1 px-2 py-1 rounded-full inline-block ${
                  client.status === "Active"
                    ? "bg-green-100 text-green-700 dark:bg-green-700/20 dark:text-green-300"
                    : client.status === "Onboarding"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700/20 dark:text-yellow-300"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-600/40 dark:text-gray-300"
                }`}
              >
                Status: {client.status}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-muted/20 dark:border-muted/40 flex justify-between text-sm text-primary dark:text-white font-medium">
              <button className="p-2 rounded-md hover:bg-cardpink dark:hover:bg-muted/20">View</button>
              <button className="p-2 rounded-md hover:bg-cardpink dark:hover:bg-muted/20">Message</button>
              <button className="p-2 rounded-md hover:bg-cardpink dark:hover:bg-muted/20">Projects</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
