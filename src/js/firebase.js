import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
console.log('Está funcionando');

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
      
      const userSedation = document.querySelector('.container-bg .header p');
      userSedation.innerHTML = '<p>Saudação usuário. Bem-vindo a plataforma Pay.</p>';

    }).catch((error) => {
      console.log(error);

    });
}