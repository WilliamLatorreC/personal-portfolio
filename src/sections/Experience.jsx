const experiences = [
  {
    period: "2025 — Actualmente",
    role: "Analista de Mesa de Servicio / Gestor de Accesos",
    company: "Stefanini Group - Colombia.",
    description:
      "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: ["Angular", "React", "MongoDB"],
    current: true,
  },
  {
    period: "2023 — 2025",
    role: "Analista de Mesa de Servicio / Gestor de Servicios",
    company: "COMWARE S.A.S.",
    description:
      `Participé en proyectos de soporte y mejora continua para el cliente Claro, gestionando requerimientos técnicos y apoyando la optimización de procesos en el área de TI.
      También colaboré en tareas de desarrollo y mantenimiento de aplicaciones empresariales, incluyendo la migración tecnológica de Java EE 7 a Java EE 17, actualización de JDK y servidor Apache Tomcat, así como despliegues en entornos Linux de QA y producción.`,
    technologies: ["Java", "Angular", "Linux", "Python"],
    current: false,
  },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-(--color-primary)/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase animate-fade-in">Trayectoria profesional</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-(--color-secondary-foreground)">Una experiencia que  
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            lo dice todo.
                        </span>
                    </h2>
                    <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                        Un recorrido por mi experiencia profesional y mi crecimiento en el desarrollo de software, participando en proyectos, aprendiendo nuevas tecnologías y 
                        mejorando continuamente mis habilidades.
                    </p>
                </div>
                {/* Experience Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-(--color-primary)/70 via-(--color-primary)/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                
                    { /* Timeline Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{animationDelay: `${(index + 1) * 150}ms`}}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-(--color-primary) rounded-full -translate-x-1/2 ring-4 ring-(--color-background) z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-(--color-primary) animate-ping opacity-75" />}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                                    <div className={`glass p-6 rounded-2xl border border(--color-primary)/30 hover:border-(--color-primary)/50 transition-all duration-500`}>
                                        <span className="text-sm text-(--color-primary) font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-(--color-muted-foreground)">{exp.company}</p>
                                        <p className="text-sm text-(--color-muted-foreground) mt-4">{exp.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>{exp.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1 bg-(--color-surface) text-xs rounded-full text-(--color-muted-foreground)">{tech}</span>
                                        ))}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}