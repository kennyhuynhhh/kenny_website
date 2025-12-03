import React, { useState } from "react";
import { Award, ExternalLink } from "lucide-react";

const Projects = () => {
	const [projectPhotoIndices, setProjectPhotoIndices] = useState<{
		[key: string]: number;
	}>({});
	const projects = [
		{
			title:
				"GPU-Accelerated Framework for Parallel Large-Scale Engineering Simulations (Thesis)",
			date: "2025 | 99% student competency and 94% project mark",
			description:
				"Curtin University thesis project focused on developing a high-performance, heterogeneous, GPU-accelerated computational framework for large-scale mechanical engineering simulations.",
			features: [
				"Achieved over 57× and 54× speedups across two case studies",
				"Implemented evolutionary optimisation algorithms for complex, multi-objective engineering design",
				"Developed custom GPU kernels in Python using NVIDIA CUDA",
			],
			technologies: [
				"Python",
				"GPU Programming",
				"CUDA",
				"NSGA-II",
				"HPC",
				"Monte Carlo",
			],
			// liveUrl: "https://kennyhuynhhh.github.io/kenny_website/",
			photos: ["/kenny_website/photos/thesis/photo1.png"],
		},
		{
			title: "3D Portfolio Experience",
			date: "2025",
			description:
				"A 3D web portfolio built with React Three Fiber and Three.js, simulating a virtual workspace with useable objects and embedded live content. Inspired by my own workspace.",
			features: [
				"Designed custon GLB models with lighting and animations",
				"Incorporated Drei components for camera transitions and clickable objects",
				"Integrated live, interactive website overlays on object displays",
			],
			technologies: [
				"React Three Fiber",
				"Drei",
				"Three.js",
				"Spline (GLB)",
				"iframe",
			],
			liveUrl: "https://kennyhuynhhh.github.io/kennyhuynh1/",
			photos: [
				"/kenny_website/photos/3d/photo1.png",
				"/kenny_website/photos/3d/photo2.png",
				"/kenny_website/photos/3d/photo3.png",
			],
		},
		{
			title: "Personal Portfolio Website",
			date: "2025",
			description:
				"A simple, single-page portfolio built with React and Vite to showcase my experience, projects, and credentials.",
			features: [
				"Designed with priority for responsive layout and smooth navigation",
				"Incorporated a minimalist, clean and simple design interface",
				"Embedded within a my 3D portfolio experience",
			],
			technologies: ["React", "Vite", "Tailwind CSS", "GitHub Pages"],
			liveUrl: "https://kennyhuynhhh.github.io/kenny_website/",
			photos: ["/kenny_website/photos/port/photo1.png"],
		},
		{
			title: "FlowState",
			date: "2025 | Top Project in Curtin’s Learning Futures Challenge",
			description:
				"A React app made for students and teachers to track wellbeing, boost focus and plan studies, with AI-powered support.",
			features: [
				"Designed with a student-centric approach through personal student experiences",
				"AI assistant powered by Hugging Face (Mixtral-8x7B) for personalized study tips and wellness advice",
				"Incorporated dashboards, mood tracking & analytics, guided meditations, with VR and 360° video integration",
			],
			technologies: [
				"React",
				"Figma",
				"Hugging Face API",
				"Mixtral-8x7B",
				"A-Frame",
			],
			liveUrl:
				"https://www.curtin.edu.au/about/futures-platform/curtin-students-reimagine-the-future-of-learning-at-2025-learning-futures-challenge-showcase/",
			photos: [
				"/kenny_website/photos/flowstate/photo1.png",
				"/kenny_website/photos/flowstate/photo2.png",
				"/kenny_website/photos/flowstate/photo3.png",
				"/kenny_website/photos/flowstate/photo4.png",
			],
		},
		{
			title: "TBAG (Team Building Atlassian Games)",
			date: "2025 | Top 3 Finalists Teams in Atlassian’s Intern ShipIt 60",
			description:
				"A Slack bot game suite built for Atlassian’s ShipIt 60 Hackathon to boost intra- and inter-team connection with daily multiplayer games.",
			features: [
				"Developed three interactive mini-games for team bonding",
				"Operated a 24/7, real-time scoring and global leaderboard through Python, Flask and Atlas Micros API",
			],
			technologies: ["Python", "Flask", "Slack API", "Atlas", "Figma"],
			liveUrl:
				"https://drive.google.com/file/d/1_BK6CiyGIM6QFDJK1CZf8hg1c8f51OD2/edit",
			githubUrl: "",
			photos: [
				"/kenny_website/photos/tbag/photo1.png",
				"/kenny_website/photos/tbag/photo2.png",
				"/kenny_website/photos/tbag/photo3.png",
				"/kenny_website/photos/tbag/photo4.png",
				"/kenny_website/photos/tbag/photo5.png",
				"/kenny_website/photos/tbag/photo6.png",
			],
		},
		{
			title: "The Swamp of Life",
			date: "2022 | 97% project mark",
			description:
				"Curtin University project with Python simulation of predator-prey relationships in a swamp and dynamic animal interaction.",
			features: [
				"Developed object-oriented species classes with unique movement, life cycle, and predator/prey logic",
				"Created with realistic behaviour patterns including reproduction, predation, and hunger",
				"Designed custom CSV terrain maps (swamp, land, water)",
			],
			technologies: ["Python", "NumPy", "Matplotlib", "CSV parsing", "OOP"],
			liveUrl: "",
			githubUrl: "",
			photos: [
				"/kenny_website/photos/swamp/photo1.png",
				"/kenny_website/photos/swamp/photo2.png",
			],
		},
	];

	const nextProjectPhoto = (projectTitle: string, photos: string[]) => {
		setProjectPhotoIndices((prev) => {
			const currentIndex = prev[projectTitle] || 0;
			const nextIndex =
				currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
			return { ...prev, [projectTitle]: nextIndex };
		});
	};

	const prevProjectPhoto = (projectTitle: string, photos: string[]) => {
		setProjectPhotoIndices((prev) => {
			const currentIndex = prev[projectTitle] || 0;
			const prevIndex =
				currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
			return { ...prev, [projectTitle]: prevIndex };
		});
	};

	return (
		<section id="projects" className="py-24">
			<div className="max-w-4xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-light primary-text mb-4">
						Projects
					</h2>
					<p className="text-xl font-light primary-text">
						Technical projects & personal initiatives
					</p>
				</div>

				<div className="space-y-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="flex flex-row rounded-2xl transition-all duration-300 mb-8"
							style={{
								background: "rgba(191,195,201,0.12)",
								backdropFilter: "blur(12px)",
								WebkitBackdropFilter: "blur(12px)",
								border: "1px solid rgba(255,255,255,0.12)",
								boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)",
							}}
						>
							<div className="flex-1 p-6 space-y-2">
								<div className="flex items-start justify-between">
									<div>
										<div className="flex items-center gap-2">
											<h3 className="text-xl font-semibold primary-text m-0">
												{project.title}
											</h3>
										</div>
										{project.date && (
											<span className="block text-s primary-text mt-1 opacity-70">
												{project.date}
											</span>
										)}
									</div>
									{project.liveUrl && (
										<div className="relative group flex items-center">
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="rounded-md hover:bg-[rgba(191,195,201,0.12)] transition-colors flex items-center justify-center"
												style={{ width: 24, height: 24 }}
											>
												<ExternalLink size={20} className="primary-text" />
											</a>
											{/* <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-[var(--secondary)] text-xs px-3 py-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto z-20 flex flex-col items-center gap-1">
												{project.title === "FlowState" ? (
													<>
														<a
															href={project.liveUrl}
															target="_blank"
															rel="noopener noreferrer"
															className="hover:text-white"
														>
															Article
														</a>
													</>
												) : project.title ===
												  "TBAG (Team Building Atlassian Games)" ? (
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="hover:text-white"
													>
														Demo/Trailer
													</a>
												) : (
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="hover:text-white"
													>
														Showcase
													</a>
												)}
											</div> */}
										</div>
									)}
								</div>
								<p className="primary-text leading-relaxed">
									{project.description}
								</p>
								<ul className="list-disc pl-6 primary-text">
									{project.features.map((feature, idx) => (
										<li key={idx} className="mb-1">
											{feature}
										</li>
									))}
								</ul>
								<div className="h-2"></div>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-2 py-1 text-xs rounded-md primary-text"
											style={{
												background: "rgba(255,255,255,0.12)",
												border: "1px solid rgba(255,255,255,0.18)",
												backdropFilter: "blur(4px)",
												WebkitBackdropFilter: "blur(4px)",
												// color removed to use primary-text
												boxShadow: "0 0 8px 1px rgba(255,255,255,0.18)",
											}}
										>
											{tech}
										</span>
									))}
								</div>
							</div>
							<div className="flex items-center justify-center p-4 relative">
								<div
									style={{
										width: 300,
										height: 300,
										borderRadius: 16,
										background: "rgba(191,195,201,0.08)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "var(--primary)",
										fontSize: 20,
										fontWeight: 500,
										overflow: "hidden",
										position: "relative",
									}}
								>
									{project.photos && project.photos.length > 0 ? (
										<>
											<img
												src={
													project.photos[
														projectPhotoIndices[project.title] || 0
													]
												}
												alt={`${project.title} photo ${
													(projectPhotoIndices[project.title] || 0) + 1
												}`}
												style={{
													width: "100%",
													height: "100%",
													objectFit: "cover",
													borderRadius: 16,
												}}
											/>
											{project.photos.length > 1 && (
												<>
													<button
														onClick={() =>
															prevProjectPhoto(project.title, project.photos)
														}
														className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 z-10 flex items-center justify-center pb-1"
														style={{
															fontSize: "1.5rem",
															width: "35px",
															height: "35px",
															background: "rgba(0, 0, 0, 0.5)",
															borderRadius: "50%",
															backdropFilter: "blur(8px)",
															lineHeight: "1",
														}}
														onMouseEnter={(e) => {
															e.currentTarget.style.background =
																"rgba(0, 0, 0, 0.7)";
															e.currentTarget.style.transform =
																"translateY(-50%) scale(1.1)";
														}}
														onMouseLeave={(e) => {
															e.currentTarget.style.background =
																"rgba(0, 0, 0, 0.5)";
															e.currentTarget.style.transform =
																"translateY(-50%) scale(1)";
														}}
													>
														‹
													</button>
													<button
														onClick={() =>
															nextProjectPhoto(project.title, project.photos)
														}
														className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 z-10 flex items-center justify-center pb-1"
														style={{
															fontSize: "1.5rem",
															width: "35px",
															height: "35px",
															background: "rgba(0, 0, 0, 0.5)",
															borderRadius: "50%",
															backdropFilter: "blur(8px)",
															lineHeight: "1",
														}}
														onMouseEnter={(e) => {
															e.currentTarget.style.background =
																"rgba(0, 0, 0, 0.7)";
															e.currentTarget.style.transform =
																"translateY(-50%) scale(1.1)";
														}}
														onMouseLeave={(e) => {
															e.currentTarget.style.background =
																"rgba(0, 0, 0, 0.5)";
															e.currentTarget.style.transform =
																"translateY(-50%) scale(1)";
														}}
													>
														›
													</button>
													<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
														{(projectPhotoIndices[project.title] || 0) + 1} /{" "}
														{project.photos.length}
													</div>
												</>
											)}
										</>
									) : (
										<span>Photo</span>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
