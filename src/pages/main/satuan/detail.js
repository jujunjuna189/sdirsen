import { useNavigate } from "react-router-dom";
import { AudioPlayer, Button, Card, Content } from "../../../components";
import Navbar from "../../../components/molecules/nav/Navbar";
import { UseSatuanDetailContext } from "../../../context/satuan/SatuanDetailContent";

const DetailSatuanPage = () => {
    const navigation = useNavigate();
    const { tab, setTabSwitch, satuan } = UseSatuanDetailContext();

    const renderContent = () => {
        // Search tab active
        const tabData = tab.find((x) => x.active === true);
        let content = <span>Tidak ada data</span>;
        switch (tabData.code) {
            case 1:
                content = renderSejarah();
                break;
            case 2:
                content = renderHymne();
                break;
            case 3:
                content = renderMars();
                break;
            default:
                content = <span>Tidak ada data</span>;
                break;
        }

        return content;
    }

    const renderSejarah = () => {
        return <div className="mt-3 text-sm" style={{ display: 'flex' }} dangerouslySetInnerHTML={{ __html: satuan.sejarah }} />;
    }

    const renderHymne = () => {
        return (
            <div>
                <div className="mb-2">
                    <AudioPlayer key={0} source={satuan?.hymne_lagu ?? ''} />
                </div>
                <hr className="my-2" />
                <div className="font-semibold">Lirik Himne</div>
                <div className="mt-3" dangerouslySetInnerHTML={{ __html: satuan.hymne }} />
            </div>
        );
    }

    const renderMars = () => {
        return (
            <>
                <div>
                    <div className="mb-2">
                        <AudioPlayer key={1} source={satuan?.mars_lagu ?? ''} />
                    </div>
                    <hr className="my-2" />
                    <div className="font-semibold">Lirik Mars</div>
                    <div className="mt-3" dangerouslySetInnerHTML={{ __html: satuan.mars }} />
                </div>
            </>
        );
    }

    return (
        <Content>
            <Navbar />
            <div className="p-3 md:p-5">
                <div className="flex">
                    <Button className="border" onClick={() => navigation(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M5 12l4 4"></path>
                            <path d="M5 12l4 -4"></path>
                        </svg>
                        <span className="text-sm">Kembali</span>
                    </Button>
                </div>
                <div className="mt-10 flex items-center gap-4">
                    {satuan.logo != null && (
                        <img src={satuan.logo} alt="ImageLogo" className="h-20 w-20" />
                    )}
                    <div>
                        <div className="flex flex-col leading-3">
                            <span className="font-semibold text-lg">{satuan.nama}</span>
                            <small>{satuan.alamat}</small>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="p-5">
                <div className="flex gap-2 overflow-x-auto scrollbar-hidden">
                    {tab.map((item, index) => {
                        return (
                            <Button key={index} className={`border ${item.active === true ? 'bg-red-800 text-white' : ''}`} onClick={() => setTabSwitch(index)}>
                                <span className="text-sm">{item.title}</span>
                            </Button>
                        );
                    })}
                </div>
                <div className="mt-10">
                    <Card styles="shadow-none">
                        {renderContent()}
                    </Card>
                </div>
            </div>
        </Content>
    );
}

export default DetailSatuanPage;