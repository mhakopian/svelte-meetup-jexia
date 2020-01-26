<script>
  import MeetupItem from '../MeetupItem/MeetupItem.svelte'

  export let meetups
</script>

<style lang="scss">
  @import 'style.scss';
</style>

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem
      id={meetup.id}
      title={meetup.title}
      subtitle={meetup.subtitle}
      description={meetup.description}
      imageUrl={meetup.imageUrl}
      email={meetup.contactEmail}
      address={meetup.address}
      isFav={meetup.isFavorite}
      on:togglefavorite />
  {/each}
</section>
