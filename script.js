// Function to fetch data from the API
async function fetchData() {
	//alert(`Fragment extracted: ${fragment}`);
	//if (!fragment) {
    //    alert("No fragment found in the URL.");
    //    return;
    //  }

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
container.appendChild(data);
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.textContent = item.access_token;

        const body = document.createElement('p');
        body.textContent = item.expires_in;

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(data);
    });
}



// Call the renderData function to display data
renderData();
