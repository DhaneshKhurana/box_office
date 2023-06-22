const BASE_URL = 'https://api.tvmaze.com';
const SHOW_SEARCH_URL = '/search/shows?q=';
const ACTOR_SEARCH_URL = '/search/people?q=';
const SHOW_DET_URL = '/shows';

async function getData(query) {
  console.log(`fetching for url query:`, query);
  const resp = await fetch(`${BASE_URL}${query}`);
  const json = await resp.json();
  console.log('returning json from getData, ', json);
  return json;
}

export const getActors = query => getData(`${ACTOR_SEARCH_URL}${query}`);
export const getShows = query => getData(`${SHOW_SEARCH_URL}${query}`);
export const getShowDetail = query => {
  console.log(
    `getShowDetail::  ${SHOW_DET_URL}${query}?embed[]=seasons&embed[]=cast`
  );
  return getData(`${SHOW_DET_URL}${query}?embed[]=seasons&embed[]=cast`);
};
