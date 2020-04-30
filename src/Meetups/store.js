
import { writable } from 'svelte/store'
import { dataOperations, jexiaClient } from 'jexia-sdk-js/browser'
import { jexiaCredentials } from '../env'

const dataModule = dataOperations()

jexiaClient().init(jexiaCredentials, dataModule)

const meetupDataset = dataModule.dataset('meetup')

export function meetupStore () {
  const { subscribe, set, update } = writable([])

  // load meetups
  meetupDataset
    .select()
    .sortAsc('created_at')
    .subscribe(allMeetups => {
      set(allMeetups)
    })

  function insert (newMeetup) {
    meetupDataset
      .insert(newMeetup)
      .subscribe(([createdMeetup]) => {
        update(allMeetups => [createdMeetup, ...allMeetups])
      })
  }

  function toggleFavorite ({ id, isFavorite }) {
    meetupDataset
      .update({
        id,
        isFavorite: !isFavorite,
      })
      .subscribe(([updatedMeetup]) => {
        update(allMeetups => {
          // get the index of the updated meetup
          const updatedIndex = allMeetups.findIndex(meetup => meetup.id === id)
          // copy original array
          const updatedMeetups = [...allMeetups]
          // replace updated meetup
          updatedMeetups.splice(updatedIndex, 1, updatedMeetup)

          return updatedMeetups
        })
      })
  }

  return {
    subscribe,
    insert,
    toggleFavorite
  }
}
