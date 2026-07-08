// Asset imports bundled by Bun resolve to a URL string.
declare module "*.png" {
    const src: string
    export default src
}

// Side-effect CSS imports are handled by Bun's bundler.
declare module "*.css"
