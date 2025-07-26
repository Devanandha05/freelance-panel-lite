import { FaDollarSign, FaFileInvoice, FaUserFriends } from "react-icons/fa";

export const summaryData = [
  {
    title: "Total Earnings",
    value: "$12,450",
    icon: <FaDollarSign />,
    bg: "bg-warning",
  },
  {
    title: "Pending Invoices",
    value: "3",
    icon: <FaFileInvoice />,
    bg: "bg-cardpink",
  },
  {
    title: "Active Clients",
    value: "7",
    icon: <FaUserFriends />,
    bg: "bg-cardblue",
  },
];
