import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const LearningContext = createContext();

export const LearningContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const category = [
        {
            title: 'Data Alutsista',
            key: 'alutsista',
        },
        {
            title: 'Data Munisi',
            key: 'munisi',
        },
        {
            title: 'Tugas dan Tanggung Jawab',
            key: 'tugas-dan-tanggung-jawab',
        },
    ];

    return (
        <LearningContext.Provider value={{ navigation, category }}>
            {children}
        </LearningContext.Provider>
    );
}

export const UseLearningContext = () => {
    return useContext(LearningContext);
}