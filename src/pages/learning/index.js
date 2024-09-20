import { BottomNavigation, Content, Navbar } from "../../components";
import { UseLearningContext } from "../../context/learning/LearningContext";

const LearningPage = () => {
    const { category, learning } = UseLearningContext();

    return (
        <Content>
            <Navbar />
            <div className="flex flex-row gap-2 px-5 my-3">
                {category.map((item, index) => {
                    return (
                        <div className="border rounded-full px-3">
                            <span className="text-sm">{item.title ?? ''}</span>
                        </div>
                    );
                })}
            </div>
            <BottomNavigation learning={false} />
        </Content>
    );
}

export default LearningPage;