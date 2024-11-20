import Link from "next/link";

const CallToAction = () => {
  return (
<div className="row">
  <div className="col-lg-8">
    <div className="start_partner">
      <h3>¡Únase a la red inmobiliaria que está marcando la diferencia y conviértase en parte de una comunidad de excelencia!</h3>
    </div>
  </div>

  <div className="col-lg-4 d-flex justify-content-center align-items-center">
    <div className="parner_reg_btn">
      <Link href="/register" className="btn btn-thm2">
        Regístrese ahora
      </Link>
    </div>
  </div>
</div>
  );
};

export default CallToAction;
