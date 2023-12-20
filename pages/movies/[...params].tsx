import Seo from "../../components/Seo";
import { useRouter } from "next/router";

interface DetailProps {
  params: string[] | undefined;
}

declare type MovieResultType = {
  id: number;
  title: string;
};

export default function Detail({ params }: DetailProps) {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(params);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({ params }: { params: DetailProps }) {
  const { params: routeParams } = params || { params: undefined };
  // const { results } = await (
  //   await fetch(`http://localhost:3000/api/movies/${params.id}`)
  // ).json();

  return {
    props: {
      params: routeParams,
    },
  };
}
