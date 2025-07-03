import { useState } from 'react';
import { ModalState } from '../types/campaign';

export function useModalState() {
  const [modalState, setModalState] = useState<ModalState>({
    advancedSettings: false,
    adCreation: false,
  });

  const openModal = (modalName: keyof ModalState) => {
    setModalState(prev => ({
      ...prev,
      [modalName]: true,
    }));
  };

  const closeModal = (modalName: keyof ModalState) => {
    setModalState(prev => ({
      ...prev,
      [modalName]: false,
    }));
  };

  const closeAllModals = () => {
    setModalState({
      advancedSettings: false,
      adCreation: false,
    });
  };

  return {
    modalState,
    openModal,
    closeModal,
    closeAllModals,
  };
}
