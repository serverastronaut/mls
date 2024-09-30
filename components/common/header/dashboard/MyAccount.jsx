'use client'

import Link from "next/link";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MyAccount = () => {
  const pathname = usePathname()
  const profileMenuItems = [
    { id: 1, name: "Mis propiedades", ruterPath: "/my-properties" },
    { id: 2, name: " Mis grupos", ruterPath: "/mis-grupos" },
    { id: 3, name: " Mis clientes", ruterPath: "/mis-clentes" },
    { id: 4, name: " Mensajes", ruterPath: "/my-review" },
    { id: 5, name: " Cerrar sesión", ruterPath: "/login" },
  ];

  return (
    <>
      <div className="user_set_header">
        <Image
          width={40}
          height={40}
          className="float-start"
          src="/assets/images/team/e1.png"
          alt="e1.png"
        />
        <p>
          Martin Perez <br />
          <span className="address">alitufan@gmail.com</span>
        </p>
      </div>
      {/* End user_set_header */}

      <div className="user_setting_content">
        {profileMenuItems.map((item) => (
          <Link
            href={item.ruterPath}
            key={item.id}
            className="dropdown-item"
            style={
              isSinglePageActive(`${item.ruterPath}`, pathname)
                ? { color: "#ff5a5f" }
                : undefined
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default MyAccount;
