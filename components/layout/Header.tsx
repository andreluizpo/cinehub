"use client";

import { VideoFrameIcon } from "@solar-icons/react/bold/video-frame";
import { MagnifierIcon } from "@solar-icons/react/linear/magnifier";
import { UserRoundedIcon } from "@solar-icons/react/bold/user-rounded";
import { HamburgerMenuIcon } from "@solar-icons/react/linear/hamburger-menu";
import { CloseIcon } from "@solar-icons/react/linear/close";
import Link from "next/link";
import { Button } from "../ui/Button";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/movie", label: "Filmes" },
  { href: "/serie", label: "Séries" },
  { href: "/trending", label: "Tendências" },
  { href: "/list", label: "Minha lista" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-background/95 via-background/70 to-transparent backdrop-blur-sm">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href={"/"}
            className="flex gap-2 items-center font-title text-2xl font-extrabold text-primary outline-0 focus-visible:ring-2 ring-primary"
          >
            <VideoFrameIcon /> CineHub
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <Button key={link.label} variant="link" size="none" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex gap-2 text-muted-foreground">
            {/* Search button */}
            <Button variant="ghost" size="icon">
              <MagnifierIcon />
            </Button>

            {/* Login button */}
            <Button variant="ghost" className="hidden md:flex">
              <span>Login</span>
              <UserRoundedIcon />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="flex md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav*/}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-down animate-duration-fast animate-fill-mode-both">
            <div className="flex flex-col items-start gap-6">
              {navLinks.map((link) => (
                <Button key={link.label} variant="link" size="none" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}

              <Button variant="ghost" size="none">
                <UserRoundedIcon />
                <span>Login</span>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
