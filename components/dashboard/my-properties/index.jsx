
"use client";

import { useState } from 'react';
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import TableData from "./TableData";
//import Filtering from "./Filtering";
import Pagination from "./Pagination";
//import SearchBox from "./SearchBox";

const ITEMS_PER_PAGE = 3;

const index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />

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

      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">

              <div className="row">

                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Menú lateral
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-xl-4 mb0">
                  <div className="breadcrumb_content style2 mb0">
                    <h2 className="breadcrumb_title">Mis propiedades</h2>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="my_dashboard_review mb40 table-container" style={{ backgroundColor: 'transparent' ,border: 'none'}}>
                    <div className="property_table">

                      <div className="table-responsive mt0" style={{overflowX : 'hidden'}}>
                        <TableData  currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE} setTotalItems={setTotalItems}/>
                      </div>

                      <div className="mbp_pagination">
                        <Pagination
                          currentPage={currentPage}
                          totalPages={Math.ceil(totalItems / ITEMS_PER_PAGE)}
                          onPageChange={handlePageChange}
                        />
                      </div>

                    </div>

                  </div>
                </div>

              </div>


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
