import React, { useState } from "react";

const invoices = [
  { id: 1, client: "Acme Corp", amount: "$1,200", status: "Paid", date: "2025-07-01" },
  { id: 2, client: "Beta Ltd", amount: "$800", status: "Pending", date: "2025-07-05" },
  { id: 3, client: "Gamma Inc", amount: "$1,500", status: "Overdue", date: "2025-06-28" },
  { id: 4, client: "Delta LLC", amount: "$600", status: "Paid", date: "2025-07-10" },
  { id: 5, client: "Omega Pvt", amount: "$950", status: "Pending", date: "2025-07-12" },
];

const Invoices = () => {
  const [query, setQuery] = useState("");

  const filteredInvoices = invoices.filter(inv =>
    inv.client.toLowerCase().includes(query.toLowerCase())
  );

  const summary = {
    total: invoices.length,
    paid: invoices.filter(i => i.status === "Paid").length,
    pending: invoices.filter(i => i.status === "Pending").length,
    overdue: invoices.filter(i => i.status === "Overdue").length,
  };

  return (
    <div className="space-y-8 section bg-grad dark:bg-dark text-black dark:text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-primary dark:text-white">Invoices</h2>
          <p className="text-muted mt-1 dark:text-muted">Manage and track all your billing</p>
        </div>
        <button className="bg-accent dark:bg-cardblueD dark:hover:bg-[#49356f] text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
          + New Invoice
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[#444] dark:text-[#f8f8f8]">
        <div className="bg-card dark:bg-[#B7705C] p-5 rounded-xl shadow-lg text-center">
          <p className="text-base">Total</p>
          <h3 className="text-xl font-bold">{summary.total}</h3>
        </div>
        <div className="bg-cardblue dark:bg-[#44335d] p-5 rounded-xl shadow-lg text-center">
          <p className=" text-base">Paid</p>
          <h3 className="text-xl font-bold">{summary.paid}</h3>
        </div>
        <div className="bg-warning dark:bg-[#9F8A53] p-5 rounded-xl shadow-lg text-center">
          <p className="text-base">Pending</p>
          <h3 className="text-xl font-bold">{summary.pending}</h3>
        </div>
        <div className="bg-cardpink dark:bg-[#A66458] p-5 rounded-xl shadow-lg text-center">
          <p className=" text-base">Overdue</p>
          <h3 className="text-xl font-bold">{summary.overdue}</h3>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by client..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md border border-muted dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-accent dark:focus:ring-primaryD"
        />
      </div>

      {/* Invoice Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-accent dark:bg-[#3f2b8b] text-white">
            <tr>
              <th className="p-4">Client</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-b dark:border-gray-700 odd:bg-white even:bg-warning dark:odd:bg-darkcard dark:even:bg-gray-800"
                >
                  <td className="p-4 font-medium text-primary dark:text-white">{inv.client}</td>
                  <td className="p-4">{inv.amount}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium
                        ${
                          inv.status === "Paid"
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            : inv.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300"
                            : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                        }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="p-4">{inv.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4" colSpan={4}>
                  No invoices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
