// pages/competence/[slug].jsx

import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { useRouter } from "next/router";

import fetchFromCMS from '../../lib/service';
import { getAllCompetenceIds,getCompetence } from '../../lib/competences';



const SAE = ({sae}) => {
  const router = useRouter();
  return (
    <Layout>
    <Section>
    <h2>{sae.intitule}</h2>
    </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const sae = await fetchFromCMS(`saes/${params.id}`);

  return {
    props: {
      sae
    },
  };
};


export async function getStaticPaths() {
  const saes = await fetchFromCMS('saes');
  const paths = saes.map((sae) => {
    return {
      params: { id: String(sae.id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}


export default SAE;