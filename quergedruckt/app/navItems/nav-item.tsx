import Link from 'next/link';

const NavItem = (props: { wrapperClass?: string }) => {
    return (
        <div className={props.wrapperClass}>
            <Link href="/" className="nav-item active">Home</Link>
            <Link href="/about" className="nav-item">About Us</Link>
            <Link href="/models" className="nav-item">3D Model</Link>
            <Link href="/contact-us" className="nav-item">Contact</Link>
        </div>
    )
}

export default NavItem;