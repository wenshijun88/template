<template>
    <div class="container">
        <fm-making-form
                ref="makingform"
                style="height: 800px;"
                preview
                generate-code
                generate-json
        >
            <template slot="action">
                <!-- 自定义操作区域插槽 -->
                <el-button type="text" icon="el-icon-upload">保存</el-button>
            </template>
        </fm-making-form>
    </div>
</template>

<script>
    export default {
        name: 'formMaking'
    }
</script>
