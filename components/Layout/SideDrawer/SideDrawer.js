import Link from "next/link";

const SideDrawer = () => {
    return (
        <div>
            <Link href="/">
                <h1>Logo</h1>
            </Link>
            <Link href="/">
                <span>nav item 1</span>
            </Link>
            <Link href="/">
                <span>nav item 2</span>
            </Link>
        </div>
    );
};

export default SideDrawer;
