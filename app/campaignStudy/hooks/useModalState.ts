import { useState } from 'react';
import { ModalState } from '../types/campaign';

export function useModalState() {
  const [modalState, setModalState] = useState<ModalState>({
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
