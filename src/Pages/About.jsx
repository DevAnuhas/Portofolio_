import { useEffect, memo, useMemo } from "react";
import {
	FileText,
	Code,
	Award,
	Globe,
	ArrowUpRight,
	Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const Header = memo(() => (
	<div
		className="text-center lg:mb-8 mb-2 px-[5%]"
		data-aos="fade-up"
		data-aos-duration="1000"
	>
		<div className="inline-block relative group">
			<h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
				About Me
			</h2>
		</div>
		<p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2">
			<Sparkles className="w-5 h-5 text-purple-400" />
			Engineering Tomorrow’s Ideas
			<Sparkles className="w-5 h-5 text-purple-400" />
		</p>
	</div>
));

const StatCard = memo(
	({ icon: Icon, color, value, label, description, animation }) => (
		<div
			data-aos={animation}
			data-aos-duration={1300}
			className="relative group"
		>
			<div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
				<div
					className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
				></div>

				<div className="flex items-center justify-between mb-4">
					<div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
						<Icon className="w-8 h-8 text-white" />
					</div>
					<span
						className="text-4xl font-bold text-white"
						data-aos="fade"
						data-aos-duration="3000"
						data-aos-anchor-placement="top-bottom"
					>
						{value}
					</span>
				</div>

				<div>
					<p
						className="text-sm uppercase tracking-wider text-gray-300 mb-2"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-anchor-placement="top-bottom"
					>
						{label}
					</p>
					<div className="flex items-center justify-between">
						<p
							className="text-xs text-gray-400"
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-anchor-placement="top-bottom"
						>
							{description}
						</p>
						<ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
					</div>
				</div>
			</div>
		</div>
	)
);

const AboutPage = () => {
	// Memoized calculations
	const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
		const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
		const storedCertificates = JSON.parse(
			localStorage.getItem("certificates") || "[]"
		);

		const startDate = new Date("2022-06-23");
		const today = new Date();
		const experience =
			today.getFullYear() -
			startDate.getFullYear() -
			(today <
			new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())
				? 1
				: 0);

		return {
			totalProjects: storedProjects.length,
			totalCertificates: storedCertificates.length,
			YearExperience: experience + "+",
		};
	}, []);

	// Optimized AOS initialization
	useEffect(() => {
		const initAOS = () => {
			AOS.init({
				once: false,
			});
		};

		initAOS();

		// Debounced resize handler
		let resizeTimer;
		const handleResize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(initAOS, 250);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			clearTimeout(resizeTimer);
		};
	}, []);

	// Memoized stats data
	const statsData = useMemo(
		() => [
			{
				icon: Code,
				color: "from-[#6366f1] to-[#a855f7]",
				value: totalProjects,
				label: "Total Projects",
				description: "Innovative solutions crafted",
				animation: "fade-left",
			},
			{
				icon: Award,
				color: "from-[#a855f7] to-[#6366f1]",
				value: totalCertificates,
				label: "Certificates",
				description: "Professional skills validated",
				animation: "fade-left",
			},
			{
				icon: Globe,
				color: "from-[#6366f1] to-[#a855f7]",
				value: YearExperience,
				label: "Years of Experience",
				description: "Continuous learning journey",
				animation: "fade-left",
			},
		],
		[totalProjects, totalCertificates, YearExperience]
	);

	return (
		<div
			className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
			id="About"
		>
			<Header />

			<div className="w-full mx-auto pt-8 sm:pt-12 relative">
				<div className="flex flex-col-reverse lg:grid lg:grid-cols-[65%_35%] 2xl:grid-cols-[75%_25%] gap-12 items-center">
					<div className="space-y-6 text-center lg:text-left">
						<h2
							className="text-3xl sm:text-4xl lg:text-5xl font-bold"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
								Hey, I&apos;m
							</span>
							<span
								className="block mt-2 text-gray-200"
								data-aos="fade-right"
								data-aos-duration="1300"
							>
								Anuhas Dissanayake
							</span>
						</h2>

						<p
							className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify max-w-[600px] pb-4 sm:pb-0"
							data-aos="fade-right"
							data-aos-duration="1500"
						>
							I’m a passionate fullstack developer focused on building smart,
							user-friendly applications. By day, I’m a{" "}
							<b>BSc Software Engineering</b> student at Cardiff Metropolitan
							University (ICBT Campus) while learning MERN stack development, AI
							integration, and cloud technologies. With a strong eye for UI/UX
							and problem-solving, I love turning ideas into efficient digital
							solutions.
						</p>

						<div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
							<a
								href={import.meta.env.VITE_RESUME_URL}
								className="w-full lg:w-auto"
								target="_blank"
								download
							>
								<button
									data-aos="fade-up"
									data-aos-duration="800"
									className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
								>
									<FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
								</button>
							</a>
							<a href="#Portfolio" className="w-full lg:w-auto">
								<button
									data-aos="fade-up"
									data-aos-duration="1000"
									className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
								>
									<Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
								</button>
							</a>
						</div>
					</div>

					<a href="#Portfolio">
						<div className="grid grid-cols-1 gap-6 mt-16 cursor-pointer">
							{statsData.map((stat) => (
								<StatCard key={stat.label} {...stat} />
							))}
						</div>
					</a>
				</div>
			</div>

			<style>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-20px);
					}
				}
				@keyframes spin-slower {
					to {
						transform: rotate(360deg);
					}
				}
				.animate-bounce-slow {
					animation: bounce 3s infinite;
				}
				.animate-pulse-slow {
					animation: pulse 3s infinite;
				}
				.animate-spin-slower {
					animation: spin-slower 8s linear infinite;
				}
			`}</style>
		</div>
	);
};

export default memo(AboutPage);
