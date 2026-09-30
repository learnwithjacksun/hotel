import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/components/layout";

const MainLayout = () => {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
