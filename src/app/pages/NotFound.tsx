import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
      <SEO
        title="Page Not Found | RAW Formato"
        description="The page you're looking for doesn't exist. Head back to RAW Formato's homepage."
      />
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E5E5E5]/20 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFpbikiLz48L3N2Zz4=')]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-9xl font-bold text-[#E5E5E5] mb-8">
            404
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-6">
            Page Not Found
          </h1>
          
          <p className="text-xl text-[#F2F2F2]/60 mb-12">
            Looks like this page took a detour. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button variant="primary">
                <Home size={20} />
                Back to Home
              </Button>
            </Link>
            <Button variant="secondary" onClick={() => window.history.back()}>
              <ArrowLeft size={20} />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
