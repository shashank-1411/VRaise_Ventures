"use client";

import React from "react";
import { Home, Users, AlertCircle, Sparkles, Mail } from "lucide-react";
import { NavBar, NavItem } from "@/components/ui/tubelight-navbar";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const navItems: NavItem[] = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Who We Are", url: "#about", icon: Users },
    { name: "Problem", url: "#problem", icon: AlertCircle },
    { name: "Solution", url: "#solution", icon: Sparkles },
    { name: "Contact", url: "#footer", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}
