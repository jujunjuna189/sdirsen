import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const [controller, setController] = useState({});

    const onFieldChanges = (field, value) => {
        setController({ ...controller, [field]: value });
    }

    return (
        <LoginContext.Provider value={{ controller, onFieldChanges }}>
            {children}
        </LoginContext.Provider>
    );
}

export const UseLoginContext = () => {
    return useContext(LoginContext);
}