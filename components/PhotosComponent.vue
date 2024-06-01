<script>
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  name: 'PhotosComponent',
  data: () => ({
    photoList: [],
  }),
  methods: {
    async fetchPhotos() {
      await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => {
          this.photoList = json
        })
    },
  },
  // computed properties for reactive data
  computed: {
    numberOfPhotos() {
      return this.photoList.length
    },
    eventAlbums() {
      return this.photoList.filter(photo => photo.albumId % 2 === 0)
    },
    oddAlbums() {
      return this.photoList.filter(photo => photo.albumId % 2 !== 0)
    },
    percentageOfEventAlbums() {
      return (this.eventAlbums.length / this.numberOfPhotos) * 100
    },
  },
})
</script>

<template>
  <button @click="fetchPhotos">Fetch Photos</button>
  <p>Total Number of Photos: {{ numberOfPhotos }}</p>
  <p>Event Albums: {{ eventAlbums.length }} which is {{ percentageOfEventAlbums }}%</p>
  <p>Odd Albums: {{ oddAlbums.length }}</p>
  <ul>
    <li v-for="photo in photoList" :key="`photo-id-${photo.id}`">

      <img :src="photo.thumbnailUrl" :alt="photo.title" />
    </li>
  </ul>
  <span>
    <slot />
  </span>
</template>