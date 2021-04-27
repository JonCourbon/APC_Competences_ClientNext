import fetchFromCMS from './service';


export async function getAllCompetenceIds() {
  const competences = await fetchFromCMS('competences');
  return competences.map(competence => {
    return {
      params: {
        id: competence.id.toString()
      }
    }
  })
}

export async function getCompetenceData(id) {
  const competence = await fetchFromCMS('competences/${id}');

  // Combine the data with the id
  return competence => {
    return {
      params: {
        id: competence.id,
        competence: competence
      }
    }
  }
}