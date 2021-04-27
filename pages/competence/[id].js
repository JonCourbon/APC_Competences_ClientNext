// pages/competence/[slug].jsx

import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { useRouter } from "next/router";

import fetchFromCMS from '../../lib/service';
import { getAllCompetenceIds,getCompetence,getNiveauxCompetences } from '../../lib/competences';



const Competence = ({competence,niveaux}) => {
  const router = useRouter();
  return (
    <Layout>
    <Section>
    <h2>{competence.intitule}</h2>
    <ul>
    {competence.composantes.map((composante) => (
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
  const niveaux =getNiveauxCompetences(params.id);
  
  return {
    props: {
      competence,
      niveaux
    },
  };
};

export const getStaticPaths = async () => {
  paths=getAllCompetenceIds();
  return {
    paths,
    fallback: true,
  };
};

export default Competence;