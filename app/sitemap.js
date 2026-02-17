export const dynamic = 'force-static'

export default function sitemap() {
    return [
        {
            url: 'https://xylotek.com/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]
}
