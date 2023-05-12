/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export'
}
module.exports = {
    reactStrictMode: false,
    webpack: (config, { isServer }) => {

        // If client-side, don't polyfill `fs`
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                net: false,
                dns: false,
                child_process: false,
                tls:false,

            };
        }

        return config;
    },
    output: 'export',
    images: {
        loader: "custom",
        imageSizes: [10, 16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    transpilePackages: ["next-image-export-optimizer"],
    env: {
        nextImageExportOptimizer_imageFolderPath: "src/images",
        nextImageExportOptimizer_exportFolderPath: "out",
        nextImageExportOptimizer_quality: 75,
        nextImageExportOptimizer_storePicturesInWEBP: true,
        nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",

        // If you do not want to use blurry placeholder images, then you can set
        // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
        // `placeholder="empty"` to all <ExportedImage> components.
        nextImageExportOptimizer_generateAndUseBlurImages: false,
    },
};
// module.exports = nextConfig
