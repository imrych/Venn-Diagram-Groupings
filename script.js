const twoSetButton = document.getElementById('two-set-btn');
const threeSetButton = document.getElementById('three-set-btn');
const twoSetContainer = document.getElementById('two-set-container');
const threeSetContainer = document.getElementById('three-set-container');

const twoSetText = document.getElementById('select-2-set');
const threeSetText = document.getElementById('select-3-set');

const diagram = document.getElementById('diagram');
const diagram2 = document.getElementById('diagram2');

const title = document.getElementById('title');
const title2 = document.getElementById('title2');

// DIAGRAM GENERATION FOR 3 SETS
const diagramA = document.getElementById('set-a');
const diagramB = document.getElementById('set-b');
const diagramC = document.getElementById('set-c');

const aside = document.getElementById('aside');
// If user select 2 button
// it will show two input
twoSetButton.addEventListener('click', () => {
    aside.style.display = "block";

    twoSetContainer.style.display = "flex";
    twoSetText.style.display = "block"

    threeSetContainer.style.display = "none";
    threeSetText.style.display ="none";

    diagram.style.visibility = "visible";
    title.style.visibility = "visible";

    diagram2.style.display = "none";
    title2.style.visibility ="hidden";

})

//If user select 3 button
// it will show three input 
threeSetButton.addEventListener('click', () => {
    aside.style.display = "block";

    threeSetContainer.style.display = "flex";
    threeSetText.style.display ="block";

    twoSetContainer.style.display = "none";
    twoSetText.style.display = "none"

    diagram.style.visibility = "hidden";
    diagram2.style.display = "block";
    
    title.style.visibility = "hidden";
    title2.style.visibility ="visible";
})

const firstSetInput = document.getElementById('set1');
const secondSetInput = document.getElementById('set2');

const firstSet = document.getElementById('set1-container');
const secondSet = document.getElementById('set2-container');
const thirdSet = document.getElementById('set3-container');

const unionContainer = document.getElementById('union-container');

const inter1Container = document.getElementById('intersection1-container');
const inter2Container = document.getElementById('intersection2-container');

const diff1Container = document.getElementById('difference1-container');
const diff2Container = document.getElementById('difference2-container');

const comp1Container = document.getElementById('complement1-container');
const comp2Container = document.getElementById('complement2-container');

const submitBtn = document.getElementById('submit-btn');
const submitBtnTwo = document.getElementById('submit-btn2');

//FUNCTION if user selects 2 sets
submitBtn.addEventListener('click', () => {
    const setA = new Set(firstSetInput.value.split(" "));
    const setB = new Set(secondSetInput.value.split(" "));
  
    performSetOperations([setA, setB]);
    firstSet.textContent = firstSetInput.value;
    secondSet.textContent = secondSetInput.value;

})

// FOR THREE SETS INPUT
const setOne = document.getElementById('set1-of-3');
const setTwo = document.getElementById('set2-of-3');
const setThree = document.getElementById('set3-of-3');

const setOneContainer = document.getElementById('set-container-1');
const setTwoContainer = document.getElementById('set-container-2');
const setThreeContainer = document.getElementById('set-container-3');

// FUNCTION if user selects 3 sets
submitBtnTwo.addEventListener('click', () => {
    const setA = new Set(setOne.value.split(" "));
    const setB = new Set(setTwo.value.split(" "));
    const setC = new Set(setThree.value.split(" "));
  
    performSetOperations([setA, setB, setC]);
    setOneContainer.textContent = setOne.value;
    setTwoContainer.textContent = setTwo.value;
    setThreeContainer.textContent = setThree.value;

    diagramA.textContent = setOne.value;
    diagramB.textContent = setTwo.value;
    diagramC.textContent = setThree.value;
})

// FOR VENN DIAGRAM
const intersectDiagramA = document.getElementById('intersect-set-a');
const intersectDiagramBoth = document.getElementById('intersect-both');
const intersectDiagramB = document.getElementById('intersect-set-b');

const diffDiagramA = document.getElementById('difference-set-a');
const diffDiagramB = document.getElementById('difference-set-b');

const compDiagramA = document.getElementById('complement-set-a');
const compDiagramB = document.getElementById('complement-set-b');

const symmetricDiagramA = document.getElementById('symmetric-set-a');
const symmetricDiagramB = document.getElementById('symmetric-set-b');

// FOR VENN DIAGRAM - THREE SETS
const intersectDiagramAB = document.getElementById('intersect-ab');
const intersectDiagramBC = document.getElementById('intersect-bc');
const intersectDiagramAC = document.getElementById('intersect-ac');
const intersectDiagramAll = document.getElementById('intersect-all');


// FOR THREE SETS
const intersectOne = document.getElementById('intersection1-container-3');
const intersectTwo = document.getElementById('intersection2-container-3');
const intersectThree = document.getElementById('intersection3-container-3');
const intersectAll = document.getElementById('intersectionall-container-3');

const differenceThree = document.getElementById('difference3-container-3');
const differenceFour = document.getElementById('difference4-container-3');
const differenceFive = document.getElementById('difference5-container-3');
const differenceSix = document.getElementById('difference6-container-3');

const complementOne = document.getElementById('complement1-container-3');
const complementTwo = document.getElementById('complement2-container-3');
const complementThree = document.getElementById('complement3-container-3');

function performSetOperations(setData) {
    if (setData.length === 2) {
      const setA = setData[0];
      const setB = setData[1];
      unionContainer.textContent = "Union of Sets = " + [...new Set([...setA, ...setB])].sort((a, b) => a - b).join(", ");
      //   union2Container.textContent = "Union of set B and set A (B u A) = " + [...new Set([...setB, ...setA])].join(", ");
      
      inter1Container.textContent = "Intersection of Sets = " + [...new Set([...setA].filter(x => setB.has(x)))].join(", ");
      intersectDiagramBoth.textContent = [...new Set([...setA].filter(x => setB.has(x)))].join(", ");

      diff1Container.textContent = "Difference of set A and set B (A - B) = " + [...new Set([...setA].filter(x => !setB.has(x)))].join(", ");
      diff2Container.textContent = "Difference of set B and set A (B - A) = " + [...new Set([...setB].filter(x => !setA.has(x)))].join(", ");
      diffDiagramB.textContent = [...new Set([...setA].filter(x => !setB.has(x)))].join(", ");
      diffDiagramA.textContent = [...new Set([...setB].filter(x => !setA.has(x)))].join(", ");

      const complementA = new Set([...setB].filter(x => !setA.has(x)));
      comp1Container.textContent = "Complement of set A (A') = " + [...complementA].join(", ");
      compDiagramB.textContent = [...complementA].join(", ");

      const complementB = new Set([...setA].filter(x => !setB.has(x)));
      comp2Container.textContent = "Complement of set B (B') = " + [...complementB].join(", ");
      compDiagramA.textContent = [...complementB].join(", ");


    } else 
    if (setData.length === 3) {
      const setA = setData[0];
      const setB = setData[1];
      const setC = setData[2];

      unionContainer.textContent = "Union of sets: " + [...new Set([...setA, ...setB, ...setC])].join(", ");

      intersectOne.textContent = "Intersection of set A and set B (A ∩ B) = " + [...new Set([...setA].filter(x => setB.has(x)))].join(", ");
      intersectDiagramAB.textContent = [...new Set([...setA].filter(x => setB.has(x)))].join(", ");

      intersectTwo.textContent = "Intersection of set A and set C (A ∩ C) = " + [...new Set([...setA].filter(x => setC.has(x)))].join(", ");
      intersectDiagramAC.textContent = [...new Set([...setA].filter(x => setC.has(x)))].join(", ");

      intersectThree.textContent = "Intersection of set B and set C (B ∩ C) = " + [...new Set([...setB].filter(x => setC.has(x)))].join(", ");
      intersectDiagramBC.textContent = [...new Set([...setB].filter(x => setC.has(x)))].join(", ");
      
      const intersectionAll = setData.reduce((acc, set) => {
        return new Set([...acc].filter(x => set.has(x)));
      });
  
      intersectAll.textContent = "Intersection of All Sets = " + [...intersectionAll].join(", ");
      intersectDiagramAll.textContent = [...intersectionAll].join(", ");
 
      diff1Container.textContent = "Difference of set A and set B (A - B) = " + [...new Set([...setA].filter(x => !setB.has(x)))].join(", ");
      diff2Container.textContent = "Difference of set B and set A (B - A) = " + [...new Set([...setB].filter(x => !setA.has(x)))].join(", ");
      differenceThree.textContent = "Difference of set A and set C (A - C) = " + [...new Set([...setA].filter(x => !setC.has(x)))].join(", ");
      differenceFour.textContent = "Difference of set C and set A (C - A) = " + [...new Set([...setC].filter(x => !setA.has(x)))].join(", ");
      differenceFive.textContent = "Difference of set B and set C (B - C) = " + [...new Set([...setB].filter(x => !setC.has(x)))].join(", ");
      differenceSix.textContent = "Difference of set C and set B (C - B) = " + [...new Set([...setC].filter(x => !setB.has(x)))].join(", ");

      const complementA = new Set([...setB, ...setC].filter(x => !setA.has(x)));
      complementOne.textContent = "Complement of set A (A') = " + [...complementA].join(", ");

      const complementB = new Set([...setA, ...setC].filter(x => !setB.has(x)));
      complementTwo.textContent = "Complement of set B (B') = " + [...complementB].join(", ");

      const complementC = new Set([...setA, ...setB].filter(x => !setC.has(x)));
      complementThree.textContent = "Complement of set C (C') = " + [...complementC].join(", ");

    } else {
      console.log("Invalid number of sets.");
    }
  }