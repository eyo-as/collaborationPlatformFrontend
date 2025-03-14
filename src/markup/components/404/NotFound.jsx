import { Link } from "react-router";
import img from "../../../assets/images/404.png";
import { useEffect, useState } from "react";
import ContentLeft from "../main-content/ContentLeft";

const NotFound = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="page-title-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            {!isLargeScreen && <ContentLeft />}

            <div className="col-lg-6 col-md-4">
              <div className="page-title-content">
                <h2>404!</h2>
              </div>
            </div>

            <div className="col-lg-6 col-md-8">
              <div className="page-title-list">
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="active">404!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <img src={img} alt="Image" className="m-auto" />

            <Link to={"/"} className="default-btn">
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
