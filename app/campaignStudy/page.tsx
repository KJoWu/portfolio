"use client";

import { useState } from 'react';
import Header from './components/Header';
import CampaignHeader from './components/CampaignHeader';
import SummarySection from './components/SummarySection';
import ConfigurationSection from './components/ConfigurationSection';
import FlightManagement from './components/FlightManagement';
import AdvancedSettingsModal from './components/modals/AdvancedSettingsModal';
import AdCreationModal from './components/modals/AdCreationModal';
import { useModalState } from './hooks/useModalState';
import { useCampaignData } from './hooks/useCampaignData';

export default function CampaignStudy() {
  const { modalState, openModal, closeModal } = useModalState();
  const { campaignData, updateCampaign } = useCampaignData();

  return (
    <div className="min-h-screen bg-white font-inter text-xs">
      <Header />
      
      <main className="max-w-7xl mx-auto p-6">
        {/* Privacy Notice */}
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200 rounded-xl backdrop-blur-sm shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              ℹ
            </div>
            <div className="text-gray-700 text-sm font-medium leading-relaxed">
              <strong>Privacy Notice:</strong> This is a demonstration of a campaign management interface I developed. Some styling, branding, and data have been modified to protect the privacy of the real company while showcasing the UI/UX functionality and design capabilities.
            </div>
          </div>
        </div>

        <CampaignHeader 
          campaign={campaignData}
          onAdvancedSettings={() => openModal('advancedSettings')}
        />
        
        <SummarySection campaign={campaignData} />
        
        <ConfigurationSection 
          campaign={campaignData}
          onAdvancedSettings={() => openModal('advancedSettings')}
          onUpdateCampaign={updateCampaign}
        />
        
        <FlightManagement 
          campaign={campaignData}
          onCreateAd={() => openModal('adCreation')}
          onUpdateCampaign={updateCampaign}
        />
      </main>

      {/* Modals */}
      <AdvancedSettingsModal 
        isOpen={modalState.advancedSettings}
        onClose={() => closeModal('advancedSettings')}
      />
      
      <AdCreationModal 
        isOpen={modalState.adCreation}
        onClose={() => closeModal('adCreation')}
        campaign={campaignData}
      />
    </div>
  );
}
