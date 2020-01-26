<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '@ui/Button.svelte'
  import Badge from '@ui/Badge.svelte'

  export let id
  export let title
  export let subtitle
  export let imageUrl
  export let description
  export let address
  export let email
  export let isFav

  const dispatch = createEventDispatcher()
</script>

<style lang="scss">
 @import './style.scss';
</style>

<article>
  <header>
    <h1>
      {title}
      {#if isFav}
        <Badge>FAVORITE</Badge>
      {/if}
    </h1>
    <h2>{subtitle}</h2>
    <p>{address}</p>
  </header>
  <div class="image">
    <img src={imageUrl} alt={title} />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <Button href="mailto:{email}">Contact</Button>
    <Button
      mode="outline"
      color={isFav ? null : 'success'}
      type="button"
      on:click={() => dispatch('togglefavorite', id)}>
      {isFav ? 'Unfavorite' : 'Favorite'}
    </Button>
  </footer>
</article>
