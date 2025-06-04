const { createApp, ref, onMounted, computed } = Vue;

createApp({
  setup() {
    const vocabulary = ref([]);
    const searchTerm = ref('');

    const fetchVocabularyData = async () => {
      try {
        const response = await fetch('js/data/vocabulary.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        vocabulary.value = await response.json();
      } catch (error) {
        console.error("Could not fetch vocabulary data:", error);
      }
    };

    const filteredVocabulary = computed(() => {
      if (!searchTerm.value) {
        return vocabulary.value;
      }
      const lowerSearchTerm = searchTerm.value.toLowerCase();
      return vocabulary.value.filter(term => {
        return Object.values(term).some(value =>
          String(value).toLowerCase().includes(lowerSearchTerm)
        );
      });
    });

    onMounted(fetchVocabularyData);

    return {
      vocabulary,
      searchTerm,
      filteredVocabulary
    };
  }
}).mount('#app');
