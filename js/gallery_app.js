const { createApp, ref, onMounted, computed } = Vue;

createApp({
  setup() {
    const sections = ref([]);
    const currentSectionIndex = ref(0);

    const fetchGalleryData = async () => {
      try {
        const response = await fetch('js/data/gallery.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        sections.value = await response.json();
        if (sections.value.length > 0) {
          currentSectionIndex.value = 0;
        }
      } catch (error) {
        console.error("Could not fetch gallery data:", error);
      }
    };

    const currentSection = computed(() => {
      return sections.value.length > 0 ? sections.value[currentSectionIndex.value] : null;
    });

    const showSection = (index) => {
      if (index >= 0 && index < sections.value.length) {
        currentSectionIndex.value = index;
      }
    };

    onMounted(fetchGalleryData);

    return {
      sections,
      currentSectionIndex,
      currentSection,
      showSection
    };
  }
}).mount('#app');
