import { HomeIcon, LibrarySquare, Users2 } from "lucide-react";
import Link from "next/link";

const links = [
    {
        title: "Início",
        href: "/admin",
        icon: <HomeIcon className="w-6 h-6" />
    },
    {
        title: "Usuários",
        href: "/admin/users",
        icon: <Users2 className="w-6 h-6" />
    },
    {
        title: "Anúncios",
        href: "/admin/ads",
        icon: <LibrarySquare className="w-6 h-6" />
    }
]


function SideNav() {
  return (
    <div className="p-6">
      <nav className="w-full">
        <ul className="flex flex-col gap-4">
            {
                links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="flex gap-4 items-center"
                        >
                            {link.icon}
                            <span className="font-bold text-gray-600">
                                {link.title}
                            </span>
                        </Link>
                    </li>
                ))
            }

        </ul>
      </nav>
    </div>
  );
}

export default SideNav;

