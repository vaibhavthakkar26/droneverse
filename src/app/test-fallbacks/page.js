'use client';

import { getImageFallback } from '@/utils/imageFallbacks';

export default function TestFallbacks() {
    // Test the fallback system
    const testCases = [
        { description: 'Empty string should use fallback', input: '', expected: '/assets/img/hero-section/drone.png' },
        { description: 'Null should use fallback', input: null, expected: '/assets/img/hero-section/drone.png' },
        { description: 'Undefined should use fallback', input: undefined, expected: '/assets/img/hero-section/drone.png' },
        { description: 'Valid path should return same path', input: '/custom/path.jpg', expected: '/custom/path.jpg' },
    ];

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Image Fallback System Test</h1>
            
            <h2>Test Cases:</h2>
            {testCases.map((testCase, index) => {
                const result = getImageFallback(testCase.input, 'hero', 'droneImage');
                const passed = result === testCase.expected;
                
                return (
                    <div key={index} style={{ 
                        margin: '10px 0', 
                        padding: '10px', 
                        border: `2px solid ${passed ? 'green' : 'red'}`,
                        borderRadius: '5px'
                    }}>
                        <h3>{testCase.description}</h3>
                        <p><strong>Input:</strong> {String(testCase.input)}</p>
                        <p><strong>Expected:</strong> {testCase.expected}</p>
                        <p><strong>Result:</strong> {result}</p>
                        <p><strong>Status:</strong> {passed ? '✅ PASSED' : '❌ FAILED'}</p>
                    </div>
                );
            })}
            
            <h2>Available Fallbacks:</h2>
            <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
                {JSON.stringify({
                    hero: {
                        droneImage: '/assets/img/hero-section/drone.png',
                        globeVideo: '/assets/videos/globe.mp4'
                    },
                    about: {
                        icon: '/assets/icons/about-icon.png',
                        backgroundVideo: '/assets/videos/about-bg.mp4'
                    }
                }, null, 2)}
            </pre>
        </div>
    );
}

