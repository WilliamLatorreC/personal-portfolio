import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
    {href: "#contact", label: "Contact"},
]


export const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
           
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-(--color-primary)">
                    PM<span className="text-primary">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="px-4 py-2 text-sm text-(--color-muted-foreground) hover:text-(--color-foreground) rounded-full hover:bg-(--color-surface)">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* Mobile Menu button */}
                <button className="md:hidden p-2 text--[var(--color-foreground)] cursor-pointer" onClick={() => setMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg text-(--color-muted-foreground) hover:text-(--color-foreground) py-2">
                                {link.label}
                            </a>
                        ))}

                        <Button onClick={() => setMobileMenuOpen(false)}>Contact Me</Button>
                    </div>
                </div>
            )}
        </header>
    );
};  