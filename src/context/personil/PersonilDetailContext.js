import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPersonilDetailRequest } from "../../api/PersonilRequest";

const PersonilDetailContext = createContext();

export const PersonilDetailContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    const [personil, setPerosnil] = useState({});

    const getDetailPersonil = async (id) => {
        await getPersonilDetailRequest({ id: id }).then((res) => {
            setPerosnil(res ?? {});
        });
    }

    useEffect(() => {
        getDetailPersonil(location.state?.personilId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PersonilDetailContext.Provider value={{ navigation, personil, getDetailPersonil }}>
            {children}
        </PersonilDetailContext.Provider>
    );
}

export const UsePersonilDetailContext = () => {
    return useContext(PersonilDetailContext);
}