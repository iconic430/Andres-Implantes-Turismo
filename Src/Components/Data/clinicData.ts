import { Testimonial, ValueItem, LaunchOffer, ScheduleDay } from '../types';

export const clinicInfo = {
  name: "Dr. Andrés Moyetón Arenas",
  clinicName: "Clínica NES",
  tagline: "Especialista en Implantes Dentales de Alta Gama",
  subtitle: "¿Vives en EE. UU. y buscas recuperar tu sonrisa con implantes dentales premium a un precio justo y menos de 10 minutos de la frontera?",
  whatsappUrl: "",
  phoneUSA: "+1 (915) 258-2606",
  phoneCol: "+52 (656) 578-4801", // Primario
  phoneWhatsApp: "+52 (656) 578-4801",
  address: "Ignacio Ramírez 490, 20 de Noviembre s/n, Partido Romero, 32330 Ciudad Juárez, Chih., México",
  mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.123512341234!2d-106.4719089!3d31.7390123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75bfa95f324cf%3A0x8f2bb76f7df100e0!2sIgnacio%20Ram%C3%ADrez%20490%2C%20Partido%20Romero%2C%2032330%20Cd%20Ju%C3%A1rez%2C%20Chih.%2C%20Mexico!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx",
  mapsAppLink: "https://maps.app.goo.gl/zuLXeJiZJaGh6Ukw8",
  email: "moyetonandres6@gmail.com",
  education: "UPAEP (Universidad Popular Autónoma del Estado de Puebla)",
  professionalCedula: "12921267",
  specialtyCedula: "11899032",
  advertisingNotice: "2508022002A00187",
  experienceYears: "11 años de experiencia clínica",
  aboutShort: "El Dr. Andrés Moyetón Arenas colaboró con Médicos Sin Fronteras, una experiencia que marcó profundamente la forma en que entiende a cada paciente: como persona, no solo como un caso clínico. Su enfoque es de odontología biológica e integral, mínimamente invasivo, priorizando siempre conservar tu estructura dental natural y tu salud sistémica general.",
  aboutBulletPoints: [
    "Descubrir exactamente qué necesita tu boca, sin suposiciones ni tratamientos genéricos gracias a tecnologia de punta.",
    "Entender cada etapa de tu proceso para que decidas con total calma y confianza.",
    "Recibir un plan claro y a tu medida, pensado para cuidar lo que aún se puede proteger y restaurar lo que lo necesita."
  ]
};

export const valuePropositions: ValueItem[] = [
  {
    id: "savings",
    title: "Ahorro de más del 65%",
    description: "Implante premium completo (Zirconia / Titanio) por solo $1,500 USD, frente a los $4,500+ USD que cobran en clínicas de Texas, Nuevo México o Colorado.",
    iconName: "DollarSign"
  },
  {
    id: "border-pickup",
    title: "Transporte desde la Frontera",
    description: "Para tu comodidad y total seguridad, en procedimientos de 3 o más implantes, te recogemos directamente en el cruce fronterizo internacional y te traemos hasta nuestra clínica.",
    iconName: "Car"
  },
  {
    id: "biological-dentistry",
    title: "Odontología Biológica e Integral",
    description: "Tratamos al paciente como un todo. Utilizamos materiales biocompatibles de última generación (Zirconia sin metal y polímeros con nanotecnología) respetuosos con tu organismo.",
    iconName: "ShieldCheck"
  },
  {
    id: "advanced-tech",
    title: "Aparatología de Vanguardia",
    description: "Diagnóstico preciso con Rayos X, escaneo intraoral 3D sin moldes, Diseño de Sonrisa Digital, sueroterapia integrativa y reducción avanzada de bacterias y placa.",
    iconName: "Cpu"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    patientName: "Robert Miller",
    origin: "El Paso, Texas",
    treatment: "Implante Dental de Titanio + Corona de Circonia CAD/CAM",
    beforeImg: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    testimonial: "El costo de un solo implante en El Paso era ridículo. Crucé la frontera y en la clínica del Dr. Andrés me atendieron de forma increíble. Incluso me recogieron en la frontera para llevarme a la clínica. El Dr. Andrés explica todo con una calidad humana increíble. ¡Mi implante se siente y se ve idéntico a mis dientes naturales!",
    timeTaken: "2 visitas (cirugía de 45 min y posterior corona)",
    savings: "¡Ahorró más de $3,000 USD!"
  },
  {
    id: "testimonial-2",
    patientName: "María Delgado",
    origin: "Las Cruces, New Mexico",
    treatment: "Rehabilitación Biológica con Implantes de Circonia",
    beforeImg: "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=400&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    testimonial: "Buscaba odontología biológica porque no quería metales en mi boca. El Dr. Andrés me colocó implantes de circonia y usó sueroterapia durante mi proceso. No sentí nada de dolor y la curación fue súper rápida. Excelente servicio, muy profesional y a un tercio del costo de EE. UU.",
    timeTaken: "Cirugía mínimamente invasiva guiada",
    savings: "¡Ahorró $4,500 USD!"
  },
  {
    id: "testimonial-3",
    patientName: "James Thompson",
    origin: "Albuquerque, New Mexico",
    treatment: "Implante Dental de Carga Inmediata con Polímero E-max",
    beforeImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    testimonial: "Conduje desde Albuquerque para atenderme con el Dr. Andrés. La tecnología que tiene es impresionante: escáner intraoral 3D, diseño digital inmediato, y una atención súper humana que no encuentras en clínicas corporativas de EE. UU. Muy recomendado para cualquier persona de la frontera.",
    timeTaken: "Procedimiento digital rápido",
    savings: "¡Ahorró $3,200 USD!"
  }
];

export const launchOffers: LaunchOffer[] = [
  {
    id: "offer-implant",
    title: "Tratamiento Completo de Implante Dental Premium",
    badge: "Oferta Exclusiva",
    description: "Recupera tu diente perdido con materiales de máxima biocompatibilidad, tecnología digital de escaneo 3D y corona estética terminada con CAD/CAM de precisión.",
    benefits: [
      "Implante de titanio o circonia (Zirconia sin metal disponible)",
      "Abutment y Corona estética definitiva en Circonia o Polímero E-max con nanotecnología",
      "Escaneo intraoral digital 3D y planificación virtual (sin moldes incómodos)",
      "Diagnóstico completo con rayos X computarizados",
      "Protocolo biológico complementario: Sueroterapia para acelerar regeneración",
      "Servicio de pick-up de cortesía en el puente internacional de la frontera (válido para 3 o más implantes)"
    ],
    originalPrice: "$4,500 USD",
    offerPrice: "$1,500 USD",
    validUntil: "2026-09-30"
  }
];

export const schedule: ScheduleDay[] = [
  { day: "Lunes", hours: "9:30 AM - 6:00 PM", closed: false },
  { day: "Martes", hours: "9:30 AM - 6:00 PM", closed: false },
  { day: "Miércoles", hours: "9:30 AM - 6:00 PM", closed: false },
  { day: "Jueves", hours: "9:30 AM - 6:00 PM", closed: false },
  { day: "Viernes", hours: "9:30 AM - 6:00 PM", closed: false },
  { day: "Sábado", hours: "9:30 AM - 4:00 PM", closed: false },
  { day: "Domingo", hours: "Cerrado", closed: true }
];

export const faqs = [
  {
    question: "¿Por qué el costo es significativamente menor que en EE. UU.?",
    answer: "Nuestros costos operativos y de infraestructura médica en Ciudad Juárez son mucho más competitivos que en Texas o Nuevo México, lo que nos permite ofrecer exactamente la misma tecnología de punta, implantes de calidad y materiales biocompatibles importados a una fracción de los precios norteamericanos."
  },
  {
    question: "¿Cómo funciona el servicio de transporte en la frontera?",
    answer: "En procedimientos de 3 o más implantes, ofrecemos traslados de cortesía para pacientes que vienen de EE. UU. Te recogemos en un vehículo privado y climatizado directamente en el cruce fronterizo (Puente Internacional Paso del Norte o el cruce de tu preferencia) y te traemos con total seguridad y confort a nuestra clínica."
  },
  {
    question: "¿Qué es la odontología biológica e integral y cómo ayuda en los implantes?",
    answer: "La odontología biológica prioriza tu salud global y el uso de materiales de máxima biocompatibilidad con tu cuerpo, evitando metales pesados o aleaciones tóxicas. Usamos implantes de Zirconia o Titanio ultra-puro y complementamos el procedimiento con sueroterapia regenerativa para acelerar la curación ósea y reducir la inflamación de forma natural."
  },
  {
    question: "¿Cuántas visitas se requieren para el implante completo?",
    answer: "Por lo general se realiza en dos etapas cortas: 1) La colocación del implante de titanio o circonia y el diente provisional (1 sola cita de menos de 1 hora), seguida de un periodo de integración de 3 a 4 meses. 2) La colocación de la corona definitiva de alta estética fabricada con tecnología digital CAD/CAM (1 cita)."
  }
];
