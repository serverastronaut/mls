'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();

  const home = [
    {
      id: 1,
      name: "Home 1",
      routerPath: "/",
    },
  ];

  const propiedades = [
    { id: 1, name: "Propiedades", routerPath: "/listing-grid-v3" },
  ];

  const institucional = [
      { id: 1, name: "Institucional", routerPath: "/institucional" },
  ];

  const faq = [
    { id: 1, name: "Faq", routerPath: "/faq" },
  ];
    
  const blog = [
    { id: 3, name: "Novedades", routerPath: "/noticias" },
  ];


  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <a
          href="/"
          className={
            home.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Bienvenido</span>
        </a>
      </li>

      <li className="dropitem">
        <a
          href="/listing-grid-v3"
          className={
            propiedades.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Propiedades</span>
        </a>
      </li>

      <li className="dropitem">
        <a
          href="/institucional"
          className={
            institucional.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Institucional</span>
        </a>
      </li>

      <li className="dropitem">
        <a
          href="/faq"
          className={
            faq.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Faq</span>
        </a>
      </li>

      <li className="dropitem">
        <a
          href="/noticias"
          className={
            blog.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Novedades</span>
        </a>
      </li>

      <li className="last">
        <Link
          href="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contacto
        </Link>
      </li>

      <li className={`list-inline-item add_listing ${float}`}>
        <a
          href="/login"
          className="btn flaticon-user"
        >
          <span className="dn-lg ml10 mr10">Ingresar</span>
        </a>

      </li>

    </ul>
  );
};

export default HeaderMenuContent;
