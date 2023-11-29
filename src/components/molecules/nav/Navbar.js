import { UseAuthContext } from "../../../context/auth/AuthContext";
import AvatarCircle from "../avatar/AvatarCircle";

const Navbar = () => {
    const { logout } = UseAuthContext();
    return (
        <div className="bg-white shadow-md">
            <div className="flex justify-between py-2 px-6">
                <div>
                    <span className="font-medium text-2xl">Sdirsen*</span>
                </div>
                <div className="flex">
                    <div onClick={() => logout()}>
                        <AvatarCircle title="AD" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;