import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { painMatrix } from "@/lib/content";

export function PainMatrix() {
  return (
    <section id="scope" className="section-sand">
      <div className="section-container">
        <SectionHeading
          label={painMatrix.label}
          title={painMatrix.title}
          subtitle={painMatrix.subtitle}
        />

        <div className="surface-card overflow-x-auto">
          <table className="w-full min-w-[540px] text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-sand/50">
                <th className="px-4 py-3 font-semibold text-foreground">
                  Área de dolor
                </th>
                {painMatrix.tierLabels.map((tier) => (
                  <th
                    key={tier}
                    className="px-4 py-3 text-center font-semibold text-foreground"
                  >
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {painMatrix.areas.map((area) => (
                <tr
                  key={area.name}
                  className="border-b border-border/40 last:border-b-0"
                >
                  <td className="px-4 py-3 text-foreground">{area.name}</td>
                  {[area.tier1, area.tier2, area.tier3].map((included, i) => (
                    <td key={i} className="px-4 py-3 text-center">
                      {included ? (
                        <Check className="mx-auto size-4 text-primary" />
                      ) : (
                        <span className="text-muted-foreground/40">·</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
