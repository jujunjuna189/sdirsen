import { useNavigate } from "react-router-dom";
import { ButtonRounded, Card, Content } from "../../../components";
import Navbar from "../../../components/molecules/nav/Navbar";
import { UseBatalyonDetailContext } from "../../../context/batalyon/BatalyonDetailContent";

const DetailBatalyonPage = () => {
    const navigation = useNavigate();
    const { tab, setTabSwitch, batalyon } = UseBatalyonDetailContext();

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
        return <div>{batalyon?.detail_battalion?.history}</div>;
    }

    const renderHymne = () => {
        return <div>{batalyon?.detail_battalion?.hymne}</div>;
    }

    const renderMars = () => {
        return <div>{batalyon?.detail_battalion?.mars}</div>;
    }

    return (
        <Content>
            <Navbar />
            <div className="p-5">
                <div className="flex">
                    <ButtonRounded title={<div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M5 12l4 4"></path>
                            <path d="M5 12l4 -4"></path>
                        </svg>
                        <span>Kembali</span>
                    </div>} styles="border" titleStyle="text-black" onClick={() => navigation(-1)} />
                </div>
                <div className="mt-5 flex justify-center">
                    <div>
                        <img src="https://drive.google.com/uc?export=view&id=1bFyiJdRR5vTBvJ8UH1irqf2KUJH8Itca" alt="ImageLogo" className="h-36" />
                        <div className="mt-3 text-center">
                            <span className="font-medium text-xl">PUSSENARMED</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="p-5">
                <div className="flex gap-4">
                    {tab.map((item, index) => {
                        return (
                            <ButtonRounded key={index} styles={`border border-slate-300 ${item.active && 'bg-slate-800 text-white'}`} title={item.title} onClick={() => setTabSwitch(index)} />
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

export default DetailBatalyonPage;