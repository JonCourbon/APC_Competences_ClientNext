// pages/competence/[slug].jsx

import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { useRouter } from "next/router";

import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

import fetchFromCMS from '../../lib/service';
import { getAllCompetenceIds,getCompetence } from '../../lib/competences';



const SAE = ({sae}) => {
  const router = useRouter();
  return (
    <Layout>
    <Section>
    <div>
      <h2>{sae.intitule}</h2>
      <p>{sae.descriptif}</p>
      <p>Il y a {sae.apprentissages.length} apprentissage(s) en lien avec cet atelier:</p>
      <ul>
      {sae.apprentissages.map((apprentissage) => (
        <li>{apprentissage.intitule}</li>
      ))}
      </ul>
    </div>
    </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const sae = await fetchFromCMS(`saes/${params.id}`);
  sae.apprentissages.sort((a, b) => {
      return a.intitule - b.intitule;
  });

  return {
    props: {
      sae
    },
  };
};


export async function getStaticPaths() {
  const saes = await fetchFromCMS(`saes?diplome=${serverRuntimeConfig.diplome}`);
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