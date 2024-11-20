import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import FaqContent from "./FaqContent";
import BreadCrumb from "../common/BreadCrumb";

const index = () => {
  return (
    <>
      <Header />

      <MobileMenu />

      <PopupSignInUp />

      <section className="our-faq bgc-f7 mt-5">
        <div className="container">

          <div className="row mt-4">
            <div className="col-xl-6">
              <div className="breadcrumb_content style2">
                <BreadCrumb title="Preguntas frecuentes" />
                <h2 className="breadcrumb_title">Preguntas frecuentes</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="faq_content">
                <div className="faq_according">
                  <FaqContent />
                </div>
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
