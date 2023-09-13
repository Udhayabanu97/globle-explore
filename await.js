// Simulating an asynchronous function that fetches data from an API
async function fetchDataFromAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

// An asynchronous function that uses the fetched data
async function processData() {
  try {
    console.log("Fetching data...");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("data");
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function to start the process
processData();
