/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix:'https://cdn.jsdelivr.net',
    images:{
        remotePatterns: [
        {
            protocol:'https',
            hostname: 'i.pravatar.cc',
            port:'',
            pathname:'**'
        },
        {
            protocol: 'https',
            hostname: 'apistore.cybersoft.edu.vn',
            port: '',
            pathname: '/**'
        }
    ]
    }
};

export default nextConfig;
