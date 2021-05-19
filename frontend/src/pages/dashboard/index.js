import SideBar from "../../layouts/siderbar";
import AccountRoutes from "../../routes/account";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <AccountRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
