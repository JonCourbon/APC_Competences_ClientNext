import Layout from '../components/Layout';
import Section from '../components/Section';
import Link from 'next/link';

import fetchFromCMS from '../lib/service';
import getAllSAEs from '../lib/saes';


export default function SAEs({saes}) {
  return (
      <Layout>
        <Section>
        <h1 class="header center orange-text">APC LP MdN: SAEs</h1>
    <div class="row center">
      <h5 class="header col s12 light">Les situations d'apprentissages</h5>
    </div>
    <div class="row">
    {saes.map((sae) => (
        <div class="col s12 m4">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{sae.intitule}</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <Link as={`/sae/${sae.id}`} href="/sae/[id]">Voir plus</Link>
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
  return getAllSAEs();
}
