<template>
  <div>
    <ul class="tree-ctn">
      <TreeNode :data='data'></TreeNode>
    </ul>
  </div>
</template>

<script>
import TreeNode from './TreeNode'

export default {
  name: 'Tree',
  props: ['data'],
  data () {
    return {
    }
  },
  components: {
    TreeNode
  }
}
</script>

<style lang="scs" scoped >
.tree-ctn{
  border-radius: 2px;
  border: 1px solid rgba(208,208,208,1);
  position: relative;
  max-height: 300px;
  overflow-y: auto;
  // 禁止选中文字
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
}
</style>
