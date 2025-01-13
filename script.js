// Références aux éléments
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const toggleLink = document.getElementById('toggle-link');
const confirmPasswordGroup = document.getElementById('confirm-password-group');

// État actuel (true = login, false = register)
let isLogin = true;

// Basculer entre Login et Register
toggleLink.addEventListener('click', () => {
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = 'LOGIN';
    submitBtn.textContent = 'Login';
    toggleLink.textContent = 'Pas encore inscrit ? Enregistrez-vous';
    confirmPasswordGroup.style.display = 'none';
  } else {
    formTitle.textContent = 'REGISTER';
    submitBtn.textContent = 'Register';
    toggleLink.textContent = 'Déjà inscrit ? Connectez-vous';
    confirmPasswordGroup.style.display = 'block';
  }
});
