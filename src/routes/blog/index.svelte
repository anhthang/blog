<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`)
            .then((r) => r.json())
            .then((posts) => {
                return { posts }
            })
    }
</script>

<script>
    export let posts
</script>

<svelte:head>
    <title>Blog | {process.env.AUTHOR}</title>
</svelte:head>

<div class="container">
    <h1>Blog</h1>
    {#each posts as post, index}
        {#if index}
            <hr />
        {/if}
        <div class="post-item">
            <h2>
                <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
            </h2>
            <div class="post-item-footer">
                <span class="post-item-date">{post.date}</span>
            </div>
            {#if post.excerpt}
                <p>{@html post.excerpt}</p>
            {/if}
            {#each post.tags as tag}
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="post-tag">#{tag}</a>
            {/each}
        </div>
    {/each}
</div>

<style>
    h2,
    .post-item-footer {
        font-family: Rubik, sans-serif;
        font-weight: 600;
        margin: 1.2em 0 0;
    }

    .post-item-date {
        color: #aaa;
        text-align: left;
        text-transform: uppercase;
        margin-right: 16px;
    }

    .post-tag {
        color: #64707d;
        border-radius: 5px;
        padding: 0.25rem;
        display: inline-block;
    }

    hr {
        margin: 3rem auto;
    }
</style>
