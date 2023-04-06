import React from "react";
import Adminlayout from "../../../layout/AdminDashboard";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { TfiMoney } from "react-icons/tfi";
import Admincard from "../../../layout/AdminDashboard/component/card/card";

const DashboardAdmin = () => {
  return (
    <Adminlayout>
      <div className="grid grid-cols-2 h-10 gap-4">
        <Admincard icon={<AiOutlineLineChart />} data="250k" title="Sales" />
        <Admincard icon={<FaUserAlt />} data="2500k" title="customer" />
        <Admincard className="stroke-slate-300" icon={<FaProductHunt />} data="3405k" title="Product" />
        <Admincard icon={<TfiMoney />} data="974k" title="Revenue" />
      </div>
    </Adminlayout>
  );
};

export default DashboardAdmin;
