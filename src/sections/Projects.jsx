import { Github, ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Sistema de Autenticación con JWT",
    description:
      "API REST para gestión de usuarios con autenticación segura mediante JWT y control de roles.",
    image: "/projects/project1.png",
    tags: ["Java", "Spring Boot", "MySQL", "Docker"],
    link: "#",
    github: "#",
  },
  {
    title: "Aplicación Web de Gestión de Tareas",
    description:
      "Aplicación web full stack para gestión de tareas con panel de usuario y operaciones CRUD.",
    image: "/projects/project2.png",
    tags: ["React", "Spring Boot", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Herramienta de Análisis de Seguridad Web",
    description:
      "Script para analizar configuraciones de seguridad en aplicaciones web y detectar cabeceras HTTP inseguras.",
    image: "/projects/project3.png",
    tags: ["Python", "herramientas de seguridad web"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase animate-fade-in">Trabajo destacado</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-(--color-secondary-foreground)">
                        Proyectos que
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            generan impacto.
                        </span>
                    </h2>
                    <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                        Una selección de proyectos en los que he trabajado, donde aplico tecnologías modernas para construir aplicaciones web funcionales, 
                        escalables y bien estructuradas.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(index + 1) * 100}ms`}}>
                            { /* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-linear-to-t from-(--color-card) via-card/50 to-transparent opacity-60">
                                    {/* Overlay Links*/}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={project.link} className="p-3 rounded-full glass hover:bg-(--color-primary) hover:text-(--color-primary-foreground) transition-all">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                        <a href={project.github} className="p-3 rounded-full glass hover:bg-(--color-primary) hover:text-(--color-primary-foreground) transition-all">
                                            <Github className="w-5 h-5"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover: text-(--color-primary) transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-(--color-muted-foreground) group-hover:text-(--color-primary) group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-(--color-muted-foreground) text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-(--color-surface) text-xs font-medium border border-(--color-border)/50 text-(--color-muted-foreground) hover:border-(--color-primary)/50 hover:text-(--color-primary) transition-all duration-300">{tag}</span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Call to Action */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        Ver todos los proyectos
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    )
}