import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../redux/Store";
 
const RootLayout = () => {
    return (
        <>
            <Provider store={store}>
                <NavBarPanel />
                <main>
                    <Outlet />
                </main>
            </Provider>
        </>
    );
};

export default RootLayout;