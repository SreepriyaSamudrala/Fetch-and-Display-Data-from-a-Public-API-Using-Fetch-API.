const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUserData() {
  userContainer.innerHTML = "Loading...";

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = '';
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city} - ${user.address.zipcode}</p>
        `;
        userContainer.appendChild(userCard);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
    });
}

// Load data on page load
fetchUserData();

// Reload data on button click
reloadBtn.addEventListener('click', fetchUserData);
