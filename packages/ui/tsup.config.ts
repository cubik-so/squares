import { defineConfig } from 'tsup'

export default defineConfig({
    entryPoints: ['src/index.ts'], // Entry point of your library
    format: ['cjs', 'esm'], // Output formats for CommonJS and ESM modules
    minify: false, // Whether to minify output
    splitting: true, // Enable code splitting for better tree shaking
    sourcemap: true, // Generate sourcemaps
    clean: true, // Clean the output directory before building
    outDir: 'lib', // Output directory
})
