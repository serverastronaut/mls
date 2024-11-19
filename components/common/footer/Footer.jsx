import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>Sobre la plataforma</h4>
          <p>
          MLS Propiedades es la elección ideal para las inmobiliarias que buscan una plataforma
          completa, colaborativa y enfocada en el éxito en red.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Accesos</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Institucional</Link>
            </li>
            <li>
              <Link href="/terms">Términos y condiciones</Link>
            </li>
            <li>
              <Link href="/faq">Faq</Link>
            </li>
            <li>
              <Link href="/contact">Soporte</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contacto</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@mlspropiedades.com">info@mlspropiedades.com</a>
            </li>
            <li>
              <a href="#">Calle 1234, San Pedro</a>
            </li>
            <li>
              <a href="#">Buenos Aires, Argentina.</a>
            </li>
            <li>
              <a href="tel:+4733378901">+1 246-345-0699</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Redes</h4>
          <ul className="mb30">
            <Social />
          </ul>
          <h4>Newsletter</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
