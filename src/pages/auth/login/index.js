import { ButtonRounded, Card, Content, InputPassword, InputText } from "../../../components";
import { UseAuthContext } from "../../../context/auth/AuthContext";
import { UseLoginContext } from "../../../context/auth/LoginContext";

const LoginPage = () => {
    const { login } = UseAuthContext();
    const { controller, onFieldChanges } = UseLoginContext();

    return (
        <Content>
            <div className="flex justify-center items-center h-screen">
                <Card styles="w-[90%] md:w-[30rem]">
                    <div className="px-3 py-5 md:px-10 md:py-10">
                        <div className="flex justify-center">
                            <span className="font-bold text-2xl">Login</span>
                        </div>
                        <div className="mt-5">
                            <div className="mt-2">
                                <span className="font-semibold">Username</span>
                                <div className="mt-2">
                                    <InputText value={controller.username} onChange={(value) => onFieldChanges('username', value)} />
                                </div>
                            </div>
                            <div className="mt-2">
                                <span className="font-semibold">Password</span>
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