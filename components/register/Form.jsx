import Link from "next/link";

const Form = () => {
  return (
    <form action="#">
      <div className="heading text-center">
        <h3>Registro</h3>
        <p className="text-center">
          ¿Ya tiene una cuenta?{" "}
          <Link href="/login" className="text-thm">
            Login
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          placeholder="Nombre"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>

      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          placeholder="Apellido"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>


      <div className="form-group input-group  ">
        <input
          type="email"
          className="form-control"
          required
          placeholder="Email personal"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>


      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Contraseña"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>


      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Reingrese contraseña"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>


      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          placeholder="Nombre inmobiliaria"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-house"></i>
          </div>
        </div>
      </div>

      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          placeholder="Titular"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>

      <div className="form-group input-group ">
        <input
          type="email"
          className="form-control"
          required
          placeholder="Email inmobiliaria"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>

      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          placeholder="Teléfono inmobiliaria"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-phone"></i>
          </div>
        </div>
      </div>

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          required
          id="terms"
        />
        <label className="form-check-label form-check-label" htmlFor="terms">
          Acepto los términos y condiciones y la política de privacidad
        </label>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Registrarse
      </button>
      {/* login button */}

      {/*<div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>*/}
      {/* devider */}

      <div className="row mt25">
        {/*<div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>*/}
        {/* End .col */}

        {/*<div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>*/}
        {/* End .col */}
      </div>
      {/* more signin options */}
    </form>
  );
};

export default Form;
