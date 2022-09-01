import typescript from "@rollup/plugin-typescript";
import vue from "@vitejs/plugin-vue";

export default {
    external: ['vue'],
    plugins: [typescript({
        sourceMap: false
    }), vue()],
    input: {
        index: 'src/components/index.ts',
        injectionKeys: 'src/InjectionKeys.ts',
        classes: 'src/classes/AppConfig.ts'
    },
    output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js'
    }
}
