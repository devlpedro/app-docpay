import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCdh2QAhOlfox9zJtDo1Amz7pmJeRUGhjg',
  authDomain: 'dexpix-65314.firebaseapp.com',
  projectId: 'dexpix-65314',
  storageBucket: 'dexpix-65314.appspot.com',
  messagingSenderId: '509978173097',
  appId: '1:509978173097:web:415e16b5cab81710f493b8'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const buttonGoogle = document.querySelector('.form-input-button-google');
buttonGoogle.addEventListener('click', handleGoogleSignIn);


function handleGoogleSignIn() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)

    .then((result) => {
      console.log(result);
      const user = result.user;

      const nameUser = document.querySelector('.names');
      nameUser.innerHTML = user.displayName;

      const userName = user.displayName;
      
      const userSedation = document.querySelector('.container-bg .header p');
      userSedation.innerHTML = `<p>Saudação ${userName}. Bem-vindo a plataforma Pay.</p>`;

    }).catch((error) => {
      console.log(error);

    });
}


// Authentication with user email and password with firebase
const userSubmitButtonSignIn = document.querySelector('#handle-send-from-user-sign-in-to-email');
userSubmitButtonSignIn.addEventListener('click', handleEmailSignIn);

function handleEmailSignIn() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password-type').value;

  console.log('hello user');
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);

      const nameUser = document.querySelector('.names');
      nameUser.innerHTML = user.displayName;

      const invalidUserName = user.displayName === null ? 'Anônimo(a)' : user.displayName;
      nameUser.innerHTML = invalidUserName;
      
      const userSedation = document.querySelector('.container-bg .header p');
      userSedation.innerHTML = `<p>Saudação ${invalidUserName}. Bem-vindo a plataforma Pay.</p>`;


    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}

