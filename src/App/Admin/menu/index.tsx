import { Outlet } from "react-router-dom";
import { NavBar } from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MenuPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-row">
        <div className="basis-1/5  bg-white relative ">
          <div className="w-auto h-auto bg-slate-100">
            <h1 className="text-2xl text-center text-black pt-3 pb-3">
              Admin Ha Giang Travel
            </h1>
          </div>
          <div className="mt-24 mb-24">
            <NavBar link="/admin/home" name="Trang chủ" />
            <NavBar link="/admin/room" name="Quản lý phòng" />
            <NavBar link="/admin/location" name="Quản lý địa điểm du lịch " />
            <NavBar link="/admin/customer" name="Quản lý Khách đặt phòng " />
            <NavBar link="/admin/statistical" name="Quản lý thống kê " />
          </div>
          <div className="w-full h-14 bg-slate-100 hover:bg-slate-500 hover:text-white absolute bottom-0 left-0">
            <h1 className="text-2xl text-center text-black pt-3">Logout</h1>
          </div>
        </div>
        <div className="basis-4/5 bg-slate-300">
          <div className="w-full h-14 bg-red-200"></div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
