import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

const BottomNavigation = (props) => {
    const navigation = useNavigate();
    return (
        <>
            <div className={`fixed bottom-2 right-3 py-5 px-5 hidden md:block`}>
                {props.learning !== false && <Button className="bg-red-800 text-white text-[12px]" onClick={() => navigation('/learning')}>Buku Pintar</Button>}
            </div>

            <div className="fixed bottom-0 right-0 left-0 bg-white py-3 px-5 md:hidden flex justify-around border-t">
                <div className="flex flex-col" onClick={() => navigation('/main-page')}>
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    </div>
                    <small className="text-[10px]">Cari</small>
                </div>
                <div className="flex flex-col" onClick={() => navigation('/learning')}>
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 8h4" /><path d="M9 16h4" /><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" /><path d="M14 9l4 -1" /><path d="M16 16l3.923 -.98" /></svg>
                    </div>
                    <small className="text-[10px]">Buku Pintar</small>
                </div>
            </div>
        </>
    );
}

export default BottomNavigation;