<template>
  <div>
    <h1>MINI PROJECTS</h1>

    <div style="margin-bottom: 30px;">
      Here are some mechanics and small projects I've worked on that are not complete games.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});

</script>
