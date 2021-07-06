import fetchFromCMS from './service';
import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export async function getAllSAEs() {
  const saes = await fetchFromCMS(`saes?diplome=${serverRuntimeConfig.diplome}`);
  return {
    props: { saes },
    revalidate: 30
  };
}