import { FaDollarSign, FaFileInvoice, FaUserFriends } from "react-icons/fa";

export const summaryData = [
  {
    title: "Total Earnings",
    value: "$12,450",
    icon: <FaDollarSign />,
    bg: "bg-warning dark:bg-[#A38C58]",
  },
  {
    title: "Pending Invoices",
    value: "3",
    icon: <FaFileInvoice />,
    bg: "bg-cardpink dark:bg-[#44335d]",
  },
  {
    title: "Active Clients",
    value: "7",
    icon: <FaUserFriends />,
    bg: "bg-cardblue dark:bg-[#B86655]",
  },
];
