import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLearningRequest } from "../../api/LearningRequest";

const LearningContext = createContext();

export const LearningContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [categoryCurrent, setCategoryCurrent] = useState({
        title: 'Semua',
        key: null,
        isActive: true,
    });
    const [category, setCategory] = useState([
        {
            title: 'Semua',
            key: '',
            isActive: true,
        },
        {
            title: 'Data Alutsista',
            key: 'alutsista',
            isActive: false,
        },
        {
            title: 'Data Munisi',
            key: 'munisi',
            isActive: false,
        },
        {
            title: 'Tugas dan Tanggung Jawab',
            key: 'tugas-dan-tanggung-jawab',
            isActive: false,
        },
    ]);
    const [learning, setLearning] = useState({});

    const onChangeCategory = (index) => {
        category.forEach((item) => {
            item.isActive = false;
        });

        category[index].isActive = true;
        setCategoryCurrent(category[index]);
        setCategory(category);
        onGetLearning({ category: category[index].key });
    }

    const onGetLearning = async ({ category = '' }) => {
        await getLearningRequest({ filter: `category=${category}` }).then((res) => {
            setLearning(res);
        });
    };

    useEffect(() => {
        onGetLearning({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LearningContext.Provider value={{ navigation, category, categoryCurrent, learning, onChangeCategory }}>
            {children}
        </LearningContext.Provider>
    );
}

export const UseLearningContext = () => {
    return useContext(LearningContext);
}