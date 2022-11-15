import "antd/dist/antd.css";
import "./Dashboard.css";
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";




function Dashboard() {
    return (
        <div>
            <Header />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Sidemenu />
                <Content />
            </div>
        </div>
    );
}

function Header() {
    return <div className="header">Admin Panel</div>;
}

function Sidemenu() {
    const navigate = useNavigate();

    return (
        <div>
            <Menu
                onClick={({ key }) => {
                    if (key === "signout") {
                    } else {
                        navigate(key);
                    }
                }}

                items={[
                    { label: "Home", key: "/", icons: <FaHome /> },
                    { label: "District", key: "/dashboard", icons: <FontAwesomeIcon icon="fa-solid fa-building-circle-arrow-right" /> },
                    { label: "Payroll", key: "/payroll", icons: <FontAwesomeIcon icon="fa-regular fa-money-bill" /> },
                    { label: "Add User", key: "/adduser", icons: <FontAwesomeIcon icon="fa-solid fa-user-plus" /> },
                    { label: "Import", key: "/import", icons: <FontAwesomeIcon icon="fa-solid fa-file-import" /> },
                    { label: "Signout", key: "signout", icons: <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" /> },
                ]}
            ></Menu>;
        </div>
    );
}

function Content() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div>Home</div>}></Route>
                <Route path="/district" element={<div>District</div>}></Route>
                <Route path="/payroll" element={<div>Payroll</div>}></Route>
                <Route path="/adduser" element={<div>Add User</div>}></Route>
                <Route path="/import" element={<div>Import</div>}></Route>
            </Routes>
        </div>
    );
}

export default Dashboard;