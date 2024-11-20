import dynamic from "next/dynamic";
import Institucional from "@/components/institucional";

export const metadata = {
  title: 'Institucional || MLS Propiedades',
  description:
    'Institucional || MLS Propiedades',
}

const index = () => {
  return (
    <>
      <Institucional />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
