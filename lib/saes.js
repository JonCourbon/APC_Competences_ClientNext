import fetchFromCMS from './service';


export async function getAllSAEs() {
  const saes = await fetchFromCMS('saes');
  return {
    props: { saes },
    revalidate: 30
  };
}