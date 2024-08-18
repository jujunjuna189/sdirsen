import { Button, Card, Content } from "../../../components";
import Navbar from "../../../components/molecules/nav/Navbar";
import { UsePersonilDetailContext } from "../../../context/personil/PersonilDetailContext";

const DetailPerosnilPage = () => {
    const { navigation, personil } = UsePersonilDetailContext();

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
                <div className="mt-3 flex justify-center">
                    <Card styles="shadow-none w-[50rem] p-0">
                        <div className="bg-red-800 text-white rounded-t-lg px-3 py-[0.30rem] text-center">
                            <span className="text-base font-semibold">Detail Personel</span>
                        </div>
                        <div className="flex gap-4 px-3 mt-2 py-2">
                            <div className="w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center">
                                <span className="text-lg font-semibold">NA</span>
                            </div>
                            <div className="flex flex-col leading-4 justify-center">
                                <span className="font-semibold text-lg">{personil.nama}</span>
                                <div className="flex flex-col leading-3">
                                    <small>NRP: {personil.nrp}</small>
                                    <small>Satuan: {personil.satuan?.nama}</small>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 py-4">
                            <div>
                                <span className="font-semibold text-base">Biodata</span>
                            </div>
                            <div className="text-sm">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>NRP</td>
                                            <td className="pl-6">: {personil.nrp}</td>
                                        </tr>
                                        <tr>
                                            <td>Nama</td>
                                            <td className="pl-6">: {personil.nama}</td>
                                        </tr>
                                        <tr>
                                            <td>Tempat Lahir</td>
                                            <td className="pl-6">: {personil.tempat_lahir}</td>
                                        </tr>
                                        <tr>
                                            <td>Tanggal Lahir</td>
                                            <td className="pl-6">: {personil.tanggal_lahir}</td>
                                        </tr>
                                        <tr>
                                            <td>Agama</td>
                                            <td className="pl-6">: {personil.agama}</td>
                                        </tr>
                                        <tr>
                                            <td>Suku Bangsa</td>
                                            <td className="pl-6">: {personil.suku_bangsa}</td>
                                        </tr>
                                        <tr>
                                            <td>Gol. Darah</td>
                                            <td className="pl-6">: {personil.golongan_darah}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="pt-5">
                                                <span className="font-semibold text-base">Biodata Personel</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jabatan</td>
                                            <td className="pl-6">: {personil.jabatan}</td>
                                        </tr>
                                        <tr>
                                            <td>Pangkat</td>
                                            <td className="pl-6">: {personil.pangkat}</td>
                                        </tr>
                                        <tr>
                                            <td>Korps</td>
                                            <td className="pl-6">: {personil.korps}</td>
                                        </tr>
                                        <tr>
                                            <td>Sumber PA</td>
                                            <td className="pl-6">: {personil.sumber_pa}</td>
                                        </tr>
                                        <tr>
                                            <td>Satuan</td>
                                            <td className="pl-6">: {personil.satuan?.nama}</td>
                                        </tr>
                                        <tr>
                                            <td>Psi</td>
                                            <td className="pl-6">: {personil.psi}</td>
                                        </tr>
                                        <tr>
                                            <td>Kategori</td>
                                            <td className="pl-6">: {personil.status}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="pt-5">
                                                <span className="font-semibold text-base">Masa Jabatan</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>TMT</td>
                                            <td className="pl-6">: {personil.tmt_1}</td>
                                        </tr>
                                        <tr>
                                            <td>TMT Pangkat</td>
                                            <td className="pl-6">: {personil.tmt_2}</td>
                                        </tr>
                                        <tr>
                                            <td>TMT TNI</td>
                                            <td className="pl-6">: {personil.tmt_tni}</td>
                                        </tr>
                                        <tr>
                                            <td>TMT Jab</td>
                                            <td className="pl-6">: {personil.tmt_jab}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Content>
    );
}

export default DetailPerosnilPage;