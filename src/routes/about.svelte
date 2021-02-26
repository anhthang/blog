<svelte:head>
    <title>About</title>
</svelte:head>

<div class="container">
    <h1>About</h1>
    <figure>
        <img src="profile-pic.jpg" alt="Anh Thang Bui" />
    </figure>
    <p>
        Hi, I'm <strong>Thang</strong>. I'm a software engineer from Hanoi, Vietnam.
    </p>
    <p>
        Updating...
    </p>
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
