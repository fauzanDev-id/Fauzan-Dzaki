import CardNav from "@/components/navigation/CardNav";

export default function NavbarSection() {
    return (
        <CardNav
            logo="/logoUcenk.png"
            logoAlt="Logo Ucenk"
            items={[
                {
                    label: "Home",
                    bgColor: "#79a5d0",
                    textColor: "#000",
                    links: [{ label: "Go Home", href: "#home", ariaLabel: "Go to Home" }],
                },
                {
                    label: "About",
                    bgColor: "#435663",
                    textColor: "#fff",
                    links: [{ label: "About Me", href: "#about", ariaLabel: "Go to About" }],
                },
                {
                    label: "My Works",
                    bgColor: "#111",
                    textColor: "#fff",
                    links: [{ label: "My Works", href: "#portfolio", ariaLabel: "Go to Portfolio" }],
                },
            ]}
            baseColor="#E0D9D9"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
        />
    );
}
