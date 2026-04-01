/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from './components/HeroSection';
import FlavorExperience from './components/FlavorExperience';
import ProductShowcase from './components/ProductShowcase';
import BrandStory from './components/BrandStory';
import SocialProof from './components/SocialProof';
import StoreLocator from './components/StoreLocator';
import CampaignEngine from './components/CampaignEngine';
import LoyaltyCapture from './components/LoyaltyCapture';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-[#F4EFEA] min-h-screen font-sans selection:bg-[#711F25] selection:text-[#F4EFEA]">
      <HeroSection />
      <FlavorExperience />
      <ProductShowcase />
      <BrandStory />
      <SocialProof />
      <StoreLocator />
      <CampaignEngine />
      <LoyaltyCapture />
      <Footer />
    </main>
  );
}
