import react from 'react'
import { BrowserRouter } from "react-router-dom";

export default function Container({}){
	return (
		<BrowserRouter>
			<div className="relative h-screen w-screen bg-black text-white">
				<div className="relative h-full w-full">
					<div className="fixed top-0 h-[70px] w-full z-30 bg-black/50">
						<div className="relative h-full w-full flex items-center justify-between xl:px-40 lg:px-40 md:px-16 sm:px-8 px-4">
							<div className="relative h-auto w-auto">
								<div className="relative h-auto w-auto text-xl font-bold uppercase">Kush blog</div>
							</div>
							<div className="relative h-auto w-auto flex items-center text-xs font-bold uppercase text-gray-400">
								<div className="relative h-auto w-auto flex gap-6 items-center pr-3">
									<div className="relative h-auto w-auto hover:text-white duration-200 cursor-pointer px-2">Home</div>
									<div className="relative h-auto w-auto hover:text-white duration-200 cursor-pointer px-2">News</div>
									<div className="relative h-auto w-auto hover:text-white duration-200 cursor-pointer px-2">members</div>
									<div className="relative h-auto w-auto hover:text-white duration-200 cursor-pointer px-2">Auditions</div>
								</div>
								<div className="relative h-[20px] w-[1px] bg-gray-400"></div>
								<div className="relative h-auto w-auto flex gap-6 items-center">
									<div className="relative h-auto w-auto px-2 flex items-center gap-2 pl-3 hover:text-white duration-200 cursor-pointer">
										<div className="relative h-auto w-auto">join us</div>
										<div className="relative h-auto w-auto text-extralight text-gray-400">/</div>
										<div className="relative h-auto w-auto">login</div>
									</div>
									<div className="relative h-[40px] w-auto border border-gray-300 flex items-center gap-3 px-3">
										<div className="relative h-auto w-auto">eng</div>
										<div className="relative h-[10px] w-[10px] rotate-[45deg] -translate-y-[1px] border-r border-b"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative h-screen w-screen overflow-y-auto">
						<div className="relative h-screen w-screen">
							<div className="fixed top-0 left-0 h-screen w-screen">
								<div className="relative h-full w-full w-screen" style={{ background: "url(/images/class2.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
								<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-black/30 to-black/80"></div>
							</div>
							<div className="relative h-full w-full flex items-center z-10 bg-black/40 xl:px-40 lg:px-40 md:px-16 sm:px-8 px-4">
								<div className="relative h-auto w-auto grid gap-4">
									<div className="relative h-auto w-auto text-7xl font-extrabold uppercase grid gap-1">
										<div style={{ letterSpacing: '2px' }}>Vibe</div>
										<div style={{ wordSpacing: '5px', letterSpacing: '2px' }}>the new</div>
										<div style={{ letterSpacing: '2px' }}>flow.</div>
									</div>
									<div className="relative h-auto w-auto text-normal font-light">Do you want to be the new flow of k-entertainment</div>
									<div className="relative h-[50px] w-[200px] text-sm font-bold capitalize text-gray-800 bg-white flex items-center justify-center">Apply now</div>
									<div className="relative h-auto want flex items-center gap-3 text-black text-xl">
										<div className="relative h-[35px] w-[35px] flex items-center justify-center rounded bg-white">f</div>
										<div className="relative h-[35px] w-[35px] flex items-center justify-center rounded bg-white">@</div>
									</div>
								</div>
							</div>
							<div className="relative h-auto w-full py-6 bg-black flex items-center justify-between xl:px-40 lg:px-40 md:px-16 sm:px-8 px-4">
								<div className="relative h-auto w-auto grid gap-3">
									<div className="relative h-auto w-auto flex items-center divide-x text-xs font-bold">
										<div className="relative pr-4">Privacy Policy</div>
										<div className="relative pl-4">Terms of Use</div>
									</div>
									<div className="relative h-auto want text-[9px] uppercase">© 2022 k-Entertainment Nep</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}