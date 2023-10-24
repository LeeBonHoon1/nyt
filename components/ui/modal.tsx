"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const onChange = (open: boolean) => {
    if (!open) onClose();
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="rounded-3xl min-h-[440px]">
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
