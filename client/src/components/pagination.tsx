import React from "react";

interface PaginationProps {
  activePage: string | number | undefined;
  lastPage: boolean;
  onNext: () => void;
  onBack: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  lastPage,
  onNext,
  onBack,
}) => {
  return (
    <div className="flex w-full justify-center items-center space-x-4">
      <button
        onClick={onBack}
        disabled={!activePage || activePage == "1"}
        className="w-24 py-2 border border-zinc-300  text-secondary rounded bg-slate-50 shadow disabled:opacity-50"
      >
        Back
      </button>
      <button
        onClick={onNext}
        disabled={lastPage}
        className="w-24 py-2 border border-zinc-300  text-secondary rounded bg-slate-50 shadow disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
