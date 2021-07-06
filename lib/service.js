import axios from 'axios';
import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const fetchFromCMS = async (path) => {
  const url = `${serverRuntimeConfig.apiurl}/${path}`;
  const res = await axios.get(url);
  return res.data;
};
export default fetchFromCMS;