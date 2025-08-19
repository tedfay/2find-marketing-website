import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '2Find Marketing - Strategic Marketing Consulting & Fractional CMO Services | Chicago',
  description: 'Expert marketing consulting, retained services, and fractional executive leadership for small to mid-size businesses. 30+ years experience. Serving Chicago and nationwide.',
  keywords: 'marketing consultant, fractional CMO, marketing strategy, business growth, Chicago marketing consultant, retained marketing services, marketing executive',
  robots: 'index, follow',
  authors: [{ name: 'Ted Fay, 2Find Marketing' }],
  openGraph: {
    type: 'website',
    url: 'https://www.2findmarketing.com/',
    title: '2Find Marketing - Strategic Marketing Consulting & Fractional CMO Services',
    description: 'Expert marketing consulting, retained services, and fractional executive leadership for small to mid-size businesses.',
    siteName: '2Find Marketing',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2Find Marketing - Strategic Marketing Consulting & Fractional CMO Services',
    description: 'Expert marketing consulting, retained services, and fractional executive leadership for small to mid-size businesses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.2findmarketing.com/" />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="Chicago, Evanston" />
        <meta name="geo.position" content="42.0451;-87.6877" />
        <meta name="ICBM" content="42.0451, -87.6877" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.2findmarketing.com/#organization",
                  "name": "2Find Marketing, LLC",
                  "legalName": "2Find Marketing, LLC",
                  "url": "https://www.2findmarketing.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.2findmarketing.com/logo.svg",
                    "width": 400,
                    "height": 200
                  },
                  "description": "Strategic marketing consulting, retained services, and fractional executive leadership. Expert guidance for small to mid-size businesses seeking growth through smarter marketing strategies.",
                  "foundingDate": "2020",
                  "numberOfEmployees": {
                    "@type": "QuantitativeValue",
                    "minValue": 1,
                    "maxValue": 50
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Evanston",
                    "addressRegion": "IL",
                    "addressCountry": "US"
                  },
                  "areaServed": [
                    {
                      "@type": "State",
                      "name": "Illinois"
                    },
                    {
                      "@type": "Country",
                      "name": "United States"
                    },
                    {
                      "@type": "City",
                      "name": "Chicago"
                    }
                  ],
                  "serviceArea": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": 42.0451,
                      "longitude": -87.6877
                    },
                    "geoRadius": "50 miles"
                  },
                  "telephone": "+1-312-838-2289",
                  "email": "ted.fay@2findmarketing.com",
                  "sameAs": [
                    "https://www.linkedin.com/company/2find-marketing"
                  ],
                  "founder": {
                    "@id": "https://www.2findmarketing.com/#person"
                  },
                  "employee": {
                    "@id": "https://www.2findmarketing.com/#person"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://www.2findmarketing.com/#person",
                  "name": "Ted Fay",
                  "jobTitle": "Principal Consultant",
                  "worksFor": {
                    "@id": "https://www.2findmarketing.com/#organization"
                  },
                  "url": "https://www.2findmarketing.com",
                  "email": "ted.fay@2findmarketing.com",
                  "telephone": "+1-312-838-2289",
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "name": "30+ Years Marketing Experience",
                      "description": "Three decades of experience in digital marketing, strategy development, and business growth"
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "name": "Marketing Strategy Specialist",
                      "description": "Expert in marketing automation, analytics, platform consolidation, and AI integration"
                    }
                  ],
                  "knowsAbout": [
                    "Marketing Strategy",
                    "Digital Marketing",
                    "Marketing Automation",
                    "Analytics Implementation",
                    "Fractional Executive Services",
                    "Business Growth Strategy",
                    "Platform Consolidation",
                    "AI Integration",
                    "Marketing Operations"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Evanston",
                    "addressRegion": "IL",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.2findmarketing.com/#consulting",
                  "name": "Marketing Consulting",
                  "description": "Expert marketing guidance and strategic consulting. Get focused, actionable marketing guidance when you need it most. We help you clarify your strategy and next steps—no jargon, just real advice.",
                  "provider": {
                    "@id": "https://www.2findmarketing.com/#organization"
                  },
                  "serviceType": "Marketing Consulting",
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "United States"
                    },
                    {
                      "@type": "State",
                      "name": "Illinois"
                    }
                  ],
                  "availableChannel": [
                    {
                      "@type": "ServiceChannel",
                      "serviceType": "Remote",
                      "availableLanguage": "en"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceType": "On-site",
                      "availableLanguage": "en"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceType": "Hybrid",
                      "availableLanguage": "en"
                    }
                  ],
                  "category": [
                    "Marketing Strategy",
                    "Business Consulting",
                    "Digital Marketing",
                    "Marketing Analysis"
                  ]
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.2findmarketing.com/#retained",
                  "name": "Retained Marketing Services",
                  "description": "Ongoing marketing partnership and support. Ongoing support for teams that want continuous expertise and execution. We handle your marketing roadmap so you can focus on what you do best.",
                  "provider": {
                    "@id": "https://www.2findmarketing.com/#organization"
                  },
                  "serviceType": "Retained Marketing Services",
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "United States"
                    },
                    {
                      "@type": "State",
                      "name": "Illinois"
                    }
                  ],
                  "availableChannel": [
                    {
                      "@type": "ServiceChannel",
                      "serviceType": "Remote",
                      "availableLanguage": "en"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceType": "On-site",
                      "availableLanguage": "en"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceType": "Hybrid",
                      "availableLanguage": "en"
                    }
                  ],
                  "category": [
                    "Marketing Operations",
                    "Ongoing Marketing Support",
                    "Marketing Partnership",
                    "Strategic Marketing"
                  ]
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.2findmarketing.com/#fractional",
                  "name": "Fractional Executive Services",
                  "description": "Part-time marketing leadership and executive services. Need senior marketing leadership without a full-time hire? We step in as your part-time executive, driving strategy, mentoring teams, and building momentum.",
                  "provider": {
                    "@id": "https://www.2findmarketing.com/#organization"
                  },
                  "serviceType": "Fractional Executive",
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "United States"
                    },
                    {
                      "@type": "State",
                      "name": "Illinois"
                    }
                  ],
                  "availableChannel": [
                    {
                      "@type": "ServiceChannel",
                      "serviceType": "Remote",
                      "availableLanguage": "en"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceType": "On-site",
                      "availableLanguage": "en"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceType": "Hybrid",
                      "availableLanguage": "en"
                    }
                  ],
                  "category": [
                    "Fractional CMO",
                    "Marketing Leadership",
                    "Executive Services",
                    "Strategic Leadership"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.2findmarketing.com/#website",
                  "url": "https://www.2findmarketing.com",
                  "name": "2Find Marketing",
                  "description": "Strategic marketing consulting, retained services, and fractional executive leadership for business growth.",
                  "publisher": {
                    "@id": "https://www.2findmarketing.com/#organization"
                  },
                  "inLanguage": "en-US",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.2findmarketing.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "ContactPoint",
                  "@id": "https://www.2findmarketing.com/#contact",
                  "telephone": "+1-312-838-2289",
                  "email": "ted.fay@2findmarketing.com",
                  "contactType": "Customer Service",
                  "areaServed": "US",
                  "availableLanguage": "English",
                  "contactOption": [
                    "TollFree"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}