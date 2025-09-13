// components/Header.jsx
"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from 'next/image';

export default function Header({ variant = 'light' }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const navItems = [
        { label: "About us", subLinks: ["Who we are", "Our team", "Mission & Vision"] },
        { label: "Training", subLinks: ["Drone Pilot", "Safety", "Advanced Navigation"] },
        { label: "Defence", subLinks: ["Surveillance", "Tactical Drones"] },
        { label: "Products & Services", subLinks: ["Product 1", "Product 2", "Service 1"] },
        { label: "Career" },
        { label: "Contact us" },
    ];

    const handleMouseEnter = (idx) => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        setDropdownOpen(idx);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setDropdownOpen(null);
        }, 150); // 150ms delay before closing
        setHoverTimeout(timeout);
    };

    // Handle screen size detection
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1150);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }
        };
    }, [hoverTimeout]);

    const headerClasses = variant === 'dark' 
        ? "shadow-md font-[Poppins] fixed top-0 left-0 right-0 bg-gray-900 z-50"
        : "shadow-md font-[Poppins] fixed top-0 left-0 right-0 bg-white z-50";
    
    const textClasses = variant === 'dark' ? 'text-white' : 'text-gray-900';
    const logoSrc = variant === 'dark' ? '/assets/logo/white-logo.svg' : '/assets/logo/black-logo.svg';

    return (
        <header className={headerClasses}>
            <div className="max-w-7xl mx-auto py-5 px-4 lg:px-8 flex items-center justify-between h-18">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Image
                        src={logoSrc}
                        alt="Droneverse Logo"
                        width={220}
                        height={40}
                        className="w-[140px] sm:w-[180px] md:w-[180px] lg:w-[220px] h-auto"
                        priority
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className={`space-x-6 items-center ${isLargeScreen ? 'flex' : 'hidden'}`}>
                    {navItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative group"
                            onMouseEnter={() => handleMouseEnter(idx)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className={`flex items-center gap-1 text-sm poppins-medium hover:text-[var(--color-primary)] py-2 px-1 cursor-pointer transition-colors duration-200 ${textClasses}`}>
                                {item.label}
                                {item.subLinks && <ChevronDown size={14} />}
                            </button>
                            {item.subLinks && dropdownOpen === idx && (
                                <div
                                    className="absolute left-0 mt-1 w-48 bg-white border rounded shadow-lg z-[60] min-h-[40px]"
                                    onMouseEnter={() => handleMouseEnter(idx)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.subLinks.map((sub, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="px-4 py-3 poppins-medium hover:bg-gray-100 cursor-pointer transition-colors duration-200 min-h-[40px] flex items-center"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                console.log('Clicked:', sub);
                                                // Add your navigation logic here
                                            }}
                                        >
                                            {sub}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="w-[117px] h-[40px] rounded-lg bg-[var(--color-primary)] poppins-medium ">Enroll now</button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`p-2 ${isLargeScreen ? 'hidden' : 'block'} ${textClasses}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && !isLargeScreen && (
                <div className={`border-t shadow-md z-40 ${variant === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="px-4 py-4 space-y-4">
                        {navItems.map((item, idx) => (
                            <div key={idx}>
                                <button
                                    className={`flex justify-between w-full text-left text-sm poppins-medium py-2 cursor-pointer transition-colors duration-200 hover:text-[var(--color-primary)] ${textClasses}`}
                                    onClick={() =>
                                        setDropdownOpen(dropdownOpen === idx ? null : idx)
                                    }
                                >
                                    {item.label}
                                    {item.subLinks && (
                                        <span>{dropdownOpen === idx ? "-" : "+"}</span>
                                    )}
                                </button>
                                {item.subLinks && dropdownOpen === idx && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {item.subLinks.map((sub, i) => (
                                            <a
                                                key={i}
                                                href="#"
                                                className={`block poppins-medium hover:text-[var(--color-primary)] py-2 cursor-pointer transition-colors duration-200 ${textClasses}`}
                                            >
                                                {sub}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="h-[40px] rounded-lg bg-[var(--color-primary)] w-full poppins-medium">Enroll now</button>
                    </div>
                </div>
            )}
        </header>
    );
}
