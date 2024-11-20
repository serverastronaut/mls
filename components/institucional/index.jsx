import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import OurMission from "./OurMission";

const index = () => {
  return (
    <>
      <Header />

      <MobileMenu />

      <PopupSignInUp />

      <BreadCrumbBanner />

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-mx-auto">
              <div className="main-title text-center">
                <h2 className="mt0">La Revolución en el Sector Inmobiliario Nacional</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <OurMission />
          </div>
          {/* End .row */}

          <div className="row mt80">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Para las Inmobiliarias</h2>
                <p>MLS Propiedades es mucho más que un sitio de publicaciones; es una herramienta de trabajo diseñada para potenciar la colaboración y eficiencia. </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-high-five"></span>
                </div>
                <div className="details">
                  <h4>Red de Colaboración Nacional</h4>
                  <p>Inmobiliarias de todo el país pueden integrarse y colaborar en grupos privados o abiertos, compartiendo experiencias, propiedades, y conocimiento.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-home-1"></span>
                </div>
                <div className="details">
                  <h4>Publicación Eficaz</h4>
                  <p>Optimice sus publicaciones y llegue al comprador adecuado, aumentando la visibilidad de sus propiedades en un portal nacional.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-profit"></span>
                </div>
                <div className="details">
                  <h4>Consultas y Actualización</h4>
                  <p>Una plataforma para consultas colaborativas entre colegas y para recibir noticias clave del sector, manteniéndose siempre a la vanguardia.</p>
                </div>
              </div>
            </div>


            <div className="row mt80">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>Para el cliente, inversor y comprador</h2>
                  <p>MLS Propiedades facilita la búsqueda de propiedades con el respaldo y tranquilidad que solo un equipo de profesionales confiables puede brindar: </p>
                </div>
              </div>
            </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-high-five"></span>
                </div>
                <div className="details">
                  <h4>Red de Colaboración Nacional</h4>
                  <p>Inmobiliarias de todo el país pueden integrarse y colaborar en grupos privados o abiertos, compartiendo experiencias, propiedades, y conocimiento.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-home-1"></span>
                </div>
                <div className="details">
                  <h4>Publicación Eficaz</h4>
                  <p>Optimice sus publicaciones y llegue al comprador adecuado, aumentando la visibilidad de sus propiedades en un portal nacional.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-profit"></span>
                </div>
                <div className="details">
                  <h4>Consultas y Actualización</h4>
                  <p>Una plataforma para consultas colaborativas entre colegas y para recibir noticias clave del sector, manteniéndose siempre a la vanguardia.</p>
                </div>
              </div>
            </div>

          </div>

          </div>

        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
