// || HEADER

const rock = document.querySelector(".rock");
const rockDrop = document.querySelector(".rockdrop");
const subsurface = document.querySelector(".surface");
const subsurfaceDrop = document.querySelector(".subsurfacedrop");
const cata = document.querySelector(".catalyst");
const cataDrop = document.querySelector(".catalystdrop");
const vac = document.querySelector(".vacuum");
const vacDrop = document.querySelector(".vacuumdrop");
const green = document.querySelector(".green");

// Rock Dop
rock.addEventListener("mouseover", () => {
    setTimeout(() => {
      rockDrop.style.display = "flex"; 
      green.style.display = "none";
    }, 500);
  });
  
rock.addEventListener("mouseout", () => {
    rockDrop.style.display = "none";
    green.style.display = "flex";
});

rockDrop.addEventListener("mouseover", () => {
    rockDrop.style.display = "flex"; 
    green.style.display = "none";
});
rockDrop.addEventListener("mouseout", () => {
    rockDrop.style.display = "none";
    green.style.display = "flex";
});  


// Surface Drop
subsurface.addEventListener("mouseover", () => {
    setTimeout(() => {
        subsurfaceDrop.style.display = "flex"; 
    green.style.display = "none";
    },500);
});
subsurface.addEventListener("mouseout", () => {
    subsurfaceDrop.style.display = "none";
    green.style.display = "flex";
});

subsurfaceDrop.addEventListener("mouseover", () => {
    subsurfaceDrop.style.display = "flex"; 
    green.style.display = "none";
});
subsurfaceDrop.addEventListener("mouseout", () => {
    subsurfaceDrop.style.display = "none";
    green.style.display = "flex";
});  


// Catalyst Drop
cata.addEventListener("mouseover", () => {
    setTimeout(() => {
        cataDrop.style.display = "flex"; 
    green.style.display = "none";
    },500)
});
cata.addEventListener("mouseout", () => {
    cataDrop.style.display = "none";
    green.style.display = "flex";
});

cataDrop.addEventListener("mouseover", () => {
    cataDrop.style.display = "flex"; 
    green.style.display = "none";
});
cataDrop.addEventListener("mouseout", () => {
    cataDrop.style.display = "none";
    green.style.display = "flex";
});


// Vacuum Drop
vac.addEventListener("mouseover", () => {
    setTimeout(() => {
        vacDrop.style.display = "flex"; 
    green.style.display = "none";
    },500);
});
vac.addEventListener("mouseout", () => {
    vacDrop.style.display = "none";
    green.style.display = "flex";
});

vacDrop.addEventListener("mouseover", () => {
    vacDrop.style.display = "flex"; 
    green.style.display = "none";
});
vacDrop.addEventListener("mouseout", () => {
    vacDrop.style.display = "none";
    green.style.display = "flex";
});

// || MAIN

const phase = document.querySelector(".phase");
const phaseDrop = document.querySelector(".phasedrop");
const simulation = document.querySelector(".simulation");
const simulationDrop = document.querySelector(".simulationdrop");
const recomb = document.querySelector(".recomb");
const recombDrop = document.querySelector(".recombdrop");
const density = document.querySelector(".density");
const densityDrop = document.querySelector(".densitydrop");
const viscosity = document.querySelector(".viscosity");
const viscosityDrop = document.querySelector(".viscositydrop");
const comp = document.querySelector(".comp");
const compDrop = document.querySelector(".compdrop");
const access = document.querySelector(".access");
const accessDrop = document.querySelector(".accessdrop");
const train = document.querySelector(".train");
const trainDrop = document.querySelector(".traindrop");

// Phase Drop
phase.addEventListener("mouseover", () => {
    phaseDrop.style.display = "block";
});

phase.addEventListener("mouseout", () => {
    phaseDrop.style.display = "none";
});


// Simulation Drop
simulation.addEventListener("mouseover", () => {
    simulationDrop.style.display = "block";
});

simulation.addEventListener("mouseout", () => {
    simulationDrop.style.display = "none";
});


// Recomb Drop
recomb.addEventListener("mouseover", () => {
    recombDrop.style.display = "block";
});

recomb.addEventListener("mouseout", () => {
    recombDrop.style.display = "none";
});


// Density drop
density.addEventListener("mouseover", () => {
    densityDrop.style.display = "block";
});

density.addEventListener("mouseout", () => {
    densityDrop.style.display = "none";
});


// Viscosity Drop
viscosity.addEventListener("mouseover", () => {
    viscosityDrop.style.display = "block";
});

viscosity.addEventListener("mouseout", () => {
    viscosityDrop.style.display = "none";
});


// Comp Drop
comp.addEventListener("mouseover", () => {
    compDrop.style.display = "block";
});

comp.addEventListener("mouseout", () => {
    compDropinst.style.display = "none";
});


// Access Drop
access.addEventListener("mouseover", () => {
    accessDrop.style.display = "block";
});

access.addEventListener("mouseout", () => {
    accessDrop.style.display = "none";
});


// Train Drop
train.addEventListener("mouseover", () => {
    trainDrop.style.display = "block";
});

train.addEventListener("mouseout", () => {
    trainDrop.style.display = "none";
});