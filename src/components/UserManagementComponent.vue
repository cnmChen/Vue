<template>  
    <el-table :data="obj.data" style="width: 100%">  
      <el-table-column label="Date" width="180">  
        <template #default="scope">  
          <div style="display: flex; align-items: center">  
            <el-icon><timer /></el-icon>  
            <span style="margin-left: 10px">{{ scope.row.registrationDate }}</span>  
          </div>  
        </template>  
      </el-table-column>  
      <el-table-column label="Name" width="180">  
        <template #default="scope">  
          <el-popover effect="light" trigger="hover" placement="top" width="auto">  
            <template #default>  
              <div>Name: {{ scope.row.username }}</div>  
              <div>email: {{ scope.row.email }}</div> 
            </template>  
            <template #reference>  
              <el-tag>{{ scope.row.username }}</el-tag>  
            </template>  
          </el-popover>  
        </template>  
      </el-table-column>  
      <el-table-column label="Operations">  
        <template #default="scope">  
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">禁用</el-button>  
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>  
        </template>  
      </el-table-column>  
    </el-table>  
  </template>  
<script setup>
import { reactive } from "vue";
function handleEdit(index, row) {  
   
  if (row.status.code !== 0) {  

    alert("成功")  
    
  } 
}  
function handleDelete(index, row) {
    
    console.log(row.id);
    obj.data = obj.data.filter(item => item._id !== row._id)
    alert("删除成功")
}
const obj = reactive({
  status: "success",
  data: [
    {
      id: "61f7c9e68d2fa1b8d4a2a9f0",
      username: "john.doe",
      email: "john.doe@example.com",
      registrationDate: "2022-01-01T00:00:00Z",
      status: { code: 1, description: "Active" },
    },
    {
      id: "71f7c9e68d2fa1b8d4a2a9f06",
      username: "john.doe",
      email: "john.doe@example.com",
      registrationDate: "2022-01-01T00:00:00Z",
      status: { code: 1, description: "Active" },
    },
    {
      id: "41f7c9e68d2fa1b8d4a2a9f8",
      username: "john.doe",
      email: "john.doe@example.com",
      registrationDate: "2022-01-01T00:00:00Z",
      status: { code: 1, description: "Active" },
    },
    {
      id: "31f7c9e68d2fa1b8d4a2a9f9",
      username: "john.doe",
      email: "john.doe@example.com",
      registrationDate: "2022-01-01T00:00:00Z",
      status: { code: 1, description: "Active" },
    },
    // 更多用户...
  ],
});
</script>

<style lang="scss" scoped>
</style>