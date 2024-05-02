import { Link, Outlet } from "react-router-dom";

export const NavBar = (props: { link: string; name: string }) => {
  return (
    <div className="w-auto h-auto bg-slate-100 mb-5">
      <Link to={props.link}>
        <h1 className="text-2xl ml-4 text-black pt-1 pb-1 hover:ml-8 hover:text-blue-500 ">
          {props.name}
        </h1>
      </Link>
    </div>
  );
};
