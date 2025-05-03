"use client";

import Head from 'next/head';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/auth-hero.svg',
  twitterCard = 'summary',
}: SEOProps) => {
  // Base URL for canonical links and OG images
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://github.com/reactatomics/modern-auth';
  
  // Create full URLs if not already absolute
  const fullCanonicalUrl = canonicalUrl?.startsWith('http') 
    ? canonicalUrl
    : `${baseUrl}${canonicalUrl || ''}`;
    
  const fullOgImageUrl = ogImage?.startsWith('http')
    ? ogImage
    : `${baseUrl}${ogImage}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical link */}
      {canonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />
    </Head>
  );
};

export default SEO;