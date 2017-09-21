import assertString from './util/assertString';

export default function escape(str, ignores = []) {
  assertString(str);
  const lists = [
    { symbol: '\&', value: '&amp;' },
    { symbol: '\"', value: '&quot;' },
    { symbol: '\'', value: '&#x27;' },
    { symbol: '\<', value: '&lt;' },
    { symbol: '\>', value: '&gt;' },
    { symbol: '\\\\', value: '&#x5C;' },
    { symbol: '\/', value: '&#x2F;' },
    { symbol: '\`', value: '&#96;' },
  ];

  return lists
    .filter(x => ignores.indexOf(x.symbol) === -1)
    .reduce((prev, { symbol, value }) => prev.replace(new RegExp(symbol, 'g'), value), str);
}
