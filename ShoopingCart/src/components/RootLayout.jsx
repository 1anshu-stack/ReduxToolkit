import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
import Store from "../store/store.js";

const RootLayout = () => {
    return (
        <>
            <Provider store={Store}>
                <NavBarPanel />
                <main>
                    <Outlet />
                </main>
            </Provider>
                {/* <NavBarPanel />
                <main>
                    <Outlet />
                </main> */}
        </>
    );
};

export default RootLayout;