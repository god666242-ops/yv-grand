export default function Faq({ items }) {
  return (
    <div>
      {items.map(([q, a]) => (
        <details key={q} className="group border-t border-line py-[18px] last:border-b">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[19px] font-semibold text-night after:text-[26px] after:leading-none after:text-peacock after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">
            {q}
          </summary>
          <p className="mt-2.5 max-w-[62ch] text-mut">{a}</p>
        </details>
      ))}
    </div>
  );
}
