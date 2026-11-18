import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StrategicDifferentiators } from './components/StrategicDifferentiators';
import { Capabilities } from './components/Capabilities';
import { MachineryShowcase } from './components/MachineryShowcase';
import { MetrologySection } from './components/MetrologySection';
import { QualityComplianceSection } from './components/QualityComplianceSection';
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
    <div className="w-full min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-700 selection:text-white overflow-x-hidden">
      {/* Top Fixed / Sticky Navigation (Full Width) */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow w-full">
        {/* Hero Section (Grand, Full Screen Height & Full Width) */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Strategic Differentiators (6 Core Pillars inspired by Proturbo) */}
        <StrategicDifferentiators onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Technical Capabilities & Materials Table */}
        <Capabilities onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* CNC Machinery Fleet (Doosan Lynx & Romi Discovery 4º Eixo) */}
        <MachineryShowcase onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Dedicated Metrology & TESA 3D Cleanroom Section */}
        <MetrologySection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Quality, Standards & ESG / Sustainability Section */}
        <QualityComplianceSection />

        {/* Gallery of 17 Real Machined Parts */}
        <PartsGallery onSelectPartForQuote={handleSelectPartForQuote} />

        {/* Industrial Sectors */}
        <Sectors onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 30+ Years History & Timeline */}
        <HistorySection />

        {/* Interactive Quote / RFQ Section */}
        <QuoteSection initialPartName={selectedPartForQuote} />

        {/* Map & Physical Location (Bairro do Limão) */}
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
