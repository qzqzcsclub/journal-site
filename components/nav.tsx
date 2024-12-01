"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";

const NavItem: React.FC<{
    text: string
    href: string
    newTab?: boolean
}> = (props) => {
    return (
        <a
            className="inline-flex gap-2 items-center *:text-stone-700"
            href={props.href}
            target={props.newTab ? "_blank" : "_self"}
            rel="noreferrer">
            <span>{props.text}</span>
            {props.newTab && <ExternalLink size={18}/>}
        </a>
    );
}

const Nav: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(true);
    const [menuOpened, setMenuOpen] = useState<boolean>(false);

    const navItems = (
        <>
            <NavItem text="Home" href="/"/>
            <NavItem text="Issues" href="/issues"/>
            <NavItem text="Call for Papers" href="/call-for-papers"/>
            <NavItem text="Important Dates" href="/dates"/>
            <NavItem text="Guidelines" href="/guidelines"/>
            <NavItem text="Editorial Team" href="/editorial-team"/>
            <NavItem text="Repo" href="https://github.com/qzqzcsclub/journal" newTab/>
        </>
    );

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        document.body.addEventListener("wheel", (e) => setVisible(e.deltaY < 0));
    }, []);

    return (
        <>
            <nav
                className="font-[family-name:var(--font-geist-mono)] w-full px-96 max-2xl:px-80 max-xl:px-60 max-lg:px-20 max-md:px-10 max-sm:px-5 py-4 font-semibold fixed top-0 bg-gradient-to-b from-white to-transparent transition-all ease-out duration-[250ms]"
                style={{ transform: visible ? "translateY(0)" : "translateY(-3.5rem)" }}>
                <div className="space-x-6 max-sm:hidden">{navItems}</div>
                <div className="hidden max-sm:block">
                    <button
                        className="border-none bg-transparent outline-none"
                        onClick={() => handleMenuOpen()}>
                        <Menu />
                    </button>
                </div>
            </nav>
            {
                menuOpened && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-400/30">
                        <div className="font-[family-name:var(--font-geist-mono)] relative w-64 h-96 p-5 flex flex-col gap-4 bg-white rounded-md shadow-lg">
                            <button
                                className="border-none bg-transparent outline-none absolute top-4 right-4"
                                onClick={() => handleMenuClose()}>
                                <X />
                            </button>
                            
                            {navItems}
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Nav;
