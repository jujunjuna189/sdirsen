import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getBatalyonRequest } from "../../api/BatalyonRequest";
import { getMaterialRequest } from "../../api/MaterialRequest";
import { getPersonilRequest } from "../../api/PersonilRequest";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [filter, setFilter] = useState({});
    const [batalyon, setBatalyon] = useState({});
    const [material, setMaterial] = useState({});
    const [personil, setPersonil] = useState({});

    const kategori = [
        {
            title: 'Personil',
        },
        {
            title: 'Material',
        }
    ];

    const fetchData = ({ search }) => {
        getBatalyon();
        switch (filter.kategori) {
            case 'Personil':
                getPersonil(search);
                break;
            default:
                getMaterial(search);
                break;
        }
    }

    const getBatalyon = async () => {
        await getBatalyonRequest().then((res) => {
            setBatalyon(res);
        });
    }

    const getMaterial = async (search) => {
        await getMaterialRequest({
            search: search ?? '',
        }).then((res) => {
            setMaterial(res);
        });
    }

    const getPersonil = async (search) => {
        await getPersonilRequest({
            search: search ?? '',
        }).then((res) => {
            setPersonil(res);
        });
    }

    const onSearch = (value) => {
        fetchData({ search: value });
    }

    const onFilter = (field, value) => {
        setFilter({ [field]: value });
    }

    useEffect(() => {
        fetchData({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.kategori]);

    return (
        <MainContext.Provider value={{ batalyon, kategori, material, personil, filter, fetchData, onSearch, navigation, onFilter }}>
            {children}
        </MainContext.Provider>
    );
}

export const UseMainContext = () => {
    return useContext(MainContext);
}