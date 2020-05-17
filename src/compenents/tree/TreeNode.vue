<template>
  <div>
     <li :class="['node',node.children?'':'node-leaf']" v-for="node in data" :key='node.index'>
        <div v-if="node.children" @click="node.open = !node.open" class="li-hover-item" :style="{ paddingLeft: ( node.level*20 + 10 ) + 'px' }">
        <span :class="[node.open ? 'minus-sign-icon' : 'plus-icon']"></span>
            {{node.name}}
        </div>
        <div v-else class="li-hover-item"
            @click.stop='selectItem(node)'
            :style="{ paddingLeft: ( node.level*20 + 10 ) + 'px' }">
            <span class="minus-sign-icon"></span>
                {{node.name}}
            <span class="tree-node-mark" :class="{'el-icon-circle-check' : node.checked}"></span>
        </div>
        <!-- 支持slideDown slideUp效果的动画 -->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave">
            <ul v-if="node.children" v-show="node.open">
                <TreeNode :data="node.children"></TreeNode>
            </ul>
        </transition>
    </li>
  </div>
</template>

<script>
import TreeNode from './TreeNode'

export default {
  name: 'TreeNode',
  props: ['data'],
  data () {
    return {
    }
  },
  components: {
    TreeNode
  },
  methods: {
    selectItem: function (node) {
      node.checked = !node.checked
    },
    beforeEnter: function (el) {
      el.style.transition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out'
      if (!el.dataset) el.dataset = {}

      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom

      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    },
    enter: function (el) {
      el.dataset.oldOverflow = el.style.overflow
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      } else {
        el.style.height = ''
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      }

      el.style.overflow = 'hidden'
    },
    afterEnter: function (el) {
      el.style.transition = ''
      el.style.height = ''
      el.style.overflow = el.dataset.oldOverflow
    },
    beforeLeave: function (el) {
      if (!el.dataset) el.dataset = {}
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom
      el.dataset.oldOverflow = el.style.overflow

      el.style.height = el.scrollHeight + 'px'
      el.style.overflow = 'hidden'
    },
    leave: function (el) {
      if (el.scrollHeight !== 0) {
        el.style.transition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out'
        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      }
    },
    afterLeave: function (el) {
      el.style.transition = ''
      el.style.height = ''
      el.style.overflow = el.dataset.oldOverflow
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }
  }
}
</script>

<style lang="scss" scoped >
    .node {
        cursor: pointer;
        font-family: monospace;
        color: #333;
        line-height: 30px;
        font-size: 12px;
        font-weight:400;
        color:rgba(17,17,17,1);

        .li-hover-item{
            &:hover{
                background: #E4E4E4;
            }
        }
        .cover-ctn{
            position: absolute;
            left: 0;
        }
        .tree-node-mark{
            display: block;
            width: 14px;
            height: 14px;
            border: 1px solid red;
            border-radius: 50%;
            text-align: center;
            float: right;
            margin-right: 20px;
            margin-top: 7px;
            border: 1px solid rgba(224,224,224,1);
            background: white;

            &.el-icon-circle-check{
                background: red;
            }
        }
    }
    .minus-sign-icon{
        position: relative;
        display: inline-block;
        width: 12px;
        height: 11px;
        border: 1px solid #A5A5A5;
        border-radius: 2px;
        vertical-align: middle;
        margin-top: -2px;

        &::before{
            content: '';
            display: inline-block;
            position: absolute;
            background: #8c8a8a;
            height: 2px;
            width: 6px;
            top: 4px;
            left: 3px;
        }
    }
    .plus-icon{
        position: relative;
        display: inline-block;
        width: 12px;
        height: 11px;
        border: 1px solid #A5A5A5;
        border-radius: 2px;
        vertical-align: middle;
        margin-top: -2px;

        &::before{
            content: '';
            display: inline-block;
            position: absolute;
            background: #8c8a8a;
            height: 2px;
            width: 6px;
            top: 4px;
            left: 3px;
        }
        &::after{
            content: '';
            display: inline-block;
            position: absolute;
            width: 2px;
            height: 7px;
            top: 2px;
            left: 5px;
            background: #8c8a8a;
        }
    }

    .node-leaf {
        // color: #999;
    }

    ul, li {
        // padding-left: 1em;
        list-style-type: none;
    }
    .close-open-icon{
        width: 14px;
        height: 14px;
        border-radius: 2px;
        border: 1px solid #A5A5A5;
        display: inline-block;
        text-align: center;
        line-height: 9px;
        font-size: 14px;
        color: #666666;
        font-weight: 400;
        vertical-align: middle;
        margin-top: -2px;
        margin-right: 4px;
    }
</style>
