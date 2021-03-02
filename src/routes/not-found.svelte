<svelte:head>
    <title>404 | {process.env.AUTHOR}</title>
</svelte:head>

<div class="not-found">
    <img alt="404" src="undraw_page_not_found.svg" />

    <a class="go-back" href="/">Back to Homepage</a>
</div>

<style>
    .not-found {
        min-height: 400px;
        margin: auto auto;
        text-align: center;
    }

    .go-back {
        display: block;
        margin-top: 2em;
    }

    img {
        width: 100%;
        max-width: 400px;
    }

    @media (max-width: 1020px) {
        img {
            max-width: 300px;
        }
    }
</style>