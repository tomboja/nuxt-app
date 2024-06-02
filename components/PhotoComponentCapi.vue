<script setup>
  import { ref, onMounted, computed } from 'vue'

  const photoList = ref([])
  const numberOfPhotos = computed(() => photoList.value.length)
  const eventAlbums = computed(() => photoList.value.filter(photo => photo.albumId % 2 === 0))
  const oddAlbums = computed(() => photoList.value.filter(photo => photo.albumId % 2 !== 0))
  const percentageOfEventAlbums = computed(() => (eventAlbums.value.length / numberOfPhotos.value) * 100)

  const fetchPhotos = async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        photoList.value = json
      })
  }

</script>