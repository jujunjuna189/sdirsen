import { Card, Content, InputSearch } from "../../components";
import { InputRadio } from "../../components/atoms";
import Navbar from "../../components/molecules/nav/Navbar";
import { UseMainContext } from "../../context/main/MainContext";

const MainPage = () => {
    const { batalyon, kategori, material, personil, filter, onSearch, navigation, onFilter } = UseMainContext();

    const renderList = () => {
        let content = <></>;
        switch (filter.kategori) {
            case 'Personil':
                content = renderPersonil();
                break;
            default:
                content = renderMaterial();
                break;
        }

        return content;
    }

    const renderMaterial = () => {
        return (
            <>
                {material?.data?.map((item, index) => {
                    return (
                        <Card styles="mb-3 leading-4" key={index}>
                            <div className="flex justify-between">
                                <div>
                                    <span className="font-medium">{item.title}</span>
                                    <div className="text-slate-400">
                                        <small className="font-medium">Kategori: </small>
                                        <small>{item.category}</small>
                                    </div>
                                    <div className="mt-2">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <div>
                                    {renderIcon(item)}
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </>
        );
    }

    const renderPersonil = () => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {personil?.data?.map((item, index) => {
                    return (
                        <Card styles="mb-3 leading-4 cursor-pointer" key={index} onClick={() => navigation('/detail-personil', { state: { personilId: item.id } })}>
                            <div className="flex justify-between">
                                <div>
                                    <span className="font-medium">{item.name}</span>
                                    <div className="text-slate-400">
                                        <small className="font-medium">NRP: </small>
                                        <small>{item.nrp}</small>
                                    </div>
                                    <div className="mt-2">
                                        <p>{item.battalion_name}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        );
    }

    const renderIcon = (item) => {
        return (
            <span className="cursor-pointer" onClick={() => window.open(item.file)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-500" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <path d="M12 17v-6"></path>
                    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
                </svg>
            </span>
        );
    }

    return (
        <Content>
            <Navbar />
            <div className="py-16 text-center bg-gradient-to-r from-red-200 via-red-50 to-red-200">
                <span className="text-3xl font-bold">Sdirbinsen Pencarian Informasi</span>
                <div>
                    <span className="font-medium">Jelajahi informasi mengenai data personil, belajar di E-Learning dan mencari material</span>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="w-[80%] lg:w-[40%]">
                        <InputSearch placeholder="Cari Informasi..." onChange={(value) => onSearch(value)} />
                    </div>
                </div>
            </div>
            <div className="flex flex-grow justify-center">
                <div className="p-5 w-[100%] xl:w-[80%]">
                    <div>
                        <div className="py-3">
                            <span className="text-2xl font-semibold">Batalyon</span>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap gap-3 mb-10">
                            {batalyon?.data?.map((item, index) => {
                                return (
                                    <Card key={index} styles="flex-grow cursor-pointer" onClick={() => navigation('/detail-batalyon', { state: { batalyonId: item.id } })}>
                                        <div>
                                            <img src={item.image} alt={item.name} className="h-20" />
                                        </div>
                                        <div className="mt-3">
                                            <span className="font-medium">{item.name}</span>
                                            <p className="mt-2">{item.description}</p>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="pb-3">
                            <span className="text-2xl font-semibold">Data Informasi</span>
                        </div>
                        <div className="flex gap-3">
                            <div className="hidden md:block">
                                <div className="sticky top-5">
                                    <Card>
                                        <span className="font-medium">Kategori</span>
                                        <ul className="mt-2 pr-36">
                                            {kategori.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <div className="flex gap-3">
                                                            <InputRadio name="kategori" value={item.title} onChange={(value) => onFilter('kategori', value)} />
                                                            {item.title}
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Card>
                                </div>
                            </div>
                            <div className="flex-grow">
                                {renderList()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default MainPage;