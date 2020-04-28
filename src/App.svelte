<script>
  import Header from '@ui/Header.svelte'
  import TextInput from '@ui/TextInput.svelte'
  import Button from '@ui/Button.svelte'
  import MeetupGrid from './Meetups/MeetupGrid/MeetupGrid.svelte'
  import EditMeetup from './Meetups/EditMeetup/EditMeetup.svelte'
  import { meetupStore } from './Meetups/store'

  let editMode = null

  const store = meetupStore()

  function addMeetup ({ detail: newMeetup }) {
    store.insert(newMeetup)
    cancelEdit()
  }

  function cancelEdit () {
    editMode = null
  }

  function toggleFavorite ({ detail: meetupId }) {
    store.toggleFavorite(meetupId)
    cancelEdit()
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = "add")}>New Meetup</Button>
  </div>
  {#if editMode === "add"}
    <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
  {/if}
  <MeetupGrid meetups={$store} on:togglefavorite={toggleFavorite} />
</main>
