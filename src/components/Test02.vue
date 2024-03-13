<template>
  <div>
    <!-- <el-table :data="obj.data" style="width: 100%">
        <el-table-column prop="groupId" label="编号" width="180" />
        <el-table-column prop="groupName" label="组名" width="180" />
      </el-table> -->
    <el-table :data="obj.data" style="width: 100%">
      <el-table-column prop="groupId" label="编号" width="180" />
      <el-table-column prop="groupName" label="组名" width="180" />
      <el-table-column type="expand">
        <template #default="props">
          <div m="4">
            <el-table
              :data="props.row.users"
              :default-sort="{ prop: 'createdAt', order: 'descending' }"
            >
              <el-table-column label="name" prop="name" />
              <el-table-column label="email" prop="email" />
              <el-table-column label="role" prop="role" />
              <el-table-column
                label="createdAt"
                prop="createdAt"
                sortable>
              </el-table-column>
            </el-table>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import dayjs from "dayjs";

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


const timeFormat = computed(
  () => (time) => dayjs(new Date(time)).format("YYYY-MM-dd HH-mm-ss")
);
</script>


<style>
</style>