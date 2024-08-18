import { imgBg } from "../../../assets";
import { ButtonRounded, Card, Content, InputPassword, InputText } from "../../../components";
import { UseAuthContext } from "../../../context/auth/AuthContext";
import { UseLoginContext } from "../../../context/auth/LoginContext";

const LoginPage = () => {
    const { login } = UseAuthContext();
    const { controller, onFieldChanges } = UseLoginContext();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-red-100 animate-pulse" />
            <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.15] overflow-hidden flex justify-center items-end">
                <img src={imgBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="fixed top-0 bottom-0 left-0 right-0 overflow-auto flex justify-center items-center">
                <Card styles="w-[90%] md:w-[24rem]">
                    <div className="px-3 py-8">
                        <div className="flex justify-center">
                            <span className="font-medium text-lg">Masuk Aplikasi</span>
                        </div>
                        <div className="mt-5">
                            <div className="mt-2">
                                <small className="font-medium">Username</small>
                                <div className="mt-2">
                                    <InputText value={controller.username} onChange={(value) => onFieldChanges('username', value)} />
                                </div>
                            </div>
                            <div className="mt-2">
                                <small className="font-medium">Password</small>
                                <div className="mt-2">
                                    <InputPassword value={controller.password} onChange={(value) => onFieldChanges('password', value)} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="mt-2">
                                    <ButtonRounded title="Login" styles="bg-red-800" titleStyle="text-white" onClick={() => login(controller.username, controller.password)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Content>
    );
}
export default LoginPage;