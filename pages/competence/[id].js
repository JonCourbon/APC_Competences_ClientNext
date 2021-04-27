// pages/competence/[slug].jsx

import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { useRouter } from "next/router";

import fetchFromCMS from '../../lib/service';
import { getAllCompetenceIds,getCompetence } from '../../lib/competences';



const Competence = ({competence,composantes,niveaux}) => {
  const router = useRouter();
  return (
    <Layout>
    <Section>
    <h2>{competence.intitule}</h2>
    <ul>
    {composantes.map((composante) => (
      <li>{composante.intitule}</li>
    ))}
    </ul>
    </Section>
    <Section>
    <h3>Niveaux</h3>
    {niveaux.map((niveau) => (
      <div>
      <h4>{niveau.intitule}</h4>
      Il y a {niveau.apprentissages.length} apprentissages critiques:
      <ul>
        {niveau.apprentissages.map((apprentissage) => (
          <li>{apprentissage.intitule}</li>
        ))}
        </ul>
      </div>
    ))}
    </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const competence = getCompetence(params.id);
  const composantes = await fetchFromCMS(`composantes?competence=${params.id}`);
  let niveaux = await fetchFromCMS(`niveau-competences?competence=${params.id}`);
  for (let i in niveaux) {
    let apprentissages=await fetchFromCMS(`apprentissage-critiques?niveau_competence=${niveaux[i].id}`);
    niveaux[i].apprentissages=apprentissages;
  }
  
  return {
    props: {
      competence,
      composantes,
      niveaux
    },
  };
};


export async function getStaticPaths() {
  const competences = await fetchFromCMS('competences');
  const paths = competences.map((competence) => {
    return {
      params: { id: String(competence.id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}


export default Competence;