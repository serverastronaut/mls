import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "+80.123",
      meta: "Usuarios",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "+7.400",
      meta: "Propiedades",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "4.680",
      meta: "Ventas",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7 mt-3">
        <div className="about_content">
          <p>
          En MLS Propiedades, creamos una plataforma innovadora para conectar a inmobiliarias de distintas ciudades y provincias de toda Argentina con inversores y compradores potenciales, en un solo portal. Nuestro objetivo es transformar la forma en que el sector inmobiliario opera, facilitando el trabajo en red y asegurando experiencias de compra seguras y efectivas para todos los involucrados.
          </p>
          <p>
          MLS Propiedades: Su Aliado de Confianza en el Camino hacia una Inversión Segura y Rentable.
          </p>

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            width={461}
            height={360}
            priority
            className="w100 cover"
            src="/assets/images/about/1.jpg"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div>
    </>
  );
};

export default OurMission;
