import s from './navbar.module.css'
import {NavLink} from "react-router-dom";
import {CgProfile} from "react-icons/cg";
import {TbMessages} from "react-icons/tb";
import {FaUserFriends} from "react-icons/fa";
import {BsMusicPlayer} from "react-icons/bs";
import {IoMdSettings} from "react-icons/io";
import {useSelector} from "react-redux";
import {MdVerifiedUser} from "react-icons/md";


const Navbar = () => {
    const profileLogo = useSelector((state) => state.profilePage.profileInfo.photos.small)
    const fullName = useSelector((state) => state.profilePage.profileInfo.fullName)
    return <div className={s.nav}>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className=" bg-primery text-secondary">
                    <div
                        className="d-flex text-secondary flex-column align-items-center align-items-stretch px-3 pt-2  min-vh-100  ">
                        <div className={s.profileInfoContainer}>
                        <div className={"d-flex align-items-center"}>

                                <div>
                                    <img src={profileLogo} className={s.sidebarLogo}/>
                                </div>
                                <div>
                                    <span className={s.sidebarName}>{fullName} <MdVerifiedUser
                                        style={{color: 'blue', height: '15px'}}/></span>
                                    <span className={s.sidebarSite}>@shumila</span>
                                </div>

                            </div>

                        </div>
                        <a href="/"
                           className="d-flex text-secondary align-items-center pb-3 mb-md-0 me-md-auto  text-decoration-none ">
                            <span className="fs-7 d-none d-sm-inline">MENU</span>

                        </a>

                        <div className="sideBar nav  text-secondary flex-column nav-pills " id="v-pills-tab"
                             role="tablist"
                             aria-orientation="vertical">
                            <li className="sideBarItem">
                                <NavLink to="/24842" className="nav-link align-middle   pl-2" end>
                                    <CgProfile/>
                                    <span
                                        className="ms-1 d-none d-sm-inline">Profile</span>
                                </NavLink>
                            </li>
                            <li className="sideBarItem">
                                <NavLink to="/messages" className="nav-link align-middle pl-2" end>
                                    <TbMessages/>
                                    <span
                                        className="ms-1 d-none d-sm-inline">Messages</span>
                                </NavLink>
                            </li>

                            <li className="sideBarItem">
                                <NavLink to="/friends" className="nav-link align-middle pl-2" end>
                                    <FaUserFriends/>
                                    <span
                                        className="ms-1 d-none d-sm-inline">Friends</span>
                                </NavLink>
                            </li>

                            <li className="sideBarItem">
                                <NavLink to="/music" className="nav-link align-middle pl-2" end>
                                    <BsMusicPlayer/>
                                    <span
                                        className="ms-1 d-none d-sm-inline">Music</span>
                                </NavLink>
                            </li>

                            <li className="sideBarItem">
                                <NavLink to="/settings" className="nav-link align-middle pl-2" end>
                                    <IoMdSettings/>
                                    <span
                                        className="ms-1 d-none d-sm-inline">Settings</span>
                                </NavLink>
                            </li>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    </div>

}
export default Navbar