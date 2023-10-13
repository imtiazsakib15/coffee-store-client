import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            root
            <Outlet />
        </div>
    );
};

export default Root;