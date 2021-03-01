<svelte:head>
    <title>Anh Thang Bui</title>
</svelte:head>

<div class="home-container">
    <figure>
        <img alt="Person coding" src="undraw_coding.svg" />
        <figcaption>
            Illustration thanks to <a href="https://undraw.co" target="_blank"
                >Undraw</a
            >
        </figcaption>
    </figure>

    <div class="home-about-me">
        <h1>Anh Thang Bui</h1>
        <h3>Software Engineer</h3>
        <p>
            Mainly, I write Node.js
        </p>
    </div>
</div>

<style>
    .home-container {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: center;
        margin: 2em 0;
        min-height: 400px;
    }

    .home-about-me {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    }

    h1 {
        font-weight: 700;
        margin-bottom: 0.5em;
    }

    /* p {
        font-size: 1.4em;
        line-height: 1.5;
    } */

    figure {
        margin: 0 1em;
        text-align: center;
    }

    figcaption {
        font-size: 0.8em;
        font-style: italic;
    }

    img {
        width: 100%;
        max-width: 400px;
    }

    @media (max-width: 1020px) {
        /* p {
            font-size: 1.2em;
        } */

        img {
            max-width: 300px;
        }
    }

    @media (max-width: 800px) {
        .home-container {
            flex-direction: column;
        }

        .home-about-me {
            flex: 0;
            padding-bottom: 2em;
            text-align: center;
        }

        .home-about-me h1 {
            margin-top: 1em;
        }
    }
</style>
