import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSatuanDetailRequest } from "../../api/SatuanRequest";

const SatuanDetailContext = createContext();

export const SatuanDetailContextProvider = ({ children }) => {
    const location = useLocation();
    const [satuan, setSatuan] = useState({});
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

    const getDetailSatuan = async (id) => {
        await getSatuanDetailRequest({ id: id }).then((res) => {
            setSatuan(res);
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
        getDetailSatuan(location.state?.satuan_id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SatuanDetailContext.Provider value={{ tab, setTabSwitch, satuan, getDetailSatuan }}>
            {children}
        </SatuanDetailContext.Provider>
    );
}

export const UseSatuanDetailContext = () => {
    return useContext(SatuanDetailContext);
}