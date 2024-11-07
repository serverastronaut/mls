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
    { id: 2, name: "Mis propiedades", route: "/mis-propiedades" },
    { id: 3, name: "Propiedades de la red", route: "/mis-propiedades" },
    { id: 4, name: "Compartidas conmigo", route: "/mis-propiedades" },
  ];
  const reviews = [
    { id: 1, name: "Mis grupos", route: "/my-review" },
    { id: 2, name: "Crear nuevo grupo", route: "/my-review" },
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
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          {/*<span>Inicio</span>*/}
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
              className={`treeview`}
            >
              <Link href="/my-dashboard">
                <i className="flaticon-heart"></i>
                <span> Favoritos</span>
              </Link>
            </li>

            <li
              className={`treeview`}
            >
              <Link href="/my-dashboard">
                <i className="flaticon-chat"></i>
                <span> Mensajes</span>
              </Link>
            </li>

            <li
              className={`treeview`}
            >
              <Link href="/my-dashboard">
                <i className="flaticon-user"></i>
                <span> Mi cuenta</span>
              </Link>
            </li>

            <li
              className={`treeview`}
            >
              <Link href="/my-dashboard">
                <i className="flaticon-logout"></i>
                <span> Cerrar sesión</span>
              </Link>
            </li>

          </ul>
        </li>
        {/* End Main */}


      </ul>
    </>
  );
};

export default SidebarMenu;
