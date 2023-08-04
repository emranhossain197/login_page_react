import Image from "../../assets/media/images/Image.svg"
import { BsFacebook, BsApple } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

function LoginFromContent() {
    return (
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            <div className=" flex-1">
                <h2 className=" font-bold pb-2 text-2xl tracking-wide font-Nunito">WELCOME BACK!</h2>
                <p className=" pb-10 font-Nunito text-BlackGray">Don’t have a account, <a href="#" className="text-BlueGray underline">Sign up</a></p>
                <div>
                    <form action="">
                        <label htmlFor="Username" className="pb-2 block">Username</label>
                        <input type="text" className="rounded-[20px] w-full border-2 py-2 px-2 border-BlueGray focus:outline-none md:w-10/12" id="Username" placeholder="example@gmail.com" /> <br /> <br />

                        <label htmlFor="password" className="pb-2 block">Password</label>
                        <input type="password" className="rounded-[20px] w-full border-2 py-2 px-2 border-BlueGray focus:outline-none md:w-10/12" id="password" placeholder="*********" />
                        <div className="flex space-x-2 pt-2 pr-0 md:pr-14 md:justify-between md:space-x-6">
                            <span className="text-sm md:text-lg">
                                <input type="checkbox" name="checkbox" className=" checked:bg-blue-500" id="checkbox" /> Remember me
                            </span>
                            <a href="#" className="text-BlueGray text-sm md:text-lg">Forget password?</a>
                        </div>
                        <button className=" mt-5 w-full  py-2 px-4 bg-BlueGray text-white font-semibold rounded-lg shadow-md hover:bg-BlueGray hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-BlueGray  focus:ring-opacity-75 md:w-10/12">
                            Save changes
                        </button>
                    </form>
                </div>
                <div className="flex space-x-9 justify-center items-center mt-12 md:mr-10">
                    <FcGoogle className=" text-4xl cursor-pointer border-2 p-2 border-BlueGray rounded-[4px] md:text-5xl"/>
                    <BsFacebook className="text-4xl cursor-pointer fill-BlueGray border-2 p-2 border-BlueGray rounded-[4px] md:text-5xl"/>
                    <BsApple className=" text-4xl cursor-pointer  border-2 p-2 border-BlueGray rounded-[4px] md:text-5xl"/>
                </div>
            </div>
            <div className=" hidden md:block flex-1">
                <img src={Image} className=" w-12/12" alt="Image" />
            </div>
        </div>
    )
}


export default LoginFromContent;