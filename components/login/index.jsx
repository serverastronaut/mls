import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Form from "./Form";

const index = () => {
  return (
    <>
      <Header />

      <MobileMenu />

      <PopupSignInUp />

      <section className="our-log bgc-fa">
        <div className="container">
          <div className="row  ">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <div className="login_form  inner_page pt-5">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
