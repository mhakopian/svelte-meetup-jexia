<script>
  import { onMount } from 'svelte'
  import Header from './UI/Header.svelte'
  import MeetupGrid from './Meetups/MeetupGrid.svelte'
  import TextInput from './UI/TextInput.svelte'
  import Button from './UI/Button.svelte'
  import EditMeetup from './Meetups/EditMeetup.svelte'
  import { getDataset } from './helpers/jexia-dataset'

  let editMode = null
  let meetups = []

  const meetupDataset = getDataset('meetup')

  onMount(() => {
    // get meetups
    meetupDataset
      .select()
      .subscribe(_meetups => meetups = _meetups)
  })

  function addMeetup ({ detail: newMeetup }) {
    meetupDataset
      .insert(newMeetup)
      .subscribe(([createdMeetup]) => {
        meetups = [createdMeetup, ...meetups]
        cancelEdit()
      })
  }

  function cancelEdit () {
    editMode = null;
  }

  function toggleFavorite ({ detail: meetupId }) {
    const meetup = meetups.find(m => m.id === meetupId)

    meetupDataset
      .update({
        id: meetupId,
        isFavorite: meetup.isFavorite === undefined ? true : !meetup.isFavorite,
      })
      .subscribe(([updatedMeetup]) => {
        Object.assign(meetup, updatedMeetup)
        meetups = [...meetups]
        cancelEdit()
      })
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
  <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>
