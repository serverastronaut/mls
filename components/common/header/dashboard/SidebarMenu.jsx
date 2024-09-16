'use client'

import Link from "next/link";

import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const pathname = usePathname()

  const myProperties = [
    { id: 1, name: "Mis propiedades", route: "/my-properties" },
    { id: 2, name: "Propiedades de la red", route: "/my-properties" },
    { id: 3, name: "Compartidas conmigo", route: "/my-properties" },
  ];
  const reviews = [
    { id: 1, name: "Mis grupos", route: "/mis-grupos" },
    { id: 2, name: "Crear grupo", route: "/crear-grupo" },
  ];
  const manageAccount = [
    {
      id: 1,
      name: "Mi inmobiliaria",
      route: "/mi-inmobiliaria",
      icon: "flaticon-house",
    },
    {
      id: 2,
      name: "Mi cuenta",
      route: "/my-profile",
      icon: "flaticon-user",
    },
    {
      id: 4,
      name: "Agregar usuario (owner)",
      route: "/my-profile",
      icon: "flaticon-plus",
    },
    { id: 4, name: "Cerrar sesión", route: "/login", icon: "flaticon-logout" },
  ];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
            <Image
              width={200}
              height={45}
              src="/assets/images/mlslogo-white.svg"
              alt="mlslogo-white.svg"
            />
            {/*<span>FindHouse</span>*/}
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Inicio</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/my-dashboard", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-dashboard">
                <i className="flaticon-layers"></i>
                <span> Bienvenido</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/create-listing", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/create-listing">
                <i className="flaticon-plus"></i>
                <span> Agregar propiedad</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/my-message", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-review">
                <i className="flaticon-chat"></i>
                <span> Mensajes clientes</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <span>Gestión propiedades</span>
          <ul>
            <li
              className={`treeview ${
                isParentPageActive(myProperties, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-property">
                <i className="flaticon-home"></i> <span>Propiedades</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      {/*<i className="fa fa-circle"></i>*/} {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* end properties */}

            <li
              className={`treeview ${
                isParentPageActive(reviews, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#review">
                <i className="flaticon-high-five"></i>
                <span>Grupos</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="review">
                {reviews.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      {/*<i className="fa fa-circle"></i>*/} {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End Review */}

            {/*<li
              className={`treeview ${
                isSinglePageActive("/my-favourites", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-favourites">
                <i className="flaticon-magnifying-glass"></i>
                <span> My Favorites</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/my-saved-search", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-saved-search">
                <i className="flaticon-magnifying-glass"></i>
                <span> Saved Search</span>
              </Link>
            </li>*/}
          </ul>
        </li>
        {/* End manage listing */}

        <li className="title">
          <span>Gestión de cuenta</span>
          <ul>
            {manageAccount.map((item) => (
              <li
                className={
                  isSinglePageActive(item.route, pathname) ? "active" : ""
                }
                key={item.id}
              >
                <Link href={item.route}>
                  <i className={item.icon}></i> <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
