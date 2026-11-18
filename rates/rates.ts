// QA fixture: billing-rates, for the plugin agent test (scenario implementors-uses-implementors).
// RateSource and its implementors share this file, so the indexer resolves both edges in it.

export interface RateSource {
  rateFor(currency: string): number;
}

export class FixedRateSource implements RateSource {
  rateFor(_currency: string): number {
    return 1;
  }
}

export class TableRateSource implements RateSource {
  constructor(private readonly table: Record<string, number>) {}

  rateFor(currency: string): number {
    return this.table[currency] ?? 1;
  }
}
