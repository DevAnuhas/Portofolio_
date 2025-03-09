import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import { SiThreads } from "@icons-pack/react-simple-icons";

const socialLinks = [
	{
		name: "LinkedIn",
		displayName: "Let's Connect",
		subText: "on LinkedIn",
		icon: Linkedin,
		url: "https://www.linkedin.com/in/profile-anuhas/",
		color: "#0A66C2",
		gradient: "from-[#0A66C2] to-[#0077B5]",
		isPrimary: true,
	},
	{
		name: "Email",
		displayName: "Email",
		subText: "contact@anuhas.dev",
		icon: Mail,
		url: "mailto:contact@anuhas.dev",
		color: "#00C4B4",
		gradient: "from-[#00C4B4] to-[#00897B]",
		isPrimary: true,
	},
	{
		name: "GitHub",
		displayName: "Github",
		subText: "@DevAnuhas",
		icon: Github,
		url: "https://github.com/DevAnuhas",
		color: "#fff",
		gradient: "from-[#333] to-[#24292e]",
	},
	{
		name: "Threads",
		displayName: "Threads",
		subText: "@im_anuhas",
		icon: SiThreads,
		url: "https://www.threads.net/@im_anuhas",
		color: "#fff",
		gradient: "from-[#7B00FF] to-[#D100FF]",
	},
];

const SocialLinks = () => {
	const primaryLinks = socialLinks.filter((link) => link.isPrimary);
	const linkedIn = primaryLinks[0];
	const email = primaryLinks[1];

	const otherLinks = socialLinks.filter((link) => !link.isPrimary);
	const [github, threads] = otherLinks;

	return (
		<div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
			<h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
				<span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
				Connect With Me
			</h3>
			<div className="flex flex-col gap-4">
				{/* LinkedIn - Primary Row 1 */}
				<a
					href={linkedIn.url}
					target="_blank"
					rel="noopener noreferrer"
					className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500"
				>
					{/* Hover Gradient Background */}
					<div
						className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r ${linkedIn.gradient}`}
					/>

					{/* Content Container */}
					<div className="relative flex items-center gap-4">
						{/* Icon Container */}
						<div className="relative flex items-center justify-center">
							<div
								className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
								style={{ backgroundColor: linkedIn.color }}
							/>
							<div className="relative p-2 rounded-md">
								<linkedIn.icon
									className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
									style={{ color: linkedIn.color }}
								/>
							</div>
						</div>

						{/* Text Container */}
						<div className="flex flex-col">
							<span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
								{linkedIn.displayName}
							</span>
							<span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
								{linkedIn.subText}
							</span>
						</div>
					</div>

					{/* External Link */}
					<ExternalLink
						className="relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
					/>

					{/* Shine Effect */}
					<div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
						<div
							className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
						/>
					</div>
				</a>

				{/* Email - Primary Row 2 */}
				<a
					href={email.url}
					target="_blank"
					rel="noopener noreferrer"
					className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500"
				>
					{/* Hover Gradient Background */}
					<div
						className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r ${email.gradient}`}
					/>

					{/* Content Container */}
					<div className="relative flex items-center gap-4">
						{/* Icon Container */}
						<div className="relative flex items-center justify-center">
							<div
								className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
								style={{ backgroundColor: email.color }}
							/>
							<div className="relative p-2 rounded-md">
								<email.icon
									className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
									style={{ color: email.color }}
								/>
							</div>
						</div>

						{/* Text Container */}
						<div className="flex flex-col">
							<span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
								{email.displayName}
							</span>
							<span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
								{email.subText}
							</span>
						</div>
					</div>

					{/* External Link */}
					<ExternalLink
						className="relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
					/>

					{/* Shine Effect */}
					<div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
						<div
							className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
						/>
					</div>
				</a>

				{/* Third Row - GitHub & Threads */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{[github, threads].map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
						>
							<div
								className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`}
							/>

							<div className="relative flex items-center justify-center">
								<div
									className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
									style={{ backgroundColor: link.color }}
								/>
								<div className="relative p-2 rounded-lg">
									<link.icon
										className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
										style={{ color: link.color }}
									/>
								</div>
							</div>

							{/* Text Container */}
							<div className="flex flex-col min-w-0">
								<span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
									{link.displayName}
								</span>
								<span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
									{link.subText}
								</span>
							</div>

							<ExternalLink
								className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"
							/>

							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
								<div
									className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
								/>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default SocialLinks;
