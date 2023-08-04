import Logo from "../../assets/media/icons/logo.svg"
import MenuItem from "./navData"
import { BiMenu } from 'react-icons/bi'

function Navigation() {
    return (
        // Navbar 
        <nav className=" container p-6 mx-auto ">
            {/* Flex container  */}
            <div className=" flex items-center justify-between">
                {/* Logo */}
                <div className="">
                    <img src={Logo} className="w-36 md:w-48" alt="Logo" />
                </div>
                {/* Menu Item  */}
                <div className=" hidden  md:flex">
                    <ul className=" space-x-6 flex font-Nunito">
                        {MenuItem?.map((item) => (
                            <li className=" cursor-pointer text-BlackGray" key={item?.id}>{item?.text}</li>
                        ))}
                    </ul>
                </div>
                <BiMenu className="block stroke-0 text-3xl md:hidden" />
            </div>
        </nav>
    )
}

export default Navigation;