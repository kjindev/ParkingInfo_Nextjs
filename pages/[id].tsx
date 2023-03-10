import { useRouter } from "next/router";
import Seo from "./Seo";

export default function Detail() {
  const router = useRouter();

  return (
    <>
      <Seo title={router.query.name} />
      <div>{router.query.id}</div>
    </>
  );
}
