import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<>
			<DesktopSidebar />
			<MobileSidebar />
		</>
	);
};
export default Sidebar;

const DesktopSidebar = () => {
	return (
		<div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block'>
			<div className='flex flex-col gap-20 sticky top-10 left-0'>
				<div className='w-full'>
					<img src='/logo.svg' alt='logo' className='hidden md:block' />
					<img src='/mobile-logo.svg' alt='logo' className='block md:hidden' />
				</div>
				<ul className='flex flex-col items-center md:items-start gap-8'>
					<Link to={"/"} className='flex gap-1'>
						<Home size={"24"} />
						<span className='font-bold hidden md:block'>Home</span>
					</Link>
					<Link to={"/favorites"} className='flex gap-1'>
						<Heart size={"24"} />
						<span className='font-bold hidden md:block'>Favorites</span>
					</Link>
				</ul>
			</div>
		</div>
	);
};

const MobileSidebar = () => {
	return (
		<div
			className='flex justify-center gap-10 border-t fixed w-full
			bottom-0 left-0 bg-white z-10 p-2 sm:hidden 
		'
		>
			<Link to={"/"}>
				<Home size={"24"} className='cursor-pointer' />
			</Link>
			<Link to={"/favorites"}>
				<Heart size={"24"} className='cursor-pointer' />
			</Link>
		</div>
	);
};
