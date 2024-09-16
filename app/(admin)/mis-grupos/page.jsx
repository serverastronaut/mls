import dynamic from "next/dynamic";
import MisGrupos from "@/components/dashboard/mis-grupos";

export const metadata = {
  title: 'Mis grupos || MLS Propiedades',
  description:
    'Mis grupos - MLS Propiedades',
}

const index = () => {
  return (
    <>
      <MisGrupos />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
