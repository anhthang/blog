<script>
    import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte"
    import { stores } from "@sapper/app"

    import Header from '../components/Header.svelte'

    export let segment
</script>

<GoogleAnalytics {stores} id={process.env.GA_ID}/>

<div class="layout">
    <Header {segment} />

    <main>
        <slot />
    </main>

    <footer>
        <span>&copy; {new Date().getFullYear()} {process.env.AUTHOR}.</span>
    </footer>
</div>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        min-height: 100vh;
    }

    main {
        flex: 1;
        position: relative;
        margin: 0 auto;
        max-width: 1400px;
        background-color: white;
        padding: 1em 2em;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media (prefers-color-scheme: dark) {
        main {
            background-color: #272c30;
        }
    }

    footer {
        color: #aaa;
        font-size: 1em;
        font-family: Rubik, sans-serif;
        margin: 1em auto;
        max-width: 1400px;
        padding: 1em 2em;
        text-align: center;
        width: 100%;
    }
</style>
