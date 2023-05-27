import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import candidatesMenuData from "../../data/candidatesMenuData";
import { useRouter } from "next/router";
import { useAuthContext } from "../Context/AuthContext";
import Notification from "../dashboard-pages/candidates-dashboard/dashboard/components/Notification";

const DashboardCandidatesHeader = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, getUser } = useAuthContext();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
  
    const changeBackground = () => {
      if (window.scrollY >= 0) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", changeBackground);
      return () => {
        window.removeEventListener("scroll", changeBackground);
      };
    }, []);
  
    useEffect(() => {
      const fetchUser = async () => {
          try{
              await getUser();
        setLoading(false);
          }catch(e){
              router.push("/login");
          }
        
      };
  
      if (!user) {
        fetchUser();
      } else {
        setLoading(false);
      }
    }, [user, getUser]);
  
    if (loading) {
      // Render loading state or spinner while fetching user data
      return <div>Loading...</div>;
    }
  
    

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-shaddow  ${
        navbar ? "fixed-header " : ""
      }`}
    >
      <div className="container-fluid">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    alt="brand"
                    src="/images/logo.png"
                    width={154}
                    height={50}
                    priority
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <button className="menu-btn">
              <span className="icon la la-bell">
                <div className="dropdown">
                  <ul className="dropdown-menu">
                    <div className="widget-content">
                      <li>
                        <Notification />
                      </li>
                    </div>
                  </ul>
                </div>
              </span>
            </button>
            {/* End notification-icon */}
            {/* <!-- Dashboard Option --> */}
            <div className="dropdown dashboard-option">
              <a
                className="dropdown-toggle"
                role="button"
                aria-expanded="false"
              >
                <Image
                  alt="avatar"
                  className="thumb"
                  src="/images/resource/candidate-1.png"
                  width={50}
                  height={50}
                />
                <span className="name">{user?.name}</span>
              </a>
            </div>
            {/* End dropdown */}
          </div>
          {/* End outer-box */}
        </div>
      </div>
    </header>
  );
};

export default DashboardCandidatesHeader;
