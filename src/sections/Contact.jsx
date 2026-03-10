import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { useState } from "react";

import { Button } from "@/components/Button";

import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "andres2003latorre@gmail.com",
    href: "mailto:andres2003latorre@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+57 301 235 0395",
    href: "tel:+573012350395",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Bogotá D.C., Colombia",
    href: "#",
  },
];

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // 'success' or 'error'
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                    throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });

            setFormData({ name: "", email: "", message: "" });

        } catch (error) {
             console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message:
                error.text || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--color-primary)/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-(--color-highlight)/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                 {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Póngase en contacto conmigo
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-(--color-secondary-foreground)">
                        Construyamos {" "}
                        <span className="font-serif italic font-normal text-white">
                        algo juntos.
                        </span>
                    </h2>
                    <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                        Si tienes una oportunidad, proyecto o colaboración en mente, estaré encantado de conversar. Puedes enviarme un mensaje y con gusto te responderé.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto" >
                    <div className="glass p-8 rounded-3xl border border-(--color-primary)/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                                <input required placeholder="Tu Nombre..." value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} id="name" type="text" className="w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email / Correo</label>
                                <input required placeholder="TuCorreo@email.com..." value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} id="email" type="email" className="w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                                <textarea row={5} required placeholder="Tu Mensaje..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) outline-none transition-all resize-none"/>
                            </div>
                            
                            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                 {isLoading ? (
                                    <>Enviando...</>
                                    ) : (
                                    <>
                                        Enviar Mensaje
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </Button>

                             {submitStatus.type && (
                                <div
                                className={`flex items-center gap-3
                                    p-4 rounded-xl ${
                                    submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                    }`}
                                >
                                {submitStatus.type === "success" ? (
                                    <CheckCircle className="w-5 h-5 shrink-0" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                )}
                                <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                        <h3 className="text-xl font-semibold mb-6">
                            Informacion de Contacto
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                <div className="text-sm text-muted-foreground">
                                    {item.label}
                                </div>
                                <div className="font-medium">{item.value}</div>
                                </div>
                            </a>
                            ))}
                        </div>
                    </div>

                    {/* Availability Card */}
                    <div className="glass rounded-3xl p-8 border border-primary/30">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-medium">Actualmente Disponible</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Estoy abierto a oportunidades como desarrollador junior, colaboraciones o proyectos relacionados con desarrollo de software y tecnología.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}