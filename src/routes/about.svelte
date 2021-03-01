<svelte:head>
    <title>About me</title>
</svelte:head>

<div class="container">
    <h1>About me</h1>
    <figure>
        <img src="profile-pic.jpg" alt="Anh Thang Bui" />
    </figure>
    <p>
        Hi 👋, I'm <strong>Thang</strong>. I'm a software engineer from Hanoi, Vietnam.
    </p>

    <h2>🙈 My fantastic beasts</h2>
    <ul>
        <li><a href="https://marketplace.visualstudio.com/items?itemName=buianhthang.xml2json">XML to JSON</a></li>
        <li><a href="https://marketplace.visualstudio.com/items?itemName=buianhthang.gitflow">gitflow</a></li>
        <li><a href="https://awesome-vietnamese.anhthang.org">🇻🇳 Awesome made by Vietnameses</a></li>
    </ul>

    <h2>🔭 Where to find me</h2>
    <ul>
        <li><a href="https://github.com/anhthang">🧑🏻‍💻 GitHub</a></li>
        <li><a href="https://twitter.com/anhthangbui">🐦 Twitter</a></li>
        <li><a href="https://instagram.com/anhthangbui">📸 Instagram</a></li>
    </ul>
</div>

<style>
    figure {
        float: right;
        margin: -3em -7em 2em 2em;
        max-width: 400px;
    }

    figure img {
        border-radius: 8px;
        height: 300px;
        width: 300px;
    }

    @media (max-width: 1020px) {
        figure {
            float: none;
            margin: 0 auto 2em;
        }
    }
</style>
