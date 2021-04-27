import fetchFromCMS from './service';


export async function getAllCompetences() {
  const competences = await fetchFromCMS('competences');
  return {
    props: { competences },
    revalidate: 30
  };
}


export async function getAllCompetenceIds() {
  const competences = await fetchFromCMS(`competences`);
  return competences.map((competence) => (
    { params:
      {
        id: competence.id.toString()
      }
    }
  ));
}

export async function getCompetence(id) {
  let competence = await fetchFromCMS('competences/${id}');
  const composantes = await fetchFromCMS('composantes?competence=${id}');
  competence.composantes=composantes;
  return competence;
}

export async function getNiveauxCompetences(idcompetence) {
  let niveaux = await fetchFromCMS(`niveau-competences?competence=${idcompetence}`);
  for (let i in niveaux) {
    let apprentissages=await fetchFromCMS(`apprentissage-critiques?niveau_competence=${niveaux[i].id}`);
    niveaux[i].apprentissages=apprentissages;
  }
  return niveaux;
}