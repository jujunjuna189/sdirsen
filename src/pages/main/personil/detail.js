import { useNavigate } from "react-router-dom";
import { ButtonRounded, Card, Content } from "../../../components";
import Navbar from "../../../components/molecules/nav/Navbar";
import { UsePersonilDetailContext } from "../../../context/personil/PersonilDetailContext";

const DetailPerosnilPage = () => {
    const navigation = useNavigate();
    const { personil } = UsePersonilDetailContext();

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
                <div className="mt-3">
                    <Card styles="shadow-none">
                        <span className="text-2xl font-semibold">Tentang Personil</span>
                        <div className="flex justify-between mt-5">
                            <div>
                                <div className="leading-5">
                                    <span className="font-medium">NRP</span>
                                    <br />
                                    <span>{personil.nrp}</span>
                                </div>
                                <div className="mt-2 leading-5">
                                    <span className="font-medium">Nama Lengkap</span>
                                    <br />
                                    <span>{personil.name}</span>
                                </div>
                                <div className="mt-2 leading-5">
                                    <span className="font-medium">Batalyon</span>
                                    <br />
                                    <span>{personil.battalion_name}</span>
                                </div>
                                <div className="mt-2 leading-5">
                                    <span className="font-medium">Username</span>
                                    <br />
                                    <span>{personil.username}</span>
                                </div>
                            </div>
                            <div>
                                <div className="leading-5">
                                    <span className="font-medium">Di Update</span>
                                    <br />
                                    <span>31231233333</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Content>
    );
}

export default DetailPerosnilPage;