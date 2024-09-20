import { useEffect, useRef, useState } from "react";


const FilterKategoriModal = (props) => {
    const ref = useRef();
    const [isShow, setIsShow] = useState(false);
    const [data, setData] = useState([]);

    const getKondisi = async () => {
        setData(props.kategori);
    };

    const toogleModal = () => {
        getKondisi();
        setIsShow(!isShow);
    };

    const handleClickOutside = (event) => {
        if (!ref?.current?.contains(event.target)) {
            setIsShow(false);
        }
    };

    const onChange = (itemIndex) => {
        const item = data[itemIndex];
        props.onChange && props.onChange(item, itemIndex);
        setIsShow(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="inline-block" ref={ref}>
            <div className="cursor-pointer" onClick={() => toogleModal()}>
                <span className="cursor-pointer md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
                </span>
            </div>
            <div className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10 ${!isShow && "hidden"}`}>
                <div className="absolute h-full w-full bg-black opacity-30 z-10" onClick={() => toogleModal()}></div>
                <div className="p-3 border rounded-lg bg-white w-96 z-10 mx-3">
                    <div className="leading-3">
                        <span className="text-base font-medium">Kategori Filter</span>
                        <br />
                        <small>Klik item jika akan memilih</small>
                    </div>
                    <div className="overflow-y-auto h-[25vh] flex flex-col gap-1 py-2 my-2">
                        {data.map((item, index) => {
                            return (
                                <div className={`p-2 border rounded-lg cursor-pointer hover:bg-slate-100 ${item.isActive === true ? 'bg-slate-200' : ''}`} key={index} onClick={() => onChange(index)}>
                                    <div className="flex flex-col leading-4">
                                        {item.title}
                                        <small className="text-slate-800">{item.subTitle}</small>
                                    </div>
                                </div>
                            );
                        })}
                        {data.length === 0 && <span>Tidak ada data</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterKategoriModal;
