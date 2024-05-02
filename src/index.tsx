import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";

import ErrorPage from "./error-page";
import { Home } from "./App/Client/Home";
import { Room } from "./App/Client/Room";
import { LoginPage } from "./App/Admin/login";
import { MenuPage } from "./App/Admin/menu";
import { RoomCreateForm } from "./App/Admin/room/room.create";
import { RoomListRoom } from "./App/Admin/room/room.list";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="room" element={<Room />} />
        </Route>
        <Route path="/admin">
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<MenuPage />}>
            <Route path="" element={<RoomListRoom />} />
            <Route path="create-room" element={<RoomCreateForm />} />
          </Route>
          <Route path="room" element={<MenuPage />}>
            <Route path="" element={<RoomListRoom />} />
            <Route path="create-room" element={<RoomCreateForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
