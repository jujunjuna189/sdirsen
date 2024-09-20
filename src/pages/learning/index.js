import { BottomNavigation, Button, Content, Navbar } from "../../components";
import { UseLearningContext } from "../../context/learning/LearningContext";

const LearningPage = () => {
    const { category, learning, onChangeCategory } = UseLearningContext();

    return (
        <Content>
            <div className="flex flex-grow justify-center">
                <div className="p-5 w-[100%] xl:w-[80%]">
                    <Navbar />
                    <div className="flex flex-row gap-2 md:px-5 my-3 overflow-x-auto scrollbar-hidden">
                        {category.map((item, index) => {
                            return (
                                <div key={index} className={`border rounded-full px-3 whitespace-pre cursor-pointer ${item.isActive ? 'bg-slate-800 text-white' : ''}`} onClick={() => onChangeCategory(index)}>
                                    <span className="text-sm">{item.title ?? ''}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="md:px-5 flex flex-col gap-1 py-2">
                        {learning?.data?.map((item, index) => {
                            return (
                                <div key={index} className="border rounded-lg p-2 cursor-pointer md:flex md:justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-base text-black font-medium">{item.title}</span>
                                        <small>{item.description}</small>
                                    </div>
                                    <div className="pt-4 md:pt-0">
                                        <Button className="border py-[5px] px-[20px] justify-center" onClick={() => window.open(item.file, '_self')}>
                                            <small>Lihat</small>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <BottomNavigation learning={false} />
        </Content>
    );
}

export default LearningPage;