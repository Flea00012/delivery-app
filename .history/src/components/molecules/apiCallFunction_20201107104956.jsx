//function fetchPackages() is used to do all the fetching of the data only
export async function fetchPackages(endpoint) {
  try {
    // Make fetch request to obtain info frmo the endpoint URL address
    // Cors is a security measure.
    const response = await fetch(endpoint, { mode: 'cors' });

    // Once the information is downloaded we transformed it to json
    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
}

// function comparator is used to do all the comparisons only
export function comparator(dataArray, value) {
  return dataArray.filter((a) => a === value);
}
