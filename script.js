// Function to fetch data from the API
async function fetchData() {
	//alert(`Fragment extracted: ${fragment}`);
	if (!fragment) {
       alert("No fragment found in the URL.");
       return;
     }

    //   alert(`Fragment extracted: ${fragment}`);
    //  console.log(`Fragment extracted: ${fragment}`);
    try {
		const fragment = window.location.hash.substring(1);
		alert(`Fragment extracted: ${fragment}`);
       // const response = await fetch(`https://kcxmetgdgsptpicxwfjh.supabase.co/functions/v1/generatenewpassword/` +fragment)};
       // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await fetch(`https://kcxmetgdgsptpicxwfjh.supabase.co/functions/v1/generatenewpassword/${fragment}` );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
	
    const container = document.querySelector('.container');
	
    const data = await fetchData();

    if (!data) {
        return;
    }
const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h2');
  title.textContent = `Access Token: ${data.access_token}`;

  const expiresIn = document.createElement('p');
  expiresIn.textContent = `Expires In: ${data.expires_in} seconds`;

  const expiresAt = document.createElement('p');
  expiresAt.textContent = `Expires At: ${data.expires_at}`;

  const refreshToken = document.createElement('p');
  refreshToken.textContent = `Refresh Token: ${data.refresh_token}`;

  const tokenType = document.createElement('p');
  tokenType.textContent = `Token Type: ${data.token_type}`;

  const type = document.createElement('p');
  type.textContent = `Type: ${data.type}`;

  card.appendChild(title);
  card.appendChild(expiresIn);
  card.appendChild(expiresAt);
  card.appendChild(refreshToken);
  card.appendChild(tokenType);
  card.appendChild(type);
  container.appendChild(card);
 
}



// Call the renderData function to display data
renderData();
