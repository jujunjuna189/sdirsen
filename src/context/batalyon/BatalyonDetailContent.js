import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBatalyonDetailRequest } from "../../api/BatalyonRequest";

const BatalyonDetailContext = createContext();

export const BatalyonDetailContextProvider = ({ children }) => {
    const location = useLocation();
    const [batalyon, setBatalyon] = useState({});
    const [tab, setTab] = useState([
        {
            title: 'Sejarah',
            code: 1,
            active: true,
        },
        {
            title: 'Hymne',
            code: 2,
            active: false,
        },
        {
            title: 'Mars',
            code: 3,
            active: false,
        }
    ]);

    const getDetailBatalyon = async (id) => {
        await getBatalyonDetailRequest({ id: id }).then((res) => {
            setBatalyon(res);
        });
    }

    const setTabSwitch = (index) => {
        tab.forEach((item, indexTab) => {
            tab[indexTab].active = false;
        });

        tab[index].active = true;

        setTab([...tab]);
    }

    useEffect(() => {
        getDetailBatalyon(location.state?.batalyonId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BatalyonDetailContext.Provider value={{ tab, setTabSwitch, batalyon, getDetailBatalyon }}>
            {children}
        </BatalyonDetailContext.Provider>
    );
}

export const UseBatalyonDetailContext = () => {
    return useContext(BatalyonDetailContext);
}