<template>
      <div>
        <ChildComponent :myData="obj"></ChildComponent>
      </div>
</template>

<script setup>
import { reactive } from "vue";
import ChildComponent from "./ChildComponent.vue";
    const obj = reactive({
  status: "success",
  data: [
    {
      groupId: 1,
      groupName: "Admin Group",
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-01-01T00:00:00Z",
        },
        {
          id: 2,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-02-01T00:00:00Z",
        },
        {
          id: 3,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-03-01T00:00:00Z",
        },
        // 更多用户...
      ],
    },
    {
      groupId: 2,
      groupName: "Editor Group",
      users: [
      {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-01-01T00:00:00Z",
        },
        {
          id: 2,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-02-01T00:00:00Z",
        },
        {
          id: 3,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-03-01T00:00:00Z",
        },
      ],
    },
    // 更多用户组...
  ],
});
</script>

<style lang="scss" scoped>

</style>