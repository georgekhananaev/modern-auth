import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: [
                '/api/',
                '/dashboard/',
                '/profile/',
            ],
        },
        sitemap: 'https://github.com/reactatomics/modern-auth/sitemap.xml',
    };
}