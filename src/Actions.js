import data from './meteorites.testdata.json';

const getData = () => {
  return new Promise( (resolve, reject) => {
    resolve( data);
  });
  // return fetch( "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json")
  //   .then( checkStatus)
  //   .then( parseJSON);
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Actions = { getData};
export default Actions;
