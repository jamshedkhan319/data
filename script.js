/ Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkmrohn4d2N8Fr6oWO7LAVAOGdRSzkqNk",
    authDomain: "html-fast.firebaseapp.com",
    databaseURL: "https://html-fast-default-rtdb.firebaseio.com",
    projectId: "html-fast",
    storageBucket: "html-fast.firebasestorage.app",
    messagingSenderId: "131113718832",
    appId: "1:131113718832:web:c8bee5b134623c85b249f5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Form Handling
document.getElementById('dataForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form reload
    
    const textInput = document.getElementById('textInput').value;
    const statusMessage = document.getElementById('statusMessage');

    // Save Data to Firebase
    const ref = firebase.database().ref('submissions').push();
    ref.set({
        text: textInput,
        timestamp: Date.now()
    })
    .then(() => {
        // Show success message
        statusMessage.textContent = 'Data submitted successfully!';
        statusMessage.style.color = 'green';
        document.getElementById('dataForm').reset();
    })
    .catch((error) => {
        // Show error message
        statusMessage.textContent = 'Error: ' + error.message;
        statusMessage.style.color = 'red';
    });
});
