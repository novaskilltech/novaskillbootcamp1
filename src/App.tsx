import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Rocket,
    Code2,
    Clock,
    Target,
    CheckCircle2,
    XCircle,
    Zap,
    Layout,
    Database,
    Smartphone,
    Globe,
    ShieldCheck,
    ChevronRight,
    Menu,
    X
} from 'lucide-react';

// --- Components ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="font-bold text-xl tracking-tight flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-white" />
                    </div>
                    NovaSkill Tech Campus
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <a href="#programme" className="hover:text-white transition-colors">Programme</a>
                    <a href="#livrables" className="hover:text-white transition-colors">Livrables</a>
                    <a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a>
                    <a href="https://wa.me/212716014148?text=Bonjour,%20je%20souhaite%20candidater%20pour%20le%20NovaSkill%20Build%20Weekend." target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors font-semibold">
                        Postuler
                    </a>
                </nav>

                <button className="md:hidden text-slate-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10 mt-4 px-6 py-4 flex flex-col gap-4"
                    >
                        <a href="#programme" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 py-2">Programme</a>
                        <a href="#livrables" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 py-2">Livrables</a>
                        <a href="#tarifs" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 py-2">Tarifs</a>
                        <a href="https://wa.me/212716014148?text=Bonjour,%20je%20souhaite%20candidater%20pour%20le%20NovaSkill%20Build%20Weekend." target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="bg-white text-black px-5 py-3 rounded-xl text-center font-semibold mt-2">
                            Postuler maintenant
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

// --- Sections ---

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] opacity-50 pointer-events-none translate-x-20" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-300 mb-8 border-blue-500/30"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Édition Limitée : 6 places maximum
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
                Transforme ton idée en <br className="hidden md:block" />
                <span className="text-gradient">application en 2 jours</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12 max-w-3xl mx-auto"
            >
                <p className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                    Tu as une idée d'application...<br />
                    mais elle n'est toujours pas sortie ?
                </p>
                <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                    À NovaSkill Tech Campus, on ne parle pas. <strong className="text-white">On construit.</strong><br />
                    En 2 jours intensifs, tu viens avec ton idée et tu repars avec un MVP en ligne.
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-slate-200">
                    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><Code2 className="w-4 h-4 text-blue-400" /> Full-stack assisté par IA</span>
                    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><Rocket className="w-4 h-4 text-purple-400" /> Déploiement réel</span>
                    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><Target className="w-4 h-4 text-red-400" /> 6 participants max</span>
                    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><Globe className="w-4 h-4 text-green-400" /> Berrechid</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <a href="https://wa.me/212716014148?text=Bonjour,%20je%20souhaite%20candidater%20pour%20le%20NovaSkill%20Build%20Weekend." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    Postuler maintenant <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#programme" className="w-full sm:w-auto px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                    Voir le programme
                </a>
            </motion.div>
        </div>
    </section>
);

const Problem = () => {
    const problems = [
        { icon: <Clock className="w-6 h-6 text-red-400" />, title: "Perte de temps", desc: "Des mois passés à essayer de coder sans résultat concret." },
        { icon: <Target className="w-6 h-6 text-orange-400" />, title: "Manque de focus", desc: "Tutoriels infinis et syndrome de l'objet brillant." },
        { icon: <Code2 className="w-6 h-6 text-yellow-400" />, title: "Blocages techniques", desc: "Bloqué sur des bugs sans personne pour t'aider." }
    ];

    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi la plupart des projets échouent ?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">L'approche classique de l'apprentissage en solo est lente et frustrante.</p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((p, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="glass p-8 rounded-3xl glass-hover">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                                {p.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Solution = () => (
    <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
            <FadeIn className="glass rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden border-blue-500/20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            La méthode <span className="text-gradient">NovaSkill Tech Campus</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Un weekend d'immersion totale où l'on construit ensemble. Pas de théorie ennuyeuse, que de la pratique guidée.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Focus absolu pendant 48h",
                                "Accompagnement technique expert",
                                "Architecture moderne et scalable",
                                "Design UI/UX premium",
                                "Déploiement en direct"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-200">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/10 p-6 flex flex-col justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="h-4 bg-white/10 rounded w-3/4" />
                                <div className="h-4 bg-white/10 rounded w-1/2" />
                                <div className="h-4 bg-white/10 rounded w-5/6" />
                                <div className="h-24 bg-white/5 rounded-lg mt-6 border border-white/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const Program = () => {
    const schedule = [
        { day: "Samedi Matin", title: "Fondations & Architecture", desc: "Setup de l'environnement, base de données, et authentification." },
        { day: "Samedi Après-midi", title: "Core Features", desc: "Développement des fonctionnalités principales de votre idée." },
        { day: "Dimanche Matin", title: "UI/UX & Polish", desc: "Intégration du design, animations, et expérience utilisateur." },
        { day: "Dimanche Après-midi", title: "Déploiement & Lancement", desc: "Mise en ligne, tests finaux et stratégie de lancement." }
    ];

    return (
        <section id="programme" className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">48 Heures Chrono</h2>
                    <p className="text-slate-400">Un programme millimétré pour maximiser votre productivité.</p>
                </FadeIn>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {schedule.map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                                <div className="md:w-1/2 pl-12 md:pl-0 flex flex-col justify-center">
                                    <div className={`glass p-6 rounded-2xl glass-hover ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                        <div className="text-sm font-semibold text-blue-400 mb-2 tracking-wider uppercase">{item.day}</div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-1/2" />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Deliverables = () => {
    const items = [
        { icon: <Layout />, title: "Code Source Complet", desc: "Propriété à 100% de votre code, prêt à être itéré." },
        { icon: <Globe />, title: "Application Déployée", desc: "Un lien public fonctionnel à partager à vos premiers utilisateurs." },
        { icon: <Database />, title: "Base de Données", desc: "Architecture de données robuste et sécurisée." },
        { icon: <Smartphone />, title: "Design Responsive", desc: "Interface parfaite sur mobile, tablette et desktop." },
        { icon: <Zap />, title: "Performances Optimes", desc: "Stack technique moderne (React, Vite, Tailwind)." },
        { icon: <ShieldCheck />, title: "Support Post-Weekend", desc: "Accès à la communauté NovaSkill Tech Campus pour vos futures questions." }
    ];

    return (
        <section id="livrables" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que vous obtenez</h2>
                    <p className="text-slate-400">Des livrables concrets, pas juste des concepts.</p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="glass p-6 rounded-2xl glass-hover group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Differentiation = () => (
    <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">La différence</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
                <FadeIn className="glass p-8 rounded-3xl opacity-60">
                    <h3 className="text-xl font-semibold mb-6 text-slate-400">Formation Classique</h3>
                    <ul className="space-y-4">
                        {["Théorie abstraite", "Projets génériques (To-Do list)", "Apprentissage solitaire", "Des mois de vidéos", "Motivation qui chute"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-400">
                                <XCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </FadeIn>

                <FadeIn delay={0.2} className="glass p-8 rounded-3xl border-blue-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                    <div className="relative z-10">
                        <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                            <Zap className="w-5 h-5 text-blue-400" /> NovaSkill Build Weekend
                        </h3>
                        <ul className="space-y-4">
                            {["Pratique immédiate", "Votre propre projet", "Mentorat expert en direct", "48h intensives", "Résultat concret et déployé"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);

const Dates = () => (
    <section className="py-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
            <FadeIn className="glass p-8 md:p-12 rounded-[2rem] border-blue-500/30 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-3">
                        📅 Dates disponibles
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["28 & 29 Mars", "4 & 5 Avril", "11 & 12 Avril", "18 & 19 Avril"].map((date, i) => (
                            <div key={i} className="px-4 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-lg md:text-xl text-blue-100 hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                {date}
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const Pricing = () => (
    <section id="tarifs" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Investissez dans votre projet</h2>
                <p className="text-slate-400">Un tarif transparent pour un weekend de transformation.</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Standard */}
                <FadeIn className="glass p-8 rounded-3xl flex flex-col">
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">Standard</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">4 990</span>
                        <span className="text-slate-400 ml-2">DH</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                        {["Accès complet aux 48h", "Mentorat technique", "Déploiement du projet", "Accès communauté"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <a href="https://wa.me/212716014148?text=Bonjour,%20je%20souhaite%20candidater%20pour%20le%20NovaSkill%20Build%20Weekend." target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl glass font-semibold text-center hover:bg-white/10 transition-colors">
                        Postuler
                    </a>
                </FadeIn>

                {/* Early Bird */}
                <FadeIn delay={0.2} className="glass p-8 rounded-3xl border-blue-500/50 relative flex flex-col shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <div className="absolute top-0 right-8 -translate-y-1/2">
                        <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Plus que 2 places
                        </span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Early Bird</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">3 990</span>
                        <span className="text-slate-400 ml-2">DH</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                        {[
                            { text: "Accès complet aux 48h", bonus: false },
                            { text: "Déploiement du projet", bonus: false },
                            { text: "Audit Pré-Session", bonus: true },
                            { text: "Stack Starter Pro", bonus: true },
                            { text: "Session 7J Après", bonus: true },
                            { text: "Checklist Pro", bonus: true }
                        ].map((item, i) => (
                            <li key={i} className="flex items-center justify-between text-white">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                    <span className={item.bonus ? "font-medium" : ""}>{item.text}</span>
                                </div>
                                {item.bonus && <span className="text-[10px] font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded uppercase tracking-wider shadow-[0_0_10px_rgba(139,92,246,0.3)]">Offert</span>}
                            </li>
                        ))}
                    </ul>
                    <a href="https://wa.me/212716014148?text=Bonjour,%20je%20souhaite%20candidater%20pour%20le%20NovaSkill%20Build%20Weekend." target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-white text-black font-semibold text-center hover:bg-slate-200 transition-colors">
                        Sécuriser ma place
                    </a>
                </FadeIn>
            </div>
        </div>
    </section>
);

const Admission = () => (
    <section id="postuler" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
            <FadeIn className="glass p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Maintenant, place à l'exécution.</h2>
                    <div className="text-lg text-slate-300 mb-10 max-w-xl mx-auto space-y-4">
                        <p className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-bold border border-red-500/20">
                            ⚠️ Places très limitées. Candidature obligatoire.
                        </p>
                        <p>Nous sélectionnons 6 profils motivés pour garantir un accompagnement de haute qualité.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                            <span className="text-sm text-slate-400">Candidature</span>
                        </div>
                        <div className="hidden md:block w-12 h-px bg-white/20" />
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                            <span className="text-sm text-slate-400">Validation</span>
                        </div>
                        <div className="hidden md:block w-12 h-px bg-white/20" />
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30">3</div>
                            <span className="text-sm text-blue-400 font-medium">Participation</span>
                        </div>
                    </div>

                    <a href="https://wa.me/212716014148?text=Bonjour,%20je%20souhaite%20candidater%20pour%20le%20NovaSkill%20Build%20Weekend." target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                        Soumettre ma candidature
                    </a>
                    <p className="mt-4 text-sm text-slate-500">Réponse sous 24h ouvrées.</p>
                </div>
            </FadeIn>
        </div>
    </section>
);

const Footer = () => (
    <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-xl">
                <Rocket className="w-6 h-6 text-blue-500" />
                NovaSkill Tech Campus
            </div>
            <div className="text-slate-400 text-sm flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <span>📍 Berrechid, Maroc</span>
                <a href="mailto:novaskilltech@gmail.com" className="hover:text-white transition-colors">novaskilltech@gmail.com</a>
                <a href="https://wa.me/212716014148" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+212 7 16 01 41 48</a>
            </div>
            <div className="text-slate-500 text-sm">
                © {new Date().getFullYear()} NovaSkill Tech Campus. Tous droits réservés.
            </div>
        </div>
    </footer>
);

export default function App() {
    return (
        <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-blue-500/30">
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Solution />
                <Program />
                <Deliverables />
                <Differentiation />
                <Dates />
                <Pricing />
                <Admission />
            </main>
            <Footer />

            {/* Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 glass border-t border-white/10 z-40">
                <a href="https://wa.me/212716014148?text=Bonjour,%20je%20souhaite%20candidater%20pour%20le%20NovaSkill%20Build%20Weekend." target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white text-black text-center font-bold rounded-xl">
                    Postuler (3 990 DH)
                </a>
            </div>
        </div>
    );
}
