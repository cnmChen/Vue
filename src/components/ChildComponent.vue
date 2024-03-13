<template>
    <div>
        <el-table :data="myData.data" style="width: 100%">
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
import { defineProps } from 'vue';
const props = defineProps({  
  myData: {  
    type: Object,  
    required: true,   
  },
});

</script>

<style lang="scss" scoped>

</style>