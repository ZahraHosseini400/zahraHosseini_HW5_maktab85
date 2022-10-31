const ask = (qestion, yes, no) => {
    if (confirm(qestion)) yes();
    else no();
  };
  ask(
    "Do you agree?",
    ()=> {
      alert("you agreed");
    },
     ()=> {
      alert("you canceled the execution.");
    }
  );
  