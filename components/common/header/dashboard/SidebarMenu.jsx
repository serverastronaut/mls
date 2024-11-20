'use client'

import { useSession } from "next-auth/react";

import SidebarMenuCliente from "../../../common/header/dashboard/SidebarMenuCliente";
import SidebarMenuOwner from "../../../common/header/dashboard/SidebarMenuOwner";
import SidebarMenuUsuario from "../../../common/header/dashboard/SidebarMenuUsuario";
import SidebarMenuSuperAdmin from "../../../common/header/dashboard/SidebarMenuSuperAdmin";


const SidebarMenu = () => {

  const { data: session, status } = useSession();

   // Lógica para determinar qué SidebarMenu mostrar
   let SidebarComponent;
   if (session?.user.rolid === 1) {
    // super admin
    SidebarComponent = <SidebarMenuSuperAdmin />;
   } else if (session?.user.rolid === 2) {
    // inmobiliaria owner 
    SidebarComponent = <SidebarMenuOwner />;
  } else if (session?.user.rolid === 3) {
    // inmobiliaria user
    SidebarComponent = <SidebarMenuUsuario />;
   } else if (session?.user.rolid === 4) {
    // client user
    SidebarComponent = <SidebarMenuCliente />;
   }

  return (
    <>
    {SidebarComponent}
    </>
  );
};

export default SidebarMenu;
