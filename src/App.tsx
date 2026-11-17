import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { MachineryShowcase } from './components/MachineryShowcase';
import { PartsGallery } from './components/PartsGallery';
import { Sectors } from './components/Sectors';
import { HistorySection } from './components/HistorySection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedPartForQuote, setSelectedPartForQuote] = useState('');

  const handleOpenQuoteModal = (partName: string = '') => {
    setSelectedPartForQuote(partName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectPartForQuote = (partName: string) => {
    setSelectedPartForQuote(partName);
    const orcamentoSection = document.getElementById('orcamento');
    if (orcamentoSection) {
      orcamentoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Fixed / Sticky Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Technical Capabilities */}
        <Capabilities onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* CNC Machinery & Live Tooling Showcase */}
        <MachineryShowcase onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Gallery of Machined Parts */}
        <PartsGallery onSelectPartForQuote={handleSelectPartForQuote} />

        {/* Industrial Sectors */}
        <Sectors onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 30+ Years History & Timeline */}
        <HistorySection />

        {/* Interactive Quote / RFQ Section */}
        <QuoteSection initialPartName={selectedPartForQuote} />

        {/* Map & Physical Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Rapid Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        prefilledPartName={selectedPartForQuote}
      />
    </div>
  );
}

export default App;
