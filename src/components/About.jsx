import { Briefcase, Code, User } from "lucide-react"

export const About = () => {
    return <section id="about"
            className="py-24 px-4 relative"
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary"> Me</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                            <p className="text-muted-foreground">I’m a passionate web developer who loves creating modern, efficient, and scalable web applications. I focus on writing clean, reliable code and building digital solutions that combine solid functionality with a smooth user experience.</p>
                            <p className="text-muted-foreground">Most of my work involves developing full-featured web projects — from dynamic front-end interfaces in React to connecting powerful back-end logic and APIs. I enjoy exploring how different technologies work together to bring ideas to life and deliver real value to users.</p>

                            <div className="flex flex-column sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    Get In Touch
                                </a>

                                <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                    Download CV
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Web Development</h4>
                                        <p className="text-muted-foreground">I specialize in building modern, responsive websites using technologies like React, Tailwind CSS, and Vite. My approach emphasizes performance, accessibility, and maintainability — ensuring every site I build is ready for users and search engines alike.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">API Integration</h4>
                                        <p className="text-muted-foreground">I have hands-on experience connecting third-party APIs like OpenWeatherMap to deliver real-time, data-driven features. I enjoy integrating external services to make applications more intelligent, dynamic, and useful.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Back-End Development</h4>
                                        <p className="text-muted-foreground">I work on server-side logic, API creation, and database connections to power robust web applications. I’m focused on writing efficient, secure, and scalable code that ensures reliability and performance behind the scenes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
}