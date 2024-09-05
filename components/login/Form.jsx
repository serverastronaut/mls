import Link from "next/link";

const Form = () => {
  return (
    <form action="#">
      <div className="heading text-center">
        <h3>Ingreso</h3>
        <p className="text-center">
          ¿No tiene una cuenta?{" "}
          <Link href="/register" className="text-thm">
            Registrarse ahora
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          required
          placeholder="Usuario o Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="input-group form-group">
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
      {/* End .input-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="remeberMe"
        />
        <label
          className="form-check-label form-check-label"
          htmlFor="remeberMe"
        >
          Recordarme
        </label>

        <a className="btn-fpswd float-end" href="#">
          Olvidé mi contraseña
        </a>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Ingresar
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
            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
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
