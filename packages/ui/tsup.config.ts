import { defineConfig } from 'tsup'

const isProduction = process.env.NODE_ENV === 'production'
export default defineConfig({
    entryPoints: ['src/**/*'], // Entry point of your library
    format: ['cjs', 'esm'], // Output formats for CommonJS and ESM modules
    minify: false, // Whether to minify output
    splitting: true, // Enable code splitting for better tree shaking
    sourcemap: false, // Generate sourcemaps
    clean: true, // Clean the output directory before building
    outDir: 'lib', // Output directory
    dts: true, // Generate .d.ts file
    target: 'esnext',
    keepNames: true,
    treeshake: true,
})
