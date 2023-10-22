<script>
    import { enhance } from "$app/forms";
</script>

<p>create account</p>

<form method="post" use:enhance>
    <label
        >nazwa użytkownika <input
            type="text"
            name="username"
            autocomplete="off"
        /></label
    >
    <label
        >hasło <input
            type="password"
            name="password"
            autocomplete="off"
        /></label
    >
    <button>zaloguj się</button>
</form>
