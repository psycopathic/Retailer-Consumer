import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Category } from "@/payload-types";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { SearchFilter } from "./search-filter";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  })
  const data = await payload.find({
    collection: "categories",
    depth: 2,
    pagination: false,
    where: {
      parent: {
        exists: false
      }
    }
  })
  
  // Serialize data to avoid RSC serialization issues
  const formattedData = JSON.parse(JSON.stringify(data.docs))

  console.log({data,formattedData})
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilter data={formattedData} />
      <div className="flex-1 bg-white">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
