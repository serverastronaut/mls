'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
//import blogContent from "../../../data/blogs";
import Image from "next/image";

const Blog = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/novedades`, {
          cache: 'no-store',
        });         
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);        
      }
    }

    fetchData();
  }, []);

  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/novedad-detalle/${id}`);
  };

  return (
    <>
      {loading && <div>Cargando ...</div>}
      {error && <div>Error: {error}</div>}
      {//blogContent.slice(6, 9).map((item) => (
      data.map((item) => (
        <div className="for_blog feat_property" key={item.id}>
          <div className="details">
            <div className="tc_content">
              <h4 className="mb15">
                <Link href={`/novedad-detalle/${item.id}`}>{item.TituloNovedad}</Link>
              </h4>
              <p><strong>{item.SubtituloNovedad}</strong></p>
              <p>{item.TextoNovedad.slice(0, 285)}</p>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                {/*<li className="list-inline-item">
                  <a href="#">{item.posterName}</a>
                </li>*/}
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-calendar pr10"></span>{" "}
                    {item.postedDate}
                  </a>
                </li>
              </ul>
              {/*<a className="fp_pdate float-end text-thm" href="#">
                Leer más <span className="flaticon-next"></span>
              </a>*/}
              <span className="fp_pdate float-end text-thm" onClick={() => handleClick(item.Id)} style={{ cursor: 'pointer' }}>
                Leer más <span className="flaticon-next"></span>
              </span>               
            </div>
          </div>

        </div>
      ))}
    </>
  );
};

export default Blog;
