import { imgBg } from "../../assets";
import { Button, Card, Content, FilesType, InputSearch } from "../../components";
import Navbar from "../../components/molecules/nav/Navbar";
import { UseMainContext } from "../../context/main/MainContext";
import { dateFormatter, ElipsisFormatter } from "../../utils";
import { FilterKategoriModal } from "./component";

const MainPage = () => {
    const { satuan, kategori, kategoriAktif, material, personil, binsatRenlakgiat, binsatLaplakgiat, lapsatInduk, lapsatLampiran, onChangeKategori, onSearch, navigation } = UseMainContext();

    const renderList = () => {
        let content = <></>;
        switch (kategoriAktif.key) {
            case 0:
                content = renderPersonil();
                break;
            case 1:
                content = renderMaterial();
                break;
            case 2:
                content = renderBinsatRenlakgiat();
                break;
            case 3:
                content = renderBinsatLaplakgiat();
                break;
            case 4:
                content = renderLapsatInduk();
                break;
            case 5:
                content = renderLapsatLampiran();
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
                        <Card styles="mb-3 leading-4 cursor-pointer p-3" key={index}>
                            <div className="md:flex md:justify-between">
                                <div>
                                    <span className="font-medium">{item.nama}</span>
                                    <div className="mt-2">
                                        <small className="font-medium">Kategori: </small>
                                        <small>{item.kategori}</small>
                                    </div>
                                    <div className="mt-2 flex flex-col">
                                        <small className="font-medium">Keterangan: </small>
                                        <small>{item.kategori}</small>
                                    </div>
                                </div>
                                <div className="pt-4 md:pt-0">
                                    <Button className="border py-[5px] px-[20px] justify-center" onClick={() => window.open(item.file)}>
                                        <small>Lihat</small>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                    </Button>
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
            <div className="gap-2">
                {personil?.data?.map((item, index) => {
                    return (
                        <Card styles="mb-3 leading-4 cursor-pointer p-3" key={index}>
                            <div className="md:flex md:justify-between">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-slate-200 rounded-full flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-500" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                                    </div>
                                    <div>
                                        <span className="font-medium">{item.nama}</span>
                                        <div className="mt-2">
                                            <small className="font-medium">NRP: </small>
                                            <small>{item.nrp}</small>
                                        </div>
                                        <div>
                                            <small className="font-medium">Satuan: </small>
                                            <small>{item.satuan.nama}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 md:pt-0">
                                    <Button className="border py-[5px] px-[20px] justify-center" onClick={() => navigation('/detail-personil', { state: { personilId: item.id } })}>
                                        <small>Detail</small>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        );
    }

    const renderBinsatRenlakgiat = () => {
        return (
            <div className="gap-2">
                {binsatRenlakgiat?.data?.map((item, index) => {
                    return (
                        <Card styles="mb-2 leading-4 cursor-pointer p-3" key={index} onClick={() => { }}>
                            <div className="md:flex md:justify-between">
                                <div className="flex gap-2">
                                    <FilesType type={item.file.split('.')[item.file.split('.').length - 1]} />
                                    <div className="flex flex-col">
                                        <span className="font-medium">
                                            {ElipsisFormatter(item.nama, 70)}
                                        </span>
                                        <small className="font-medium text-slate-500">Diubah Pada: {dateFormatter(item.updated_at)}</small>
                                    </div>
                                </div>
                                <div className="pt-4 md:pt-0">
                                    <Button className="border py-[5px] px-[20px] justify-center" onClick={() => window.open(item.file)}>
                                        <small>Lihat</small>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        );
    }

    const renderBinsatLaplakgiat = () => {
        return (
            <div className="gap-2">
                {binsatLaplakgiat?.data?.map((item, index) => {
                    return (
                        <Card styles="mb-2 leading-4 cursor-pointer p-3" key={index} onClick={() => { }}>
                            <div className="md:flex md:justify-between">
                                <div className="flex gap-2">
                                    <FilesType type={item.file.split('.')[item.file.split('.').length - 1]} />
                                    <div className="flex flex-col">
                                        <span className="font-medium">
                                            {ElipsisFormatter(item.nama, 70)}
                                        </span>
                                        <small className="font-medium text-slate-500">Diubah Pada: {dateFormatter(item.updated_at)}</small>
                                    </div>
                                </div>
                                <div className="pt-4 md:pt-0">
                                    <Button className="border py-[5px] px-[20px] justify-center" onClick={() => window.open(item.file)}>
                                        <small>Lihat</small>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        );
    }


    const renderLapsatInduk = () => {
        return (
            <div className="gap-2">
                {lapsatInduk?.data?.map((item, index) => {
                    return (
                        <Card styles="mb-2 leading-4 cursor-pointer p-3" key={index} onClick={() => { }}>
                            <div className="md:flex md:justify-between">
                                <div className="flex gap-2">
                                    <FilesType type={item.file.split('.')[item.file.split('.').length - 1]} />
                                    <div className="flex flex-col">
                                        <span className="font-medium">
                                            {ElipsisFormatter(item.nama, 70)}
                                        </span>
                                        <small className="font-medium text-slate-500">Diubah Pada: {dateFormatter(item.updated_at)}</small>
                                    </div>
                                </div>
                                <div className="pt-4 md:pt-0">
                                    <Button className="border py-[5px] px-[20px] justify-center" onClick={() => window.open(item.file)}>
                                        <small>Lihat</small>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        );
    }

    const renderLapsatLampiran = () => {
        return (
            <div className="gap-2">
                {lapsatLampiran?.data?.map((item, index) => {
                    return (
                        <Card styles="mb-2 leading-4 cursor-pointer p-3" key={index} onClick={() => { }}>
                            <div className="md:flex md:justify-between">
                                <div className="flex gap-2">
                                    <FilesType type={item.file.split('.')[item.file.split('.').length - 1]} />
                                    <div className="flex flex-col">
                                        <span className="font-medium">
                                            {ElipsisFormatter(item.nama, 70)}
                                        </span>
                                        <small className="font-medium text-slate-500">Diubah Pada: {dateFormatter(item.updated_at)}</small>
                                    </div>
                                </div>
                                <div className="pt-4 md:pt-0">
                                    <Button className="border py-[5px] px-[20px] justify-center" onClick={() => window.open(item.file)}>
                                        <small>Lihat</small>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        );
    }

    return (
        <Content>
            <Navbar />
            <div className="py-16 text-center bg-gradient-to-r from-red-200 via-red-50 to-red-200 relative">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-red-100 animate-pulse" />
                <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.15] overflow-hidden flex justify-center items-end">
                    <img src={imgBg} alt="BackgroundApp" className="object-cover w-full" />
                </div>
                <div className="relative">
                    <span className="text-3xl font-bold">Sdirsen Pencarian Informasi</span>
                    <div>
                        <span className="font-medium">Jelajahi informasi mengenai data personil, belajar di E-Learning dan mencari material</span>
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="w-[80%] lg:w-[40%]">
                            <InputSearch placeholder="Cari Informasi..." onChange={(value) => onSearch(value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-grow justify-center">
                <div className="p-5 w-[100%] xl:w-[80%]">
                    <div>
                        <div className="py-3">
                            <span className="text-lg font-semibold">Satuan</span>
                        </div>
                        <div className="flex gap-2 overflow-x-auto scrollbar-hidden">
                            {satuan?.data?.map((item, index) => {
                                return (
                                    <Card key={index} styles="cursor-pointer border-none" onClick={() => navigation('/detail-satuan', { state: { satuan_id: item.id } })}>
                                        <div className="flex justify-center">
                                            <div className="h-20 w-20 bg-slate-300 rounded-lg overflow-hidden">
                                                <img src={item.logo} alt={item.nama} className="w-full h-full" />
                                            </div>
                                        </div>
                                        <div className="mt-1 text-center">
                                            <span className="font-medium text-sm">{item.nama}</span>
                                            <p className="mt-2">{item.description}</p>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div>
                        <div className="pb-3 flex justify-between items-center">
                            <span className="text-lg font-semibold">Data Informasi</span>
                            <FilterKategoriModal kategori={kategori} onChange={(value, index) => onChangeKategori(index)} />
                        </div>
                        <div className="flex gap-4">
                            <div className="hidden md:block">
                                <div className="sticky top-5">
                                    <Card styles="w-60 px-4 py-3">
                                        <span className="font-medium">Kategori</span>
                                        <ul className="mt-2 pl-2">
                                            {kategori.map((item, index) => {
                                                return (
                                                    <li key={index} className={`p-3 rounded-md cursor-pointer ${item.isActive === true && 'bg-slate-200'}`} onClick={() => onChangeKategori(index)}>
                                                        <div className="flex gap-3">
                                                            <div className="flex flex-col leading-3">
                                                                <span className="fonr-semibold">{item.title}</span>
                                                                <small className="text-[11px]">{item.subTitle}</small>
                                                            </div>
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