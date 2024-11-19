const FaqContent = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div id="headingOne">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Por qué MLS Propiedades es mejor que otros portales inmobiliarios
            </button>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              MLS Propiedades no es solo un portal de publicación; es una plataforma de trabajo
colaborativo donde inmobiliarias de todo el país pueden conectarse, intercambiar consultas
y obtener un mayor alcance, asegurando la eficacia en cada publicación y potencializando
el negocio.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTwo">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Cómo facilita MLS Propiedades la búsqueda de potenciales compradores
            </button>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Al centralizar las propiedades de distintas inmobiliarias en un solo lugar, aumentamos la
visibilidad. Los compradores encuentran un inventario amplio y diverso, lo cual facilita que
encuentren exactamente lo que buscan y agiliza la captación de nuevos interesados.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingThree">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Qué beneficios tiene para una inmobiliaria unirse a una red nacional
            </button>
          </div>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              MLS Propiedades permite que las inmobiliarias puedan conectarse en red con colegas de
distintas provincias, abriendo oportunidades de negocio y colaboración que serían difíciles
de lograr de otra manera.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFour">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Cómo ayuda MLS Propiedades en la actualización de noticias del sector
            </button>
          </div>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Contamos con un espacio dedicado a las noticias y novedades del sector inmobiliario,
manteniendo a los profesionales siempre informados sobre los cambios del mercado,
normativas, tendencias y mejores prácticas.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFive">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              MLS Propiedades ofrece soporte para la gestión de consultas y contacto con otros
              profesionales
            </button>
          </div>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Sí, la plataforma permite la creación de grupos de trabajo privados o abiertos, fomentando
la colaboración y consultas entre colegas, lo que fortalece el conocimiento y ayuda a
resolver dudas en equipo.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSix">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Cómo asegura MLS Propiedades la calidad y seguridad en sus publicaciones
            </button>
          </div>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Todas las propiedades publicadas en MLS Propiedades están respaldadas por inmobiliarias
habilitadas y profesionales responsables, lo que otorga seguridad y confianza a los
compradores y eleva la reputación de los participantes.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSeven">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              De qué manera MLS Propiedades mejora la efectividad de las publicaciones
            </button>
          </div>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Con nuestro sistema, cada propiedad recibe la visibilidad adecuada y llega a una audiencia
segmentada. Los compradores confían en nuestro portal, sabiendo que cada oferta está
verificada y respaldada, lo que aumenta la tasa de respuesta y reduces los tiempos de
venta.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingEight">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Qué tipo de herramientas ofrece MLS Propiedades para la administración de
              propiedades
            </button>
          </div>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Proporcionamos herramientas intuitivas para la gestión de inventario y publicación de
propiedades, haciendo que cada inmobiliaria pueda organizar, actualizar y monitorear sus
propiedades fácilmente desde una sola plataforma.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingNine">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              MLS Propiedades permite trabajar con inmobiliarias de otras ciudades en operaciones
              compartidas
            </button>
          </div>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Sí, en MLS Propiedades puedes trabajar en red con inmobiliarias de otras regiones,
generando acuerdos de colaboración y expandiendo el alcance de cada operación. Esto
permite que clientes de una ciudad puedan ver propiedades en otras, ampliando el potencial
de ventas.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTen">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              Cómo ayuda MLS Propiedades a la inmobiliaria a mantenerse competitiva en el
              mercado actual
            </button>
          </div>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Al integrar funciones de red, herramientas de gestión y un alcance nacional, MLS
Propiedades permite a las inmobiliarias destacarse, optimizar sus operaciones y ofrecer un
servicio más completo y seguro a sus clientes.</p>
              <p>
                MLS Propiedades es la elección ideal para las inmobiliarias que buscan una plataforma
completa, colaborativa y enfocada en el éxito en red.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}
      </div>
    </>
  );
};

export default FaqContent;
