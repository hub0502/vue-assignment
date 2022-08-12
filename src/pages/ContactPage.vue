<template>
  <div>
    <custom-compo />

    <form method="get">
        <fieldset>
            <legend>문의</legend>
            <tr>
                <td>이름</td>
                <td><input type="text" /></td>
            </tr>

            <tr>
                <td>연락처</td>
                <td><input type="number" /></td>
            </tr>

            <tr>
                <td>이메일</td>
                <td><input type="email" /></td>
            </tr>

            <tr>
                <td>문의</td>
                <td><textarea></textarea></td>
            </tr>

            <input type="submit" value="submit" />
        </fieldset>
    </form>
  </div>
</template>

<script>
import CustomCompo from '../components/HeaderComponent.vue'
export default {
    components:{
        CustomCompo,
    },
}
</script>

<style>

</style>