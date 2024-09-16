import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import MisGruposLista from "./MisGruposLista";
//import ClientReview from "./ClientReview";
import SearchBox from "./SearchBox";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}
              </div>
              {/* End .row */}

              <div className="row align-items-center">
                <div className="col-lg-8 col-xl-9 mb20">
                  <div className="breadcrumb_content style2 mb30-991">
                    <h2 className="breadcrumb_title">Mis Grupos</h2>
                    <p>Puede utilizar los filtros de búsqueda para gestionar sus grupos</p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-4 col-xl-3 mb20">
                  <ul className="sasw_list mb0">
                    <li className="search_area">
                      <SearchBox />
                    </li>
                  </ul>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div id="myreview" className="my_dashboard_review">
                    <div className="review_content">
                      <h4>Mis Grupos</h4>
                      <MisGruposLista />
                    </div>
                  </div>
                </div>
                {/* End col */}

                {/*<div className="col-lg-12">
                  <div
                    id="client_myreview"
                    className="my_dashboard_review mt30"
                  >
                    <div className="review_content client-review">
                      <h4>Visitor Reviews</h4>
                      <ClientReview />
                    </div>
                  </div>
                </div>*/}
              </div>
              {/* End .row */}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2024 MLS Propiedades</p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
