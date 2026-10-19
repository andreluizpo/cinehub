"use client";

import { PlayIcon } from "@solar-icons/react/bold";
import { Button } from "../ui/Button";
import { Video } from "@/types/tmdb";
import { useRef, useState } from "react";

type TrailerButtonProps = {
  videos: Video[];
};

export function TrailerButton({ videos }: TrailerButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trailer = videos[0];

  console.log(trailer);

  function openModal() {
    setModalOpen(true);
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  return (
    <>
      {trailer !== undefined && (
        <Button onClick={openModal}>
          <PlayIcon />
          Assistir Trailer
        </Button>
      )}

      {/* Trailer Modal */}
      <dialog
        ref={dialogRef}
        onClose={() => setModalOpen(false)}
        onClick={(e) => e.target === dialogRef.current && closeModal()}
        className="m-auto w-full max-w-6xl bg-transparent p-4 backdrop:bg-black/80"
      >
        {modalOpen && (
          <iframe
            key={trailer.id}
            className="aspect-video w-full rounded-2xl"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </dialog>
    </>
  );
}
