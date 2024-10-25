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
    { id: 1, name: "Agregar propiedad", route: "/create-listing", icon: "flaticon-user" },    
    { id: 2, name: "Mis propiedades", route: "/my-properties" },
    { id: 3, name: "Propiedades de la red", route: "/my-properties" },
    { id: 4, name: "Compartidas conmigo", route: "/my-properties" },
  ];
  const reviews = [
    { id: 1, name: "Mis grupos", route: "/mis-grupos" },
    { id: 2, name: "Crear nuevo grupo", route: "/crear-grupo" },
  ];

  const myClients = [
    {
      id: 1,
      name: "Mis clientes",
      route: "/mis-clientes",
      icon: "flaticon-user",
    },
    {
      id: 2,
      name: "Mensajes clientes",
      route: "/my-review",
      icon: "flaticon-chat",
    },
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
      route: "/crear-usuario",
      icon: "flaticon-plus",
    },
    { id: 4, name: "Cerrar sesión", route: "/login", icon: "flaticon-logout" },
  ];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header" style={{height: '140px'}}>
          <Link href="/">
            <Image
              //width={200}
              //height={45}
              width={120}
              height={120}
              //src="/assets/images/mlslogo-white.svg"
              src="/assets/images/logocuadrado.svg"
              alt="mlslogo-white.svg"
              style={{marginTop: '30px', marginBottom: '30px'}}
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
                isSinglePageActive("/novedades", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/novedades">
                <i className="flaticon-chat"></i>
                <span>Novedades</span>
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
                isSinglePageActive("/create-listing", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/create-listing">
                <i className="flaticon-plus"></i>
                <span> Agregar propiedad</span>
              </Link>

              {/*<a data-bs-toggle="collapse" href="#my-property">
                <i className="flaticon-home"></i> <span>Mis propiedades</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>*/}
            </li>

            <li
              className={`treeview ${
                isSinglePageActive("/my-properties", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-properties">
                <i className="flaticon-home"></i>
                <span> Mis propiedades</span>
              </Link>
            </li>

            <li
              className={`treeview ${
                isSinglePageActive("/my-properties", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-properties">
                <i className="flaticon-house"></i>
                <span> De la red</span>
              </Link>
            </li>

            <li
              className={`treeview ${
                isSinglePageActive("/my-properties", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-properties">
                <i className="flaticon-share"></i>
                <span> Compartidas conmigo</span>
              </Link>
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
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End Review */}

          </ul>
        </li>
        {/* End manage listing */}

        <li className="title">
          <span>Gestión clientes</span>
          <ul>
            {myClients.map((item) => (
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
