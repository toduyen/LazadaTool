/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import LazadaImportProducts from "views/LazadaImportProducts";
import LazadaListProducts from "views/LazadaListProducts";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import WriteCard from "views/WriteCard";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard SP",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "Icons SP",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "Map SP",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "Notifications SP",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "User Profile SP",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "Table List SP",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "Typography SP",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "RTL Support",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl",
  },
  {
    path: "/write-card",
    name: "Write Card",
    rtlName: "Write Card SP",
    icon: "tim-icons icon-molecule-40",
    component: WriteCard,
    layout: "/admin",
  },
  {
    path: "/lazada-danh-sach-hang",
    name: "Lazada List Products",
    rtlName: "Lazada-danh-sach-Hang",
    icon: "tim-icons icon-app",
    component: LazadaListProducts,
    layout: "/admin",
  },
  {
    path: "/lazada-nhap-hang",
    name: "Lazada Import",
    rtlName: "Lazada-nhap-hang",
    icon: "tim-icons icon-bag-16",
    component: LazadaImportProducts,
    layout: "/admin",
  },
];
export default routes;
