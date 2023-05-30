import Link from "next/link";
import { FC } from "react";

export const Header: FC = (): JSX.Element => {
	return (
		<header className="bg-slate-950">
			<nav>
				<ul className="text-white">
					<li>
						<Link href="/">Home Page</Link>
					</li>
					<li>
						<Link href="/oil">Oil Page</Link>
					</li>
					<li>
						<Link href="/parts">Parts Page</Link>
					</li>
					<li>
						<Link href="/assortment">Assortment Page</Link>
					</li>
					<li>
						<Link href="/contacts">Contacts Page</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
