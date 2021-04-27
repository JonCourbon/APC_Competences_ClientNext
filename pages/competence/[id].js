// pages/competence/[slug].jsx

import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { useRouter } from "next/router";

import fetchFromCMS from '../../lib/service';
import { getAllCompetenceIds,getCompetenceData } from '../../lib/competence';



const Competence = ({competence,composantes,niveaux}) => {
  const router = useRouter();
  return (
    <Layout>
    <Section>
    <h2>{competence.intitule}</h2>
    <h3>Composantes essentielles</h3>
    <ul>
    {composantes.map((composante) => (
    <li>{composante.intitule}</li>
    ))}
    </ul>
    <h3>Niveaux</h3>
    {niveaux.map((niveau) => (
      <h4>{niveau.intitule}</h4>
    ))}
    </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const competence = await fetchFromCMS(`competences/${params.id}`);
  const composantes = await fetchFromCMS(`composantes?competence=${params.id}`);
  const niveaux = await fetchFromCMS(`niveau-competences?competence=${params.id}`);
  return {
    props: {
      competence,
      composantes,
      niveaux
    },
  };
};

export const getStaticPaths = async () => {
  const competences = await fetchFromCMS(`competences`);
  const paths = competences.map((competence) => (
    { params:
      {
        id: competence.id.toString()
      }
    }
  ));
  return {
    paths,
    fallback: true,
  };
};

export default Competence;

/*
export async function getStaticPaths() {
const paths = getAllCompetenceIds();
return {
paths,
fallback: false
}
}


export async function getStaticProps({ params }) {
const competence = getCompetenceData(params.id);
return {
props: {
competence
}
}
}
*/
