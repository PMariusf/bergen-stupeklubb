export default function Loading() {
  return (
    <div
      className="min-h-[65vh] animate-pulse bg-[#f5f8fc]"
      role="status"
      aria-label="Laster siden"
    >
      <div className="bg-[#06162d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="h-4 w-36 rounded-full bg-cyan-300/25" />
          <div className="mt-6 h-14 max-w-2xl rounded-2xl bg-white/10" />
          <div className="mt-4 h-6 max-w-xl rounded-xl bg-white/10" />
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-7 px-5 py-16 md:grid-cols-3 lg:px-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="h-48 rounded-3xl bg-slate-200" />
        ))}
      </div>
      <span className="sr-only">Laster innhold…</span>
    </div>
  );
}
