import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Java",
  "Spring Boot",
  "Node.js",
  "PHP (Laravel)",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "MySQL",
  "SQL Server",
  "Oracle",
  "MongoDB",
  "Git",
  "GitHub",
  "Azure",
  "Azure DevOps",
  "AWS",
  "Docker",
  "Linux",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-(--color-primary)">
                <span className="w-2 h-2 bg-(--color-primary) rounded-full animate-pulse" />
                Desarrollador Full Stack Junior
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Construyendo <span className="text-(--color-primary) glow-text">aplicaciones web modernas</span>
                <br />
                con Java, React
                <br />
                <span className="font-serif italic font-normal text-white">
                  y buenas prácticas de desarrollo.
                </span>
              </h1>
              <p className="text-lg text-(--color-muted-foreground) max-w-lg animate-fade-in animation-delay-200">
                Hola, soy William Andrés Latorre — Desarrollador enfocado en la construcción de aplicaciones web modernas utilizando Java, Spring Boot y React. 
                Tecnólogo en Análisis y Desarrollo de Sistemas de Información y estudiante de Ingeniería de Software con interés en backend y ciberseguridad.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contactarme<ArrowRight className="w-5 h-5" />
              </Button>
              <a href="/cv-william-latorre.pdf" download="CV-William-Latorre.pdf">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Descargar CV
                </AnimatedBorderButton>
              </a>
              <a href="/cv-william-latorre.pdf" target="_blank">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Ver CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-(--color-muted-foreground)">Seguirme en: </span>
              {[
                { icon: Github, href: "https://github.com/WilliamLatorreC"},
                { icon: Linkedin, href: "https://www.linkedin.com/in/william-andres-latorre-cifuentes-b1a222261/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-(--color-primary)/10 hover:text-(--color-primary) transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="William Latorre"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Disponible para trabajar
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-(--color-primary)">1</div>
                  <div className="text-xs">
                    año Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-(--color-muted-foreground) mb-6 text-center">
            Tecnologías con las que trabajo
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-(--color-background) to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-(--color-muted-foreground)/50 hover:text-(--color-muted-foreground) transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-(--color-muted-foreground) hover:text-(--color-primary) transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Desplazarse</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};