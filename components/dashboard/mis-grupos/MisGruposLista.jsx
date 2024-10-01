import Image from "next/image";
import Link from "next/link";

const MisGruposLista = () => {
  const reviewContent = [
    {
      id: 1,
      img: "/assets/images/resource/review.png",
      reviewOn: "Grupo Lorem Ipsum",
      text: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons!`,
    },
    {
      id: 2,
      img: "/assets/images/resource/review4.png",
      reviewOn: "Grupo de pruebas",
      text: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons!`,
    },
  ];
  return (
    <>
      {reviewContent.map((item) => (
        <div className="media mt30" key={item.id}>
          <Image
            width={120}
            height={120}
            className="mr-3"
            src={item.img}
            alt="Review image"
          />
          <div className="media-body">
            <h5 className="review_title mt-0">
              {/*Your review on*/}{" "}
              <Link href="/mis-grupos/grupo-detalles/">
                <span className="text-thm">{item.reviewOn}</span>
              </Link>
              <span className="sspd_review float-end">{item.ratings}</span>
            </h5>
            <a className="review_date" href="#">
              Diciembre 28, 2020
            </a>
            <p className="para">{item.text}</p>

            <ul className="view_edit_delete_list mb0 mt35">
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="Ver"
              >
                <Link href="/grupo-detalles">
                  <span className="flaticon-view"></span>
                </Link>
              </li>
              {/* End edit */}

              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="Editar"
              >
                <Link href="/editar-grupo">
                  <span className="flaticon-edit"></span>
                </Link>
              </li>
              {/* End edit */}

              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
              >
                <a href="#">
                  <span className="flaticon-garbage"></span>
                </a>
              </li>
              {/* End delete */}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MisGruposLista;
