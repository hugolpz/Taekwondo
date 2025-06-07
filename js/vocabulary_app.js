const { createApp, ref, onMounted, computed } = Vue;

createApp({
  setup() {
    const vocabulary = ref([]);
    const searchTerm = ref('');

    const fetchVocabularyData = async () => {
      // Try fetch (works online)
      try {
        const response = await fetch('js/data/vocabulary.json');
        if (response.ok) {
          vocabulary.value = await response.json();
          return;
        }
      } catch (error) {
        // Ignore, fallback below
      }
      // Fallback: use window.vocabularyData if present (for local file://)
      if (window.vocabularyData) {
        vocabulary.value = window.vocabularyData;
        return;
      }
      // Fallback: try XMLHttpRequest for file://
      try {
        await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.overrideMimeType("application/json");
          xhr.open('GET', 'js/data/vocabulary.json', true);
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200 || xhr.status === 0) {
                try {
                  vocabulary.value = JSON.parse(xhr.responseText);
                  resolve();
                } catch (err) {
                  reject(err);
                }
              } else {
                reject(new Error('XHR failed'));
              }
            }
          };
          xhr.send(null);
        });
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
