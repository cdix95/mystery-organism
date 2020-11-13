// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
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

const pAequorFactory = (num, dna) => {
  return {
    num,
    dna,
    mutate() {
      let newBase;
      for(let i = 0; i < this.dna.length; i++){
        do{
          newBase = returnRandBase();
        }
        while(newBase === this.dna[i]);

        this.dna[i] = newBase;
      }
      
      return this.dna;

    },
    compareDNA(obj) {
      let matchingDNA = 0;
      let matchingDNAPercent;
      
      for(let i = 0; i < this.dna.length; i++){
    

        if(this.dna[i] === obj.dna[i]){
          matchingDNA += 1;
        }

      }

      matchingDNAPercent =((matchingDNA / this.dna.length) * 100).toFixed(2);
      console.log(obj);

      console.log(`specimen #1 and specimen #2 have ${matchingDNAPercent}% DNA in common`);

      
    },
    willLikelySurvive() {
      let goodDNA = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          goodDNA += 1;
        }
      }
      willSurvive = ((goodDNA / this.dna.length) * 100).toFixed(2);
      
      if(willSurvive >= 60){
        return true;
        
      }
      else{
        return false;
      }
    }
  };
  return organismObj;
}

const cretePAequor = (numOfOrganisms) => {
  let survivingDNA = [];
  for(let i = 0; i < numOfOrganisms; i++){
    survivingDNA[i] = pAequorFactory(i+1,mockUpStrand());
    if (survivingDNA[i].willLikelySurvive() === false){
      survivingDNA.pop();
      i--
    }else{
      console.log(survivingDNA[i].willLikelySurvive());

    }
   
  }
  console.log(survivingDNA);

}


//call multi-factory
cretePAequor(30);
