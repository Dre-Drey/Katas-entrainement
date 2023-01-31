function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  //iterer dans l'argument
  let dnaSplitted = dna.split("");
  for (let i = 0; i < dnaSplitted.length; i++) {
    if (dnaSplitted[i] == "T") {
      dnaSplitted[i] = "U";
    }
  }
  return dnaSplitted.join("");
}
