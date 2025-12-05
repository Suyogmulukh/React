async function getUserData() {
  try {
    console.log("Fetching user data...");
    const response = await fetch("https://jsonplacehlder.typicode.com/users/1");
    const data = await response.json();
    console.log("username = ", data.username);
      
  } catch {
    console.log("Error: ");
  }
}

getUserData();
