// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let randBase = this.dna[Math.floor(Math.random() * this.dna.length)];
      let mutated = returnRandBase();
      while (randBase === mutated) {
        mutated = returnRandBase();
      }
      this.dna[randBase] = mutated;
    },
  };
};

let obj = pAequorFactory(1, mockUpStrand());

console.log(obj.dna);
