import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Instagram, Linkedin, Building2, Calendar, MapPin, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiFlutter, SiFirebase, SiNodedotjs, SiExpress, SiNextdotjs } from "react-icons/si"

export default function Component() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center space-y-6">
           <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden relative bg-gradient-to-br from-blue-300 to-blue-200">
                  <Image
                    src="/profile.png"
                    alt="Eyup Ensar"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -right-14 top-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-medium shadow-lg">
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
                  Eyup Ensar 
                </div>
              </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/ey%C3%BCp-ensar-almaz-7052a0163/" className="hover:opacity-80">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/eyupensaralmaz/" className="hover:opacity-80">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://github.com/EyupEnsarAlmaz" className="hover:opacity-80">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              
            </div>

            {/* Hero Content */}
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                I am developing mobile and web{" "}
                <span className="text-blue-400">applications!</span>
              </h1>
              <p className="text-slate-300">
                I am a full stack developer with a degree in{" "}
                <span className="font-semibold">Computing Science </span>. I actively
                develop mobile, web frontend and backend projects. I live in Dublin, Ireland 🇮🇪
              </p>
              <div className="flex flex-col items-center gap-16">
                <div className="flex gap-4 justify-center">
                  <Link href="mailto:almaz.eyupensar@gmail.com">
                    <Button variant="default" className="transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                      Contact Me
                    </Button>
                  </Link>
                  <a href="/EyupEnsarAlmaz_CV.pdf" download>
                    <Button variant="secondary" className="transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/50">
                      Download CV
                    </Button>
                  </a>
                </div>
                
                {/* Scroll Down Button */}
                <a 
                  href="#projects" 
                  className="animate-bounce cursor-pointer text-slate-300 hover:text-white transition-colors"
                  aria-label="Scroll to projects"
                >
                  <ChevronDown className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="relative py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Waiter Order Application Card */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="/waiterorder.png"
                    alt="Waiter Order Application"
                    fill
                    className="object-contain rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-white rounded-full p-1">
                      <SiFlutter className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <SiFirebase className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-400">Mobile</p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">Waiter Order Application</h3>
                    <Button variant="ghost" size="icon" className="text-white">
                      <Link href="https://github.com/EyupEnsarAlmaz/waiter_order_app_lv" className="hover:opacity-80">
                        →
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Outletten Card */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="/outletten.png"
                    alt="Outletten"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                      <div className="bg-white rounded-full p-1">
                      <SiFlutter className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <SiFirebase className="w-4 h-4 text-yellow-500" />
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <SiNextdotjs className="w-4 h-4 text-black" />
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <SiNodedotjs className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-400">Web and Mobile</p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">Outletten</h3>
                    <Button variant="ghost" size="icon">
                      <Link href="#" className="hover:opacity-8 text-white">
                        →
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>         
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="relative py-2">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
            EXPERIENCES
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />
            
            <div className="space-y-8">
              {/* Techone Company Experience */}
              <Card className="ml-12 bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Software Developer - Intern</h3>
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-slate-400" />
                      <span>Sysnet Information Technology - Full-time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-slate-400" />
                      <span>June 2022 - August 2022</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-slate-400" />
                      <span>Pendik, Istanbul, Turkey 🇹🇷</span>
                    </div>
                    <div className="pt-4">
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Developed mobile applications using Flutter framework",
                          "Collaborated with team members to implement new features",
                          "Gained hands-on experience with mobile development lifecycle",
                          "Worked on UI/UX improvements and bug fixes"
                          
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Freelance Experience */}
              <Card className="ml-12 bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">IT Support - Intern</h3>
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-slate-400" />
                      <span>Gubretas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-slate-400" />
                      <span>September 2018 - June 2019</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-slate-400" />
                      <span>Umraniye, Istanbul, Turkey 🇹🇷</span>
                    </div>
                    <div className="pt-4">
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Provided technical support and troubleshooting for company employees",
                          "Managed and maintained company software applications",
                          "Assisted with hardware and network infrastructure support",
                          "Gained hands-on experience in enterprise IT operations"
                          
                     
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Volunteering Section */}
<section className="relative py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
      EDUCATION & VOLUNTEERING
    </h2>
    
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />
      
      <div className="space-y-8">
        {/* Education Card */}
        <Card className="ml-12 bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Higher National Diploma in Computing Science</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-slate-400" />
                <span>CCT College Dublin</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                <span>2023 September - 2024 September</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span>Dublin, Ireland 🇮🇪</span>
              </div>
            </div>
          </CardContent>
        </Card>
         <Card className="ml-12 bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Certificate of Advanced Academic English</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-slate-400" />
                <span>Berlitz Dublin Language School</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                <span>2022 November - 2023 June</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span>Dublin, Ireland 🇮🇪</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="ml-12 bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Associate Degree in Information Security</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-slate-400" />
                <span>Istanbul Gelisim University</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                <span>2020 September - 2022 June</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span>Istanbul, Turkey 🇹🇷</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>
    </main>
  )
}