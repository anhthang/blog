<script context="module">
    export function preload() {
        return this.fetch(`resume.json`)
            .then((r) => r.json())
            .then((resume) => {
                return { resume }
            })
    }
</script>

<script>
    export let resume
</script>

<svelte:head>
    <title>Resume | {process.env.AUTHOR}</title>
</svelte:head>

<div class="container">
    <article class="content">
        {@html resume.html}
    </article>
</div>
