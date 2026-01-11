import { Outlet } from "react-router-dom";
import AccountSidebar from "./AccountSidebar";
import Container from "../../components/common/Container";

const Account = () => {
  return (
    <main className="py-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          <AccountSidebar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Account;