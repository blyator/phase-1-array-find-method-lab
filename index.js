const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

function superbowlWin(record) {
  const winningYear = record.find((game) => game.result === "W");
  return winningYear ? winningYear.year : undefined;
}

console.log(superbowlWin(record));
