<svelte:head>
    <title>Anh Thang Bui</title>
</svelte:head>

<div class="home-container">
    <div class="home-typewriter">
        <h1>Welcome to my Blog</h1>
    </div>

    <figure>
        <img alt="Person coding" src="undraw_coding.svg" />
        <figcaption>
            Illustration thanks to <a href="https://undraw.co" target="_blank"
                >Undraw</a
            >
        </figcaption>
    </figure>
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

    .home-typewriter {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #8E71A2; }
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

        .home-typewriter {
            flex: 0;
            padding-bottom: 2em;
            text-align: center;
        }
    }
</style>
