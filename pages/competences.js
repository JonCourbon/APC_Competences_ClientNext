import Layout from '../components/Layout';
import Section from '../components/Section';
import Link from 'next/link';

import fetchFromCMS from '../lib/service';

export default function Competences({competences}) {
  console.log(competences);
  
  return (
      <Layout>
        <Section>
        <h1 class="header center orange-text">APC LP MdN: Compétences</h1>
    <div class="row center">
      <h5 class="header col s12 light">Les compétences</h5>
    </div>
    <div class="row">
    {competences.map((competence) => (
        <div class="col s12 m4">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{competence.intitule}</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <Link as={`/competence/${competence.id}`} href="/competence/[id]">Voir plus</Link>
            </div>
          </div>
       </div>
       ))}
    </div>
        </Section>
      </Layout>
    );
}

export async function getStaticProps() {
  const competences = await fetchFromCMS('competences');
  return {
    props: { competences },
    revalidate: 30,
  };
}
