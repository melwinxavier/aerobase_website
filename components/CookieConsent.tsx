"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronsRight } from "lucide-react";

export function CookieConsent() {
  const [open, setOpen] = useState(true);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="fixed bottom-5 right-5 z-[60] w-[340px] rounded-xl border border-white/10 bg-ink-800/95 p-5 backdrop-blur-md"
        >
          <div className="flex items-start justify-between">
            <h4 className="text-base font-medium text-fg">Cookie Consent</h4>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-fg-dim hover:text-fg">
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-[12.5px] leading-relaxed text-fg-muted">
            By clicking Accept Cookies, you consent to cookies for performance, analytics,
            and marketing. Read our{" "}
            <a href="#" className="text-fg underline underline-offset-2">Privacy &amp; Cookie Policy</a>
          </p>
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={() => setOpen(false)}
              className="mono-label group inline-flex items-center gap-2 rounded-md bg-white/[0.08] px-3.5 py-2.5 text-fg hover:bg-white/[0.14]"
            >
              ACCEPT COOKIES
              <ChevronsRight className="h-3.5 w-3.5" />
            </button>
            <button className="mono-label text-fg-muted hover:text-fg">COOKIE SETTINGS</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
