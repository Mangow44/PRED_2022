<script>
	import { goto } from '$app/navigation';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

	let email;
	let password;
	let errorMessage = '';
	const errors = {
		'auth/missing-email': 'Veuillez remplir tous les champs.',
		'auth/invalid-email': 'Adresse email invalide.',
		'auth/wrong-password': 'Mot de passe invalide.',
		'auth/user-not-found': 'Email ou mot de passe invalide.'
	};
	const auth = getAuth();

	function connexion() {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				goto('/');
			})
			.catch((error) => {
				if (errors[error.code]) errorMessage = errors[error.code];
			});
	}
</script>

<div class="flex flex-col w-full h-auto mt-[5rem] py-[1rem] overflow-auto">
	<input
		placeholder="Adresse email"
		type="email"
		name="userEmail"
		id="email"
		bind:value={email}
		class="w-[50%] h-12 my-[1rem] m-auto border-2 pl-1"
	/>

	<input
		placeholder="Mot de passe"
		type="password"
		name="userPassword"
		id="password"
		bind:value={password}
		class="w-[50%] h-12 m-auto my-[1rem] border-2 pl-1"
	/>

	<p
		class="w-full h-6 mt-12 overflow-auto 
			text-center text-red-500 font-bold shrink-0"
	>
		{errorMessage}
	</p>

	<button
		class="mx-auto font-bold mt-10 w-[40%] h-12 
				rounded-lg shrink-0
				border-2"
		on:click={() => {
			connexion();
		}}
	>
		Se connecter
	</button>
</div>
