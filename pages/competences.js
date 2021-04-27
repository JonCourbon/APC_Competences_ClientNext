import Layout from '../components/Layout';
import Section from '../components/Section';
import Link from 'next/link';

import fetchFromCMS from '../lib/service';
import {getAllCompetences} from '../lib/competences';

export default function Competences({competences}) {
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
              <Link as={`/competence/${competence.id}`} href="/competence/[id]"><span class="card-title">{competence.intitule}</span></Link>
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
  return getAllCompetences();
}
