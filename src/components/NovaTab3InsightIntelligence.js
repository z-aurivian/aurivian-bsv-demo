import React, { useState, useEffect } from 'react';
import {
  Brain, ChevronDown, ChevronUp, FileDown, Sparkles, MapPin,
  Calendar, GitBranch, Check, TrendingUp, ShieldCheck, MessageSquare,
  AlertCircle,
} from 'lucide-react';
import {
  LISTENING_PRIORITIES, INSIGHTS, ACTIONS,
} from '../config';
import { isPinned, pinInsight, unpinInsight, subscribePinned } from '../lib/journeyStore';

// ACTIONS.fromInsightRef is inconsistent across demo configs — a plain id
// ('AI1'), a '+'-joined compound id ('AI1+AI5'), or an array (['AI1','AI5'])
// where one action addresses multiple insights. Normalise before matching.
function actionCoversInsight(action, insightId) {
  const ref = action.fromInsightRef;
  if (Array.isArray(ref)) return ref.includes(insightId);
  if (typeof ref === 'string') return ref.split('+').includes(insightId);
  return false;
}

// ─── Mock KIQ period data (structural — override per demo) ─────────────────

const KIQ_PERIOD_DATA = {
  LP1: {
    status: 'new',
    thisPeriod: {
      summary: 'MSL field reports across three regions confirm out-of-pocket cost (₹800–1,200 per injection) and irregular hospital stock as the primary barriers to Anti-D compliance in Tier 2/3 settings this period. Patients who self-pay are choosing to defer or forgo prophylaxis.',
      novaSynthesis: 'This is a structural access problem, not an awareness problem — obstetricians know Anti-D is needed but patients cannot always pay, and stock gaps compound the barrier. An institutional bulk-supply model, not more education, is the lever.',
      keyQuote: { text: 'My patients know they need it but they ask if they can wait. The answer is no, but I can\'t pay for it myself.', msl: 'D. Ramachandran', territory: 'West (Mumbai/Pune)', date: '2026-06-14' },
      actionPill: { insight: 'AI2', taken: true, label: 'Compliance protocol card deployed' },
    },
    cumulative: {
      summary: 'Anti-D compliance barriers have been a consistent theme since LP1 was established — cost and stock gaps recur across every measurement period despite MO1 being at Sufficient coverage overall.',
      runningInsight: 'The question has shifted from "are obstetricians prescribing Anti-D?" to "can patients actually access and afford it once prescribed?" — a market-access question, not a clinical-education one.',
    },
  },
  LP2: {
    status: 'urgent',
    thisPeriod: {
      summary: 'Two signals this period, both high-stakes. Top-tier KOLs are independently shortening GnRH agonist cycles with add-back therapy — and Dr. S. Meenakshi Sundaram\'s public shift toward a competitor\'s recombinant analogue (alignment 74→52) makes this the most urgent listening priority in the plan.',
      novaSynthesis: 'Two distinct but related pressures are converging on MO2: a genuine clinical-practice evolution that BSV needs to support with data, and a competitive divergence that BSV needs to counter directly with priority KOL engagement. Both require action within the quarter.',
      keyQuote: { text: 'The data from the GSK advisory was compelling on the purity profile. I\'m giving the new analogue a 6-month trial in my practice.', msl: 'P. Shenoy', territory: 'South (Chennai)', date: '2026-04-02' },
      actionPill: { insight: 'AI5', taken: true, label: 'Priority MSL visit scheduled' },
    },
    cumulative: {
      summary: 'MO2 has been the lowest-coverage MO for two consecutive periods (Low status) — the Meenakshi Sundaram divergence signal has escalated since it was first flagged in April, making this the most time-sensitive open question in the plan.',
      runningInsight: 'The question has moved from "are protocols evolving?" to "can BSV re-engage Dr. Sundaram before she formalises her switch?" — a narrow window that closes as her 6-month trial progresses.',
    },
  },
  LP3: {
    status: 'new',
    thisPeriod: {
      summary: 'Four independent reports confirm the rFSH competitive narrative from ESHRE 2026 is spreading fast — IVF centre directors and reproductive endocrinologists across three cities are asking BSV for clinical equivalence data before they shift PCOS and stimulation protocols toward recombinant FSH.',
      novaSynthesis: 'This is the highest-recurrence signal in the current cycle — Merck and Organon\'s ESHRE messaging has created real prescribing pressure, and every week without a BSV rebuttal increases the risk that Tier 1 IVF centres solidify a recombinant-first default.',
      keyQuote: { text: 'The Gonal-f satellite had strong data. I need to see something from BSV before I shift my PCOS protocol.', msl: 'D. Ramachandran', territory: 'West (Mumbai/Pune)', date: '2026-07-05' },
      actionPill: { insight: 'AI1', taken: false, label: 'Clinical equivalence one-pager in development' },
    },
    cumulative: {
      summary: 'The rFSH-vs-HMG preference question has been building since ESHRE 2026 concluded — the fastest-escalating listening priority in the current plan, moving from isolated comments to explicit clinical-equivalence requests within weeks.',
      runningInsight: 'The question has sharpened from "is there competitive pressure?" to "how quickly can Cochrane-level evidence reach the IVF centres already leaning toward rFSH?"',
    },
  },
  LP4: {
    status: 'new',
    thisPeriod: {
      summary: 'Gynecologic oncologists at HCG (Bangalore) and RGCI (Delhi) are independently asking BSV MSLs for ovarian protection data on Luprodex during chemotherapy — a net-new physician segment BSV\'s current MSL materials do not address.',
      novaSynthesis: 'This is genuine market expansion, not a defensive signal — oncologists are proactively seeking BSV out for an indication current briefing materials do not cover. The opportunity is being left on the table purely due to a materials gap.',
      keyQuote: { text: 'I want to protect ovarian function before CHOP. Can Luprodex do that? I need the literature.', msl: 'A. Krishnaswamy', territory: 'South (Bangalore)', date: '2026-06-25' },
      actionPill: { insight: 'AI4', taken: false, label: 'Oncofertility briefing kit proposed' },
    },
    cumulative: {
      summary: 'LP4 has generated 1 insight since being established — its first period with any signal coverage, reflecting this genuinely new physician segment.',
      runningInsight: 'The question is moving from "does an oncofertility opportunity exist?" to "how quickly can Medical Affairs build the briefing kit before oncologists look elsewhere?"',
    },
  },
  LP5: {
    status: 'new',
    thisPeriod: {
      summary: 'Three IVF lab directors at high-volume centres have independently asked BSV MSLs for batch-to-batch consistency data for Humog and Diva FSH — a direct response to Merck\'s Gonal-f messaging at ESHRE 2026.',
      novaSynthesis: 'This is a targeted competitive rebuttal need, distinct from the broader rFSH-vs-HMG efficacy question in LP3 — lab directors are asking a narrower, more answerable question that a QA one-pager can resolve quickly.',
      keyQuote: { text: 'Gonal-f reps claim their consistency is superior. I need to see your batch QC certificates.', msl: 'R. Mehta', territory: 'North (Delhi/Agra)', date: '2026-07-03' },
      actionPill: { insight: 'AI7', taken: false, label: 'Batch QC summary card proposed' },
    },
    cumulative: {
      summary: 'This is a newly-emerged signal this period — no prior measurement periods exist for this specific batch-consistency question, though it is closely related to the broader rFSH narrative tracked under LP3.',
      runningInsight: 'The question is narrow and answerable: can BSV produce batch QC certificates fast enough to neutralise this specific competitive argument before it spreads to more centres?',
    },
  },
};

const STATUS_CONFIG = {
  new:    { badge: '● New this month',     style: 'bg-violet-50 text-violet-700 border-violet-200', rowBorder: '' },
  urgent: { badge: '● Urgent this month',  style: 'bg-rose-50 text-rose-700 border-rose-200',       rowBorder: 'border-l-2 border-l-rose-400' },
  none:   { badge: '○ No new insights',    style: 'bg-zinc-100 text-zinc-500 border-zinc-200',      rowBorder: 'opacity-80' },
  gap:    { badge: '0 insights · MO gap',  style: 'bg-rose-50 text-rose-700 border-rose-200',       rowBorder: 'border-l-2 border-l-rose-400' },
};

// ─── Insight card (inline — Tab 3 owns actionable insights) ───────────────

const PRIORITY_STYLE = {
  High:   'bg-rose-50 text-rose-700 border-rose-200',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
  Low:    'bg-sky-50 text-sky-700 border-sky-200',
  Urgent: 'bg-rose-50 text-rose-700 border-rose-200',
  New:    'bg-sky-50 text-sky-700 border-sky-200',
};

const STATUS_STYLE = {
  Captured:    'bg-zinc-50 text-zinc-600 border-zinc-200',
  Triaged:     'bg-sky-50 text-sky-700 border-sky-200',
  Validated:   'bg-violet-50 text-violet-700 border-violet-200',
  Prioritised: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const BORDER_STYLE = {
  High:   'border-l-rose-400',
  Medium: 'border-l-amber-300',
  Low:    'border-l-sky-300',
  Urgent: 'border-l-rose-400',
  New:    'border-l-sky-300',
};

function InsightCard({ insight }) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(() => isPinned(insight.id));

  useEffect(() => {
    return subscribePinned((ids) => setPinned(ids.includes(insight.id)));
  }, [insight.id]);

  const handlePin = (e) => {
    e.stopPropagation();
    if (pinned) unpinInsight(insight.id);
    else pinInsight(insight.id);
  };

  return (
    <div className={`rounded-xl border-l-2 border border-auri-border bg-auri-card overflow-hidden ${BORDER_STYLE[insight.priority] || 'border-l-auri-border'} ${pinned ? 'ring-1 ring-auri-text/20' : ''}`}>
      <button className="w-full text-left p-4 hover:bg-auri-offset transition-colors" onClick={() => setOpen(!open)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span className="text-[10px] font-medium text-auri-muted">{insight.id}</span>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${PRIORITY_STYLE[insight.priority] || ''}`}>{insight.priority}</span>
              {insight.lpRefs?.map((lp) => (
                <span key={lp} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-offset text-auri-muted border-auri-border">{lp}</span>
              ))}
              {insight.moRefs?.map((mo) => (
                <span key={mo} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{mo}</span>
              ))}
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${STATUS_STYLE[insight.status] || ''}`}>{insight.status}</span>
              {pinned && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/10 text-auri-text border-auri-text/30 inline-flex items-center gap-1">
                  <GitBranch size={10} /> On Journey
                </span>
              )}
            </div>
            <div className="text-sm font-semibold text-auri-text mb-1 leading-snug">{insight.title}</div>
            <p className="text-sm text-auri-muted leading-relaxed">{insight.summary}</p>
          </div>
          <div className="text-right shrink-0 flex flex-col items-end gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-0.5">Confidence</div>
              <div className="text-lg font-bold text-auri-text">{Math.round(insight.confidenceScore * 100)}%</div>
            </div>
            <span
              role="button"
              tabIndex={0}
              onClick={handlePin}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePin(e); }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${pinned ? 'bg-auri-text text-auri-bg border-auri-text' : 'bg-auri-bg text-auri-muted border-auri-border hover:text-auri-text hover:border-auri-text/50'}`}
            >
              {pinned ? <><Check size={11} /> Added to Journey</> : <><GitBranch size={11} /> Add to Journey</>}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2.5 text-[11px] text-auri-muted">
          <span className="flex items-center gap-1"><TrendingUp size={11} /> Recurs {insight.recurrence}×</span>
          <span className="flex items-center gap-1"><Calendar size={11} /> {insight.recency}</span>
          <span className="flex items-center gap-1"><ShieldCheck size={11} /> {insight.provenance}</span>
          <ChevronDown size={13} className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {open && (
        <div className="border-t border-auri-border bg-auri-bg p-4">
          {(() => {
            const action = ACTIONS.find((a) => actionCoversInsight(a, insight.id));
            if (!action) return null;
            const STATUS_PILL = {
              Proposed: 'bg-auri-offset text-auri-muted border-auri-border',
              Started:  'bg-sky-50 text-sky-700 border-sky-200',
              Accepted: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            };
            return (
              <div className="rounded-lg border-l-2 border-l-amber-300 border border-auri-border bg-amber-50/30 p-3 mb-4">
                <div className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1.5">Proposed action · {action.id}</div>
                <p className="text-sm text-auri-text leading-relaxed mb-2">{action.title}</p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-auri-muted">
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${STATUS_PILL[action.status] || STATUS_PILL.Proposed}`}>{action.status}</span>
                  <span>{action.owner || 'Owner not yet assigned'}</span>
                  {action.dueBy && <span className="flex items-center gap-1"><Calendar size={11} /> {action.dueBy}</span>}
                  {action.moRef && <span className="px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{action.moRef}</span>}
                </div>
              </div>
            );
          })()}

          <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-2">Source signals ({insight.sourceInsights?.length || 0})</div>
          <div className="space-y-2">
            {insight.sourceInsights?.map((s, i) => (
              <div key={i} className="rounded-lg border border-auri-border bg-auri-card p-3">
                <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1.5">
                  <MessageSquare size={10} />
                  <span className="font-medium">{s.type}</span><span>·</span>
                  <span>{s.role}</span><span>·</span>
                  <MapPin size={10} /><span>{s.location}</span>
                  <span className="ml-auto">{s.date}</span>
                </div>
                <p className="text-sm text-auri-text italic leading-relaxed">"{s.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── KIQ Matrix ────────────────────────────────────────────────────────────

function KIQMatrix() {
  const [openRow, setOpenRow] = useState(null);

  const allLPs = LISTENING_PRIORITIES;

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain size={16} className="text-auri-text" />
          <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">KIQ Intelligence Matrix</h3>
          <span className="text-xs text-auri-muted">{allLPs.length} listening priorities</span>
        </div>
        <button
          onClick={() => window.alert('Export to PowerPoint — coming soon.')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all"
        >
          <FileDown size={12} /> Export to PPT
        </button>
      </div>

      <div className="space-y-2">
        {allLPs.map((lp) => {
          const period = KIQ_PERIOD_DATA[lp.id];
          const statusKey = period?.status || 'gap';
          const cfg = STATUS_CONFIG[statusKey];
          const isOpen = openRow === lp.id;

          return (
            <div key={lp.id} className={`rounded-xl border border-auri-border bg-auri-card overflow-hidden ${cfg.rowBorder}`}>
              {/* Row header */}
              <button
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-auri-offset transition-all"
                onClick={() => setOpenRow(isOpen ? null : lp.id)}
              >
                <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20 shrink-0">{lp.id}</span>
                  <span className="text-[10px] text-auri-muted shrink-0">{lp.moRef}</span>
                  <span className="text-sm font-medium text-auri-text truncate">{lp.name}</span>
                  <span className="text-xs text-auri-muted italic hidden md:block truncate max-w-xs">"{lp.kiq}"</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${cfg.style}`}>{cfg.badge}</span>
                  {isOpen ? <ChevronUp size={15} className="text-auri-muted" /> : <ChevronDown size={15} className="text-auri-muted" />}
                </div>
              </button>

              {/* Expanded two-column panel */}
              {isOpen && period && (
                <div className="border-t border-auri-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-auri-border">
                    {/* Left — this period */}
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-text mb-3">
                        This Period — <span className="text-auri-muted">June 2026</span>
                      </div>

                      {period.thisPeriod.summary ? (
                        <>
                          <p className="text-sm text-auri-text leading-relaxed mb-3">{period.thisPeriod.summary}</p>

                          {period.thisPeriod.novaSynthesis && (
                            <div className="border-l-2 border-violet-300 pl-3 bg-violet-50/40 rounded-r-lg py-2 pr-3 mb-3">
                              <span className="text-[10px] font-semibold text-violet-700 uppercase tracking-wider">Nova synthesis · </span>
                              <span className="text-xs text-auri-text">{period.thisPeriod.novaSynthesis}</span>
                            </div>
                          )}

                          {period.thisPeriod.keyQuote && (
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-3 mb-3">
                              <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1.5">
                                <MessageSquare size={10} />
                                <span>{period.thisPeriod.keyQuote.msl}</span>
                                <span>·</span>
                                <MapPin size={10} />
                                <span>{period.thisPeriod.keyQuote.territory}</span>
                                <span className="ml-auto">{period.thisPeriod.keyQuote.date}</span>
                              </div>
                              <p className="text-sm text-auri-text italic leading-relaxed">"{period.thisPeriod.keyQuote.text}"</p>
                            </div>
                          )}

                          {period.thisPeriod.actionPill && (
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${period.thisPeriod.actionPill.taken ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-auri-offset text-auri-muted border-auri-border'}`}>
                              {period.thisPeriod.actionPill.taken && <Check size={12} />}
                              <span>{period.thisPeriod.actionPill.insight}</span>
                              <span>→</span>
                              <span>{period.thisPeriod.actionPill.label}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="rounded-lg border border-auri-border bg-auri-bg p-4">
                          <AlertCircle size={14} className="text-auri-muted mb-2" />
                          <p className="text-sm text-auri-muted leading-relaxed">{period.thisPeriod.emptyReason}</p>
                        </div>
                      )}
                    </div>

                    {/* Right — cumulative picture */}
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-muted mb-3">Cumulative Picture</div>

                      {period.cumulative.summary ? (
                        <>
                          <p className="text-sm text-auri-text leading-relaxed mb-3">{period.cumulative.summary}</p>
                          {period.cumulative.runningInsight && (
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-3">
                              <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-1.5">Running Insight</div>
                              <p className="text-xs text-auri-text italic leading-relaxed">{period.cumulative.runningInsight}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="rounded-lg border border-auri-border bg-auri-bg p-4">
                          <p className="text-sm text-auri-muted leading-relaxed">{period.cumulative.emptyReason || 'No cumulative intelligence to display.'}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────

export default function NovaTab3InsightIntelligence() {
  return (
    <div className="space-y-8">
      {/* Nova intelligence brief */}
      <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={15} className="text-violet-600" />
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Nova Intelligence Brief</span>
          <span className="text-[10px] text-violet-500 ml-1">AI-generated · on load</span>
        </div>
        <p className="text-sm text-auri-text leading-relaxed">
          This period, <strong>all 5 KIQs</strong> generated new insights. LP2 (GnRH agonist protocol confidence)
          is flagged <strong>Urgent</strong> — Dr. S. Meenakshi Sundaram's public shift toward a competitor's
          recombinant analogue requires priority MSL re-engagement before she formalises her practice change.
          LP4 (Oncofertility awareness) is the newest listening priority to generate signal, reflecting a
          genuinely new oncologist segment reaching out to BSV. The highest-confidence insight this period is
          <strong> AI1</strong> (91% confidence, LP3) — the rFSH competitive narrative from ESHRE 2026.
        </p>
      </div>

      {/* KIQ Matrix */}
      <KIQMatrix />

      {/* Actionable Insights */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-auri-text" />
            <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">Actionable Insights</h3>
            <span className="text-xs text-auri-muted">{INSIGHTS.length} prioritised · refreshes every 6 hours</span>
          </div>
          <button
            onClick={() => window.alert('Export to PowerPoint — coming soon.')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all"
          >
            <FileDown size={12} /> Export to PPT
          </button>
        </div>
        <div className="space-y-3">
          {INSIGHTS.map((i) => <InsightCard key={i.id} insight={i} />)}
        </div>
      </section>
    </div>
  );
}
