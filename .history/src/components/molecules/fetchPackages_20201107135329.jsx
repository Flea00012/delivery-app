//function fetchPackages() is used to do all the fetching of the data only and separate business logic from UI
export async function fetchPackages(endpoint) {
  try {
    // Make fetch request to obtain info from the endpoint URL address

    
    // Cors is a security measure given by Eduardo for the API.
    const response = await fetch(endpoint, { mode: 'cors' });

    // Once the information is downloaded we transformed it to json
    const data = await response.json();

    return data;
  } catch {
    // console.log(`error block reached in fetchPackages`)
  }
}
