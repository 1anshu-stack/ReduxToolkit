import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
// import store from "../store/store.js";

const RootLayout = () => {
    return (
        <>
            {/* <Provider store={store}>
                <NavBarPanel />
                <main>
                    <Outlet />
                </main>
            </Provider> */}
                <NavBarPanel />
                <main>
                    <Outlet />
                </main>
        </>
    );
};

export default RootLayout;