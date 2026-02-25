import { Link } from 'react-router';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#0B0B0E]">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#E5E5E5]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-[#F2F2F2]">RAW</span>
                <span className="text-[#E5E5E5] ml-1">Formato</span>
              </span>
            </Link>
            <p className="text-[#F2F2F2]/60 text-sm leading-relaxed mb-6">
              A creative marketing agency built for the AI era. We blend creativity, performance, and intelligent automation to help Florida brands scale faster.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/rawformato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2F2F2]/60 hover:text-[#E5E5E5] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-[#F2F2F2]/60 hover:text-[#E5E5E5] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#F2F2F2] mb-4">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/automotive-sports" className="text-[#F2F2F2]/60 hover:text-[#E5E5E5] text-sm transition-colors">
                  Automotive & Sports
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-[#F2F2F2]/60 hover:text-[#E5E5E5] text-sm transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/realtors-builders" className="text-[#F2F2F2]/60 hover:text-[#E5E5E5] text-sm transition-colors">
                  Realtors & Builders
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#F2F2F2] mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-[#F2F2F2]/60 text-sm">Paid Advertising</li>
              <li className="text-[#F2F2F2]/60 text-sm">Content Production</li>
              <li className="text-[#F2F2F2]/60 text-sm">Lead Generation</li>
              <li className="text-[#F2F2F2]/60 text-sm">Marketing Automation</li>
              <li className="text-[#F2F2F2]/60 text-sm">AI Creative Testing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#F2F2F2] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#F2F2F2]/60 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Florida, USA</span>
              </li>
              <li className="flex items-start gap-2 text-[#F2F2F2]/60 text-sm">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href="tel:+17865551234" className="hover:text-[#E5E5E5] transition-colors">
                  +1 (786) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#F2F2F2]/60 text-sm">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:hello@rawformato.com" className="hover:text-[#E5E5E5] transition-colors">
                  hello@rawformato.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#F2F2F2]/60 text-sm">
                <Instagram size={16} className="mt-0.5 shrink-0" />
                <a 
                  href="https://instagram.com/rawformato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5E5E5] transition-colors"
                >
                  @rawformato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F2F2F2]/40 text-sm">
            © {currentYear} RAW Formato. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#F2F2F2]/40 hover:text-[#E5E5E5] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#F2F2F2]/40 hover:text-[#E5E5E5] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFpbikiLz48L3N2Zz4=')]" />
    </footer>
  );
}
