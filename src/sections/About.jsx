import { Code2, Rocket, Users, Lightbulb } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Código limpio y buenas prácticas",
        description: "Escribo código limpio y mantenible siguiendo buenas prácticas de desarrollo y estándares modernos.",
    },
    {
        icon: Rocket,
        title: "Aplicaciones escalables",
        description:
        "Desarrollo aplicaciones web eficientes y escalables que pueden crecer según las necesidades del negocio.",
    },
    {
        icon: Users,
        title: "Trabajo en equipo",
        description: "Colaboro con equipos utilizando Git, metodologías ágiles y una comunicación clara para entregar software de calidad.",
    },
    {
        icon: Lightbulb,
        title: "Aprendizaje continuo",
        description:
        "Constantemente mejoro mis habilidades explorando nuevas tecnologías en desarrollo de software y ciberseguridad.",
    },
];

export const About = () => {
    return (
        <section id="about" ClassName="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Columna Izquierda */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                                <span className="text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase">Acerca de mí</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-(--color-secondary-foreground)">
                                Creación de aplicaciones web modernas, 
                                <span className="font-serif italic font-normal text-white">
                                    {" "}
                                    con Java, Spring Boot y React.
                                </span>
                            </h2>

                            <div className="space-y-4 text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                                <p>
                                    Soy Tecnólogo en Análisis y Desarrollo de Sistemas de Información y actualmente estudiante de Ingeniería de Software.
                                </p>
                                <p>
                                    Durante mi experiencia profesional en Comware trabajé en proyectos para el cliente Claro, participando en la gestión de servicios TI, 
                                    seguimiento de requerimientos y mejora continua de procesos. También apoyé en la actualización de aplicaciones empresariales, incluyendo 
                                    migración de Java EE 7 a Java EE 17 y despliegues en entornos Linux.
                                </p>
                                <p>
                                    Me interesa el desarrollo backend, la arquitectura de software y la ciberseguridad. Disfruto aprender nuevas tecnologías y construir 
                                    soluciones que aporten valor real a las organizaciones.
                                </p>
                            </div>

                            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                                <p className="text-lg font-medium italic text-(--color-foreground)">
                                    "Me gusta desarrollar aplicaciones backend y full stack mientras aprendo sobre arquitectura de software y ciberseguridad."
                                </p>
                        </div>
                    </div>

                    {/* Columna Derecha - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(index + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center mb-4 hover:bg-(--color-primary)/20">
                                    <item.icon className="w-6 h-6 text-(--color-primary)" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-(--color-muted-foreground)">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}