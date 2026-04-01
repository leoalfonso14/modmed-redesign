import { Calendar, MapPin, Monitor, Sparkles, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { GradientText } from '../../../components/ui/GradientText';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { SEO } from '../../../components/ui/SEO';

const EVENTS = [
  {
    title: 'AUA Annual Meeting',
    date: 'Apr 9 - 13, 2026',
    location: 'New Orleans, LA',
    booth: 'Booth #1523',
    cityImage: 'https://images.unsplash.com/photo-1543834399-4d693f9c656e?auto=format&fit=crop&q=80&w=800',
    type: 'Urology',
    featured: false
  },
  {
    title: 'MOMENTUM User Conference',
    date: 'May 14 - 17, 2026',
    location: 'Orlando, FL',
    booth: 'Grand Ballroom',
    cityImage: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800',
    type: 'Flagship Event',
    featured: true
  },
  {
    title: 'AAO Annual Meeting',
    date: 'Oct 17 - 20, 2026',
    location: 'Chicago, IL',
    booth: 'Booth #4412',
    cityImage: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&q=80&w=800',
    type: 'Ophthalmology',
    featured: false
  },
  {
    title: 'ASPS The Aesthetic Meeting',
    date: 'Jun 12 - 15, 2026',
    location: 'Las Vegas, NV',
    booth: 'Booth #808',
    cityImage: 'https://images.unsplash.com/photo-1581351123004-757df051db8e?auto=format&fit=crop&q=80&w=800',
    type: 'Plastic Surgery',
    featured: false
  },
  {
    title: 'Gastroenterology Hub',
    date: 'Nov 3 - 6, 2026',
    location: 'San Diego, CA',
    booth: 'Booth #212',
    cityImage: 'https://images.unsplash.com/photo-1512591201662-dec999726df5?auto=format&fit=crop&q=80&w=800',
    type: 'GI',
    featured: false
  },
  {
    title: 'Dermatology Expo',
    date: 'Mar 22 - 25, 2026',
    location: 'Miami, FL',
    booth: 'Booth #601',
    cityImage: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=800',
    type: 'Dermatology',
    featured: false
  }
];

export function EventsPage() {
  const featuredEvent = EVENTS.find(e => e.featured);
  const regularEvents = EVENTS.filter(e => !e.featured);

  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="Clinical Events & Conferences" 
        description="Join ModMed at major medical conferences and specialty-specific events. Meet our experts and see the future of specialty healthcare in person."
      />
      {/* ── Hero ── */}
      <section className="relative py-12 md:py-20 px-6 sm:px-8 border-b border-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(80,45,127,0.03),transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal variant="fade" delay={0}>
            <Badge variant="glow" className="mb-6">
              <Calendar className="w-3 h-3 mr-2 text-brand-purple" />
              Industry Events & Conferences
            </Badge>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-5xl sm:text-7xl font-black text-slate-950 mb-8 tracking-tight leading-[1.1]">
              Meet us on the <br />
              <GradientText>clinical frontlines</GradientText>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal variant="fade" delay={0.2}>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              Experience the future of specialty medicine in person. Join us at industry 
              shows, flagship user conferences, and local clinical hubs around the country.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="zoom" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/resources/webinars">
                <Button size="lg" icon={Monitor}>Virtual Webinar Tour</Button>
              </Link>
              <Link to="/resources/success-stories">
                <Button size="lg" variant="glass">Past Event Highlights</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Event ── */}
      {featuredEvent && (
        <section className="py-12 md:py-24 px-6 sm:px-8 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative overflow-hidden rounded-[40px] bg-slate-900 aspect-[16/7] group">
                {/* Background Image */}
                <img 
                  src={featuredEvent.cityImage} 
                  alt={featuredEvent.location}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-10 sm:p-14 md:p-20 flex flex-col items-start max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-3 py-1 rounded-full bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Flagship Conference</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest">
                      {featuredEvent.date}
                    </div>
                  </div>
                  
                  <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                    {featuredEvent.title} <br />
                    <span className="text-brand-purple-light">MOMENTUM 2026</span>
                  </h2>
                  
                  <div className="flex items-center gap-6 mb-10 text-white/80 font-bold">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-brand-purple" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-brand-purple" />
                      <span>{featuredEvent.booth}</span>
                    </div>
                  </div>
                  
                  <Link to="/contact">
                    <Button variant="white" size="lg" className="px-10 h-14 text-base">
                      Register Now
                    </Button>
                  </Link>
                </div>
                
                {/* Visual Accent */}
                <div className="absolute top-10 right-10 flex flex-col items-end gap-2 opacity-50">
                  <span className="text-[120px] font-black text-white leading-none tracking-tighter mix-blend-overlay">26</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Event Grid ── */}
      <section className="py-12 md:py-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 px-4">
            <div className="max-w-xl">
              <h3 className="text-3xl font-black text-slate-950 mb-3 tracking-tight">Upcoming Industry Shows</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Meet our specialty experts and test the latest ModMed innovations live.
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <select className="px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-sm font-bold text-slate-900 outline-hidden hover:bg-white transition-all cursor-pointer shadow-sm">
                <option>All Specialties</option>
                <option>Dermatology</option>
                <option>Ophthalmology</option>
                <option>Orthopedics</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularEvents.map((event, idx) => (
              <ScrollReveal key={idx} direction={idx % 2 === 0 ? "up" : "right"} delay={idx * 0.1}>
                <div className="group relative flex flex-col bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(80,45,127,0.06)] hover:-translate-y-3 transition-all duration-700">
                  {/* City Image Header */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={event.cityImage} 
                      alt={event.location}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1.5 rounded-xl bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest shadow-lg transform group-hover:scale-105 transition-transform">
                        {event.date}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[10px] font-black text-brand-purple uppercase tracking-[0.2em] mb-4">
                      {event.type}
                    </span>
                    <h4 className="text-xl font-black text-slate-950 mb-4 tracking-tight leading-tight group-hover:text-brand-purple transition-colors">
                      {event.title}
                    </h4>
                    
                    <div className="mt-auto space-y-3 pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                        <MapPin className="w-4 h-4 text-slate-400 group-hover:text-brand-purple transition-colors" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                        <Users className="w-4 h-4 text-slate-400 group-hover:text-brand-purple transition-colors" />
                        <span>{event.booth}</span>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-brand-purple uppercase tracking-[0.2em]">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{event.location}</span>
                      </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-16 md:py-32 px-6 sm:px-8 border-t border-slate-50 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 mb-8 tracking-tight leading-tight">
            Can't make it to <br />
            a <GradientText>live show?</GradientText>
          </h2>
          <p className="text-lg text-slate-600 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            No problem. You can experience the platform anytime with a personalized, 
            one-on-one demonstration tailored to your specialty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="h-16 px-10 text-base shadow-2xl">Book a Demo Today</Button>
            </Link>
            <Link to="/resources/webinars">
              <Button size="lg" variant="glass" className="h-16 px-10 text-base" icon={Monitor}>Watch Recorded Sessions</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
