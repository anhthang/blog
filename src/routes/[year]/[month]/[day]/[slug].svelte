<script context="module">
    export function preload({ params, query }) {
        return {
            ...params,
        }
    }
</script>

<script>
    import { onMount } from 'svelte'
    import { goto } from '@sapper/app'

    onMount(() => {
        goto(`blog/${year}-${month}-${day}-${slug}`)
    })
    export let year
    export let month
    export let day
    export let slug
</script>
