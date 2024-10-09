import dynamic from "next/dynamic";
import Novedades from "@/components/dashboard/novedades";

export const metadata = {
  title: 'Blog List 1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <Novedades />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
