<template>
<div>
    <table>
        <thead>
            <th>
                商品名
            </th>
            <th>
                价格
            </th>
            <th>
                平均分
            </th>
        </thead>
        <tbody>
            <tr v-for="(item,index) in obj.data" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ avg(item.reviews) }}</td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script setup>
import { reactive } from "vue";

    function avg(arr){
        return arr.reduce((sum,value)=> { return sum+value.rating},0)/arr.length
    }
const obj = reactive({
  status: "success",
  data: [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      price: 99.99,
      category: {
        id: 1,
        name: "Electronics",
      },
      images: ["image1.jpg", "image2.jpg"],
      reviews: [
        {
          id: 1,
          rating: 4,
          comment: "Great product!",
          author: "John Doe",
        },
        {
          id: 2,
          rating: 1,
          comment: "bad product!",
          author: "John",
        },
        {
          id: 3,
          rating: 4,
          comment: "bad product!",
          author: "John",
        },
        {
          id: 4,
          rating: 3,
          comment: "bad product!",
          author: "John",
        },
        // 更多评论...
      ],
    },
    // 更多商品...
  ],
});
</script>

<style>
</style>