import dynamic from "next/dynamic";
import BlogV3 from "@/components/noticias";

export const metadata = {
  title: 'MLS Propiedades || Novedades',
  description:
    'MLS Propiedades || Novedades',
}

const index = () => {
  return (
    <>
      <BlogV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
