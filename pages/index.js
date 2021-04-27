import Layout from '../components/Layout';
import Section from '../components/Section';


export default function Home() {
  return (
      <Layout>
        <Section>
        <h1 class="header center orange-text">APC LP MdN</h1>
    <div class="row center">
      <h5 class="header col s12 light">La plateforme de gestion de l'approche par compétences pour la LP Métiers du Numérique du Puy-en-Velay</h5>
    </div>
        </Section>
        <Section>
         <div class="row">
           <div class="col s12 m4">
             <div class="icon-block">
               <h2 class="center light-blue-text"><i class="material-icons">psychology</i></h2>
               <h5 class="center">Compétences</h5>

               <p class="light">Les 5 compétences.</p>
             </div>
           </div>

           <div class="col s12 m4">
             <div class="icon-block">
               <h2 class="center light-blue-text"><i class="material-icons">engineering</i></h2>
               <h5 class="center">SAE</h5>

               <p class="light">Les mises en situation</p>
             </div>
           </div>
         </div>
        </Section>
      </Layout>
    );
}
