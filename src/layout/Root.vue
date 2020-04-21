<template lang="pug">
  VApp
    DashboardCoreDrawer
</template>

<script>
export default {
  name: "Root",

  components: {
    DashboardCoreDrawer: () => import("@/core/components/Drawer"),
  },

  data: () => ({
    //
  })
};
</script>
