import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Star } from "lucide-react";

const featuredCourses = [
  {
    id: 1,
    title: "Mathématiques Avancées",
    description: "Algèbre linéaire, calcul intégral et analyse complexe",
    category: "Mathématiques",
    duration: "12h",
    students: 234,
    rating: 4.8,
    progress: 65,
    color: "from-blue-500 to-cyan-500",
    icon: "∫",
  },
  {
    id: 2,
    title: "Physique Quantique",
    description: "Introduction aux concepts fondamentaux de la mécanique quantique",
    category: "Physique",
    duration: "8h",
    students: 189,
    rating: 4.9,
    progress: 30,
    color: "from-purple-500 to-pink-500",
    icon: "ψ",
  },
  {
    id: 3,
    title: "Programmation Python",
    description: "Des bases aux algorithmes avancés et data science",
    category: "Informatique",
    duration: "15h",
    students: 456,
    rating: 4.7,
    progress: 0,
    color: "from-green-500 to-emerald-500",
    icon: "</>",
  },
  {
    id: 4,
    title: "Biologie Moléculaire",
    description: "ADN, ARN, protéines et mécanismes cellulaires",
    category: "Biologie",
    duration: "10h",
    students: 178,
    rating: 4.6,
    progress: 45,
    color: "from-orange-500 to-red-500",
    icon: "🧬",
  },
];

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Cours <span className="text-gradient-primary">populaires</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Découvrez nos cours les plus appréciés par les étudiants et commencez votre apprentissage
            </p>
          </div>
          <Link to="/courses" className="mt-4 md:mt-0">
            <Button variant="ghost" className="group">
              Voir tous les cours
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CourseCardProps {
  course: typeof featuredCourses[0];
  index: number;
}

function CourseCard({ course, index }: CourseCardProps) {
  return (
    <Link to={`/courses/${course.id}`}>
      <div 
        className={`group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up stagger-${index + 1}`}
      >
        {/* Header with gradient */}
        <div className={`h-32 bg-gradient-to-br ${course.color} p-6 relative overflow-hidden`}>
          <div className="absolute -right-4 -top-4 text-7xl opacity-20 font-bold">
            {course.icon}
          </div>
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
            {course.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {course.students}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              {course.rating}
            </div>
          </div>

          {/* Progress bar */}
          {course.progress > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progression</span>
                <span className="font-medium text-primary">{course.progress}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full gradient-primary rounded-full animate-progress-fill"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          )}

          {course.progress === 0 && (
            <Button variant="default" size="sm" className="w-full">
              Commencer
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}
