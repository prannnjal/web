export const dynamic = 'force-static'

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/ads.txt',
            }
        ],
        sitemap: 'https://xylotek.in/sitemap.xml',
    }
}
