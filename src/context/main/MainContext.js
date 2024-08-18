import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getSatuanRequest } from "../../api/SatuanRequest";
import { getMaterialRequest } from "../../api/MaterialRequest";
import { getPersonilRequest } from "../../api/PersonilRequest";
import { getBinsatLaplakgiatRequest, getBinsatRenlakgiatRequest } from "../../api/BinsatRequest";
import { getLapsatIndukRequest, getLapsatLampiranRequest } from "../../api/LapsatRequest";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [kategoriAktif, setKategoriAktif] = useState({});
    const [satuan, setSatuan] = useState({});
    const [material, setMaterial] = useState({});
    const [personil, setPersonil] = useState({});
    const [binsatRenlakgiat, setBinsatRenlakgiat] = useState({});
    const [binsatLaplakgiat, setBinsatLaplakgiat] = useState({});
    const [lapsatInduk, setLapsatInduk] = useState({});
    const [lapsatLampiran, setLapsatLampiran] = useState({});

    const [kategori, setKategori] = useState([
        {
            key: 0,
            title: 'Binman',
            subTitle: '',
            isActive: true,
        },
        {
            key: 1,
            title: 'Binmat',
            subTitle: '',
            isActive: false,
        },
        {
            key: 2,
            title: 'Binsat Renlakgiat',
            subTitle: 'Binsiapsat',
            isActive: false,
        },
        {
            key: 3,
            title: 'Binsat Laplakgiat',
            subTitle: 'Binsiapsat',
            isActive: false,
        },
        {
            key: 4,
            title: 'Lapsat Induk',
            subTitle: 'Binsiapsat',
            isActive: false,
        },
        {
            key: 5,
            title: 'Lapsat Lampiran',
            subTitle: 'Binsiapsat',
            isActive: false,
        },
    ]);

    const fetchData = ({ kategoriAktif, search }) => {
        getSatuan();
        switch (kategoriAktif.key) {
            case 0:
                getPersonil(search);
                break;
            case 1:
                getMaterial(search);
                break;
            case 2:
                getBinsatRenlakgiat(search);
                break;
            case 3:
                getBinsatLaplakgiat(search);
                break;
            case 4:
                getLapsatInduk(search);
                break;
            case 5:
                getLapsatLampiran(search);
                break;
            default:
                getMaterial(search);
                break;
        }
    }

    const getSatuan = async () => {
        await getSatuanRequest().then((res) => {
            setSatuan(res);
        });
    }

    const getMaterial = async (search = '') => {
        await getMaterialRequest({ filter: `search=${search}` }).then((res) => {
            setMaterial(res);
        });
    }

    const getPersonil = async (search = '') => {
        await getPersonilRequest({ filter: `search=${search}` }).then((res) => {
            setPersonil(res);
        });
    }

    const getBinsatRenlakgiat = async (search = '') => {
        await getBinsatRenlakgiatRequest({ filter: `search=${search}` }).then((res) => {
            setBinsatRenlakgiat(res);
        });
    }

    const getBinsatLaplakgiat = async (search = '') => {
        await getBinsatLaplakgiatRequest({ filter: `search=${search}` }).then((res) => {
            setBinsatLaplakgiat(res);
        });
    }

    const getLapsatInduk = async (search = '') => {
        await getLapsatIndukRequest({ filter: `search=${search}` }).then((res) => {
            setLapsatInduk(res);
        });
    }

    const getLapsatLampiran = async (search = '') => {
        await getLapsatLampiranRequest({ filter: `search=${search}` }).then((res) => {
            setLapsatLampiran(res);
        });
    }

    const onSearch = (value) => {
        fetchData({ kategoriAktif: kategoriAktif, search: value });
    }

    const onChangeKategori = (index) => {
        kategori.forEach((item, index) => {
            kategori[index].isActive = false;
        });

        kategori[index].isActive = true;
        setKategori([...kategori]);
        setKategoriAktif(kategori[index]);
        fetchData({ kategoriAktif: kategori[index] });
    }

    useEffect(() => {
        onChangeKategori(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MainContext.Provider value={{ satuan, kategori, material, personil, binsatRenlakgiat, binsatLaplakgiat, lapsatInduk, lapsatLampiran, kategoriAktif, fetchData, onSearch, navigation, onChangeKategori }}>
            {children}
        </MainContext.Provider>
    );
}

export const UseMainContext = () => {
    return useContext(MainContext);
}