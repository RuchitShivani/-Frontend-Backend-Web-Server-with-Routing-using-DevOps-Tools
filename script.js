// frontend/script.js

async function callAPI(route) {
  const apiUrl = `http://localhost:5001/api/${route}`;
  
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    
    const data = await response.json();
    document.getElementById("response").innerHTML = `<p><strong>Response:</strong> ${data.message}</p>`;
  } catch (error) {
    document.getElementById("response").innerHTML = `<p><strong>Error:</strong> ${error.message}</p>`;
  }
}
