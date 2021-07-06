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
      <p>Il y a {sae.apprentissage_critiques.length} apprentissage(s) en lien avec cet atelier:</p>
      <ul>
      {sae.apprentissage_critiques.map((apprentissage) => (
        <li>{apprentissage.competence}  > {apprentissage.niveau_competence} > {apprentissage.intitule}</li>
      ))}
      </ul>
    </div>
    </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const sae = await fetchFromCMS(`saes/${params.id}`);
  for (let i in sae.apprentissage_critiques) {
    let apprentissage=await fetchFromCMS(`apprentissage-critiques/${sae.apprentissage_critiques[i].id}`);
    let niveau_competences=await fetchFromCMS(`niveau-competences/${apprentissage.niveau_competence.id}`);
    
    sae.apprentissage_critiques[i].niveau_competence=niveau_competences.intitule;
    sae.apprentissage_critiques[i].competence=String(niveau_competences.competence.intitule).slice(0,10);
  }
  
  sae.apprentissage_critiques.sort((a, b) => {
      return a.competence - b.competence;
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