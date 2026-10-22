// schema.js - Correct JavaScript implementation
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://github.com/rayaantasnim/Gemini-Django",
      "name": "Gemini-Django",
      "alternateName": "Project Gemini-Django",
      "operatingSystem": "Windows, macOS, Linux",
      "applicationCategory": "DeveloperApplication",
      "applicationSubCategory": "Artificial Intelligence & Web Framework Core",
      "url": "https://github.com/rayaantasnim/Gemini-Django",
      "downloadUrl": "https://github.com/rayaantasnim/Gemini-Django/archive/refs/heads/main.zip",
      "codeRepository": "https://github.com/rayaantasnim/Gemini-Django",
      "license": "https://opensource.org",
      "runtimePlatform": "Python 3.10, Python 3.11, Python 3.12+",
      "description": "A self-contained, production-ready single-file Django web application driving a dynamic Dual-Pass Gemini AI workspace. Eliminates boilerplate setup parameters by running programmatic runtime configurations directly within a single main.py core entry point.",
      "softwareVersion": "1.0.0",
      "author": {
        "@type": "Person",
        "@id": "https://github.com/rayaantasnim/Gemini-Django",
        "name": "Rayaan Tasnim",
        "url": "https://github.com/rayaantasnim/Gemini-Django",
        "jobTitle": "Systems Architect & Software Engineer"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Olympiad Edge",
        "legalName": "Olympiad Edge Systems"
      },
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org"
      },
      "programmingLanguage": {
        "@type": "ComputerLanguage",
        "name": "Python",
        "url": "https://python.org"
      },
      "featureList": [
        "Single-File Hybrid Routing Module collapsing multi-directory boilerplate structures",
        "Pass 1 Contextual Preprocessor driven by low-latency gemini-2.5-flash pipelines",
        "Pass 2 High-Reasoning Execution Engine powered by cognitive gemini-2.5-pro models",
        "Programmatic runtime configuration using direct settings.configure injection matrices",
        "Zero-Persistence credential gateway utilizing hidden interactive console security loops"
      ]
    }
  ]
};

// Dynamically construct and mount the structured data script into the head
const schemaScript = document.createElement('script');
schemaScript.type = 'application/ld+json';
schemaScript.text = JSON.stringify(schemaData);
document.head.appendChild(schemaScript);
